<script lang="ts" module>
	export type EmitterEventLevelUpBanner =
		| { type: 'levelUpShow'; level: number; eliminatedSymbol: string; freeSpinsAwarded: number };
</script>

<script lang="ts">
	import { MainContainer } from 'components-layout';
	import { FadeContainer } from 'components-pixi';
	import { waitForResolve, waitForTimeout } from 'utils-shared/wait';

	import { getContext } from '../game/context';
	import { SYMBOL_SIZE } from '../game/constants';
	import { anchorToPivot, BitmapText, Container, type Sizes } from 'pixi-svelte';

	const context = getContext();

	const SHOW_DURATION = 1500;

	let show = $state(false);
	let level = $state(0);
	let eliminatedSymbol = $state('');
	let freeSpinsAwarded = $state(0);
	let oncomplete = $state(() => {});

	let levelSizes: Sizes = $state({ width: 0, height: 0 });
	let eliminatedSizes: Sizes = $state({ width: 0, height: 0 });
	let freeSpinsSizes: Sizes = $state({ width: 0, height: 0 });

	const textContainerSizes = $derived({
		width: Math.max(levelSizes.width, eliminatedSizes.width, freeSpinsSizes.width),
		height: levelSizes.height + eliminatedSizes.height + freeSpinsSizes.height,
	});
	const eliminatedPosition = $derived({ x: textContainerSizes.width / 2, y: levelSizes.height });
	const freeSpinsPosition = $derived({
		x: textContainerSizes.width / 2,
		y: levelSizes.height + eliminatedSizes.height,
	});

	context.eventEmitter.subscribeOnMount({
		levelUpShow: async (emitterEvent) => {
			level = emitterEvent.level;
			eliminatedSymbol = emitterEvent.eliminatedSymbol;
			freeSpinsAwarded = emitterEvent.freeSpinsAwarded;
			show = true;
			await waitForTimeout(SHOW_DURATION);
			show = false;
			await waitForResolve((resolve) => (oncomplete = resolve));
		},
	});
</script>

<MainContainer>
	<FadeContainer
		{show}
		x={context.stateGameDerived.boardLayout().x}
		y={context.stateGameDerived.boardLayout().y}
		oncomplete={() => oncomplete()}
	>
		<Container pivot={anchorToPivot({ sizes: textContainerSizes, anchor: { x: 0.5, y: 0.5 } })}>
			<BitmapText
				text={`LEVEL ${level}`}
				anchor={{ x: 0.5, y: 0 }}
				x={textContainerSizes.width / 2}
				style={{
					fontFamily: 'gold',
					fontSize: SYMBOL_SIZE * 0.8,
					fontWeight: 'bold',
				}}
				onresize={(sizes) => (levelSizes = sizes)}
			/>
			<BitmapText
				text={`${eliminatedSymbol} HUNTED`}
				anchor={{ x: 0.5, y: 0 }}
				{...eliminatedPosition}
				style={{
					fontFamily: 'gold',
					fontSize: SYMBOL_SIZE * 0.35,
				}}
				onresize={(sizes) => (eliminatedSizes = sizes)}
			/>
			<BitmapText
				text={`+${freeSpinsAwarded} FREE SPINS`}
				anchor={{ x: 0.5, y: 0 }}
				{...freeSpinsPosition}
				style={{
					fontFamily: 'gold',
					fontSize: SYMBOL_SIZE * 0.35,
				}}
				onresize={(sizes) => (freeSpinsSizes = sizes)}
			/>
		</Container>
	</FadeContainer>
</MainContainer>
