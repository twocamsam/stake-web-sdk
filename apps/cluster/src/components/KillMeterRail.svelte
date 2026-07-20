<script lang="ts" module>
	export type EmitterEventKillCounter =
		| { type: 'killCounterShow' }
		| { type: 'killCounterHide' }
		| { type: 'killCounterUpdate'; totalKills?: number; killsAdded?: number };
</script>

<script lang="ts">
	import { Tween } from 'svelte/motion';

	import { MainContainer } from 'components-layout';
	import { FadeContainer } from 'components-pixi';
	import { Container, Graphics, Sprite } from 'pixi-svelte';

	import { getContext } from '../game/context';
	import { SYMBOL_SIZE } from '../game/constants';

	const context = getContext();

	// Elimination order, top-to-bottom. PRIEST is last and is never eliminated
	// (the "endless hunt") - see the pulsing-glow treatment below instead of a ring.
	const ORDER = ['PEASANT', 'FARMER', 'SMITH', 'GUARD', 'PRIEST'] as const;
	const PORTRAIT_ASSET_KEYS: Record<(typeof ORDER)[number], string> = {
		PEASANT: 'peasantPortrait',
		FARMER: 'farmerPortrait',
		SMITH: 'smithPortrait',
		GUARD: 'guardPortrait',
		PRIEST: 'priestPortrait',
	};

	const KILL_THRESHOLDS = [15, 30, 45, 60];
	const GOTHIC_RED = 0xc41e3a;
	const RING_UNDER_COLOR = 0x4a0f18;
	const HUNTED_TINT = 0x4d4d4d;

	const PORTRAIT_DIAMETER = SYMBOL_SIZE * 0.8;
	const RING_STROKE = 7;
	const RING_GAP = 3;
	const RING_RADIUS = PORTRAIT_DIAMETER * 0.5 + RING_STROKE * 0.5 + RING_GAP;
	const SLOT_SIZE = RING_RADIUS * 2;
	const SLOT_GAP = SYMBOL_SIZE * 0.25;
	const RAIL_HEIGHT = ORDER.length * SLOT_SIZE + (ORDER.length - 1) * SLOT_GAP;

	const position = $derived({
		x:
			context.stateGameDerived.boardLayout().x +
			context.stateGameDerived.boardLayout().width * 0.5 +
			SYMBOL_SIZE * 0.7,
		y:
			context.stateGameDerived.boardLayout().y -
			context.stateGameDerived.boardLayout().height * 0.5 +
			(context.stateGameDerived.boardLayout().height - RAIL_HEIGHT) * 0.5,
	});

	let show = $state(false);
	let totalKills = $state(0);
	// level = how many thresholds have been passed - only advances on levelUpShow,
	// not merely once totalKills crosses a threshold, so the ring stays full on the
	// current target until the level-up moment actually moves it to the next one.
	let level = $state(0);

	const activeIndex = $derived(level);
	const segmentFloor = $derived(level === 0 ? 0 : KILL_THRESHOLDS[level - 1]);
	const rawProgress = $derived(
		Math.min(Math.max((totalKills - segmentFloor) / 15, 0), 1),
	);

	const progress = new Tween(0);
	$effect(() => {
		progress.set(rawProgress, { duration: 350 });
	});

	// PRIEST's pulsing "endless hunt" glow, active once level 4 is reached.
	let priestGlowAlpha = $state(0.25);
	$effect(() => {
		if (level < 4) return;
		let frameId: number;
		const start = performance.now();
		const tick = (now: number) => {
			priestGlowAlpha = 0.35 + Math.sin((now - start) / 420) * 0.2;
			frameId = requestAnimationFrame(tick);
		};
		frameId = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(frameId);
	});

	context.eventEmitter.subscribeOnMount({
		killCounterShow: () => (show = true),
		killCounterHide: () => (show = false),
		killCounterUpdate: (emitterEvent) => {
			if (emitterEvent.totalKills !== undefined) totalKills = emitterEvent.totalKills;
		},
		levelUpShow: (emitterEvent) => {
			level = emitterEvent.level;
		},
		// freeSpinCounterShow fires at freegame entry (see FreeSpinCounter.svelte) - reset the hunt here
		freeSpinCounterShow: () => {
			totalKills = 0;
			level = 0;
			progress.set(0, { duration: 0 });
		},
	});
</script>

<MainContainer>
	<FadeContainer {show} {...position}>
		{#each ORDER as symbolName, index (symbolName)}
			{@const hunted = index < level}
			{@const isPriest = symbolName === 'PRIEST'}
			<Container y={index * (SLOT_SIZE + SLOT_GAP)}>
				<!-- blood-fill progress ring around the active target -->
				<Graphics
					draw={(g) => {
						if (index !== activeIndex || isPriest) return;
						const cx = RING_RADIUS;
						const cy = RING_RADIUS;
						g.circle(cx, cy, RING_RADIUS).stroke({
							width: RING_STROKE,
							color: RING_UNDER_COLOR,
							alpha: 0.9,
						});
						if (progress.current > 0.001) {
							const start = -Math.PI * 0.5;
							const end = start + progress.current * Math.PI * 2;
							g.arc(cx, cy, RING_RADIUS, start, end).stroke({
								width: RING_STROKE,
								color: GOTHIC_RED,
								cap: 'round',
							});
						}
					}}
				/>

				<!-- PRIEST's pulsing endless-hunt glow, once level 4 is reached -->
				{#if isPriest}
					<Graphics
						draw={(g) => {
							if (level < 4) return;
							g.circle(RING_RADIUS, RING_RADIUS, RING_RADIUS).stroke({
								width: RING_STROKE,
								color: GOTHIC_RED,
								alpha: priestGlowAlpha,
							});
						}}
					/>
				{/if}

				<Sprite
					key={PORTRAIT_ASSET_KEYS[symbolName]}
					anchor={0.5}
					x={RING_RADIUS}
					y={RING_RADIUS}
					width={PORTRAIT_DIAMETER}
					height={PORTRAIT_DIAMETER}
					tint={hunted ? HUNTED_TINT : 0xffffff}
					alpha={hunted ? 0.75 : 1}
				/>

				<!-- hunted treatment: a diagonal slash across eliminated targets -->
				{#if hunted}
					<Graphics
						draw={(g) => {
							const r = PORTRAIT_DIAMETER * 0.5 * 0.75;
							const cx = RING_RADIUS;
							const cy = RING_RADIUS;
							g.moveTo(cx - r, cy - r)
								.lineTo(cx + r, cy + r)
								.stroke({ width: 6, color: GOTHIC_RED, alpha: 0.85, cap: 'round' });
						}}
					/>
				{/if}
			</Container>
		{/each}
	</FadeContainer>
</MainContainer>
