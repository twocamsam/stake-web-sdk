<script lang="ts" module>
	export type EmitterEventKillCounter =
		| { type: 'killCounterShow' }
		| { type: 'killCounterHide' }
		| { type: 'killCounterUpdate'; totalKills?: number; killsAdded?: number };
</script>

<script lang="ts">
	import { MainContainer } from 'components-layout';
	import { FadeContainer } from 'components-pixi';

	import { getContext } from '../game/context';
	import { SYMBOL_SIZE } from '../game/constants';
	import { Text } from 'pixi-svelte';

	const context = getContext();

	const KILL_THRESHOLDS = [45, 90, 135, 170];
	const GOTHIC_RED = 0xc41e3a;

	const position = $derived({
		x:
			context.stateGameDerived.boardLayout().x -
			context.stateGameDerived.boardLayout().width * 0.5,
		y:
			context.stateGameDerived.boardLayout().y -
			context.stateGameDerived.boardLayout().height * 0.5 -
			SYMBOL_SIZE * 0.6,
	});

	const fontSize = SYMBOL_SIZE * 0.275;

	let show = $state(false);
	let totalKills = $state(0);

	// level = how many thresholds have been passed so far
	const level = $derived(KILL_THRESHOLDS.filter((threshold) => totalKills >= threshold).length);
	const nextThreshold = $derived(KILL_THRESHOLDS[level]);
	const progressText = $derived(
		nextThreshold !== undefined
			? `VILLAGERS HUNTED: ${totalKills} / ${nextThreshold}`
			: `VILLAGERS HUNTED: ${totalKills}`,
	);

	context.eventEmitter.subscribeOnMount({
		killCounterShow: () => (show = true),
		killCounterHide: () => (show = false),
		killCounterUpdate: (emitterEvent) => {
			if (emitterEvent.totalKills !== undefined) totalKills = emitterEvent.totalKills;
		},
		// freeSpinCounterShow fires at freegame entry (see FreeSpinCounter.svelte) - reset the hunt here
		freeSpinCounterShow: () => (totalKills = 0),
	});
</script>

<MainContainer>
	<FadeContainer {show} {...position}>
		<Text
			text={progressText}
			anchor={{ x: 0, y: 0.5 }}
			style={{
				fontFamily: 'proxima-nova',
				fontSize,
				fontWeight: '700',
				fill: GOTHIC_RED,
				stroke: { color: 0x1a0000, width: 2 },
			}}
		/>
	</FadeContainer>
</MainContainer>
