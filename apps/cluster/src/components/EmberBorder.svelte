<script lang="ts">
	import { ParticleEmitter } from 'pixi-svelte';

	import BoardContainer from './BoardContainer.svelte';
	import { getContext } from '../game/context';
	import { SYMBOL_SIZE, BOARD_SIZES } from '../game/constants';

	const context = getContext();

	// Performance cap: total concurrent embers never exceeds this regardless of intensity.
	const MAX_PARTICLES_CAP = 70;
	const MIN_PARTICLES_CAP = 18;
	const BORDER_MARGIN = SYMBOL_SIZE * 0.15;

	// Closed rectangle just outside the board edge - polygonalChain spawns only
	// along this perimeter, not inside the shape.
	const perimeter = [
		{ x: -BORDER_MARGIN, y: -BORDER_MARGIN },
		{ x: BOARD_SIZES.width + BORDER_MARGIN, y: -BORDER_MARGIN },
		{ x: BOARD_SIZES.width + BORDER_MARGIN, y: BOARD_SIZES.height + BORDER_MARGIN },
		{ x: -BORDER_MARGIN, y: BOARD_SIZES.height + BORDER_MARGIN },
		{ x: -BORDER_MARGIN, y: -BORDER_MARGIN },
	];

	// Driven by the same globalMultiplierUpdate events GlobalMultiplier.svelte uses -
	// defaults to 1 (calm) in base game, climbs toward 10x through the bonus.
	let multiplier = $state(1);

	context.eventEmitter.subscribeOnMount({
		globalMultiplierUpdate: (emitterEvent) => {
			multiplier = emitterEvent.multiplier;
		},
		globalMultiplierHide: () => {
			multiplier = 1;
		},
	});

	// 0 at 1x (calm) -> 1 at 10x (raging)
	const intensity = $derived(Math.min(Math.max((multiplier - 1) / 9, 0), 1));
	// seconds between spawns - denser (smaller) as intensity rises
	const frequency = $derived(0.32 - intensity * 0.27);
	const maxParticles = $derived(
		Math.round(MIN_PARTICLES_CAP + intensity * (MAX_PARTICLES_CAP - MIN_PARTICLES_CAP)),
	);

	const emberTexture = $derived(context.stateApp.loadedAssets?.emberParticle);

	const config = $derived.by(() => ({
		lifetime: { min: 1.1, max: 1.9 },
		frequency: 0.2,
		emitterLifetime: -1,
		maxParticles: MAX_PARTICLES_CAP,
		addAtBack: false,
		pos: { x: 0, y: 0 },
		behaviors: [
			{ type: 'textureSingle', config: { texture: emberTexture } },
			{ type: 'spawnShape', config: { type: 'polygonalChain', data: perimeter } },
			{ type: 'blendMode', config: { blendMode: 'add' } },
			// 0 = right, 90 = up: mostly-vertical rise with a little natural spread
			{ type: 'rotationStatic', config: { min: 72, max: 108 } },
			{ type: 'moveSpeedStatic', config: { min: 16, max: 34 } },
			{ type: 'scaleStatic', config: { min: 0.12, max: 0.3 } },
			{
				type: 'alpha',
				config: {
					alpha: {
						list: [
							{ value: 0, time: 0 },
							{ value: 0.85, time: 0.18 },
							{ value: 0, time: 1 },
						],
					},
				},
			},
			{
				type: 'color',
				config: {
					color: {
						list: [
							{ value: '#ffcf6e', time: 0 },
							{ value: '#ff7a1a', time: 0.45 },
							{ value: '#7a1505', time: 1 },
						],
					},
				},
			},
		],
	}));
</script>

{#if emberTexture}
	<BoardContainer>
		<ParticleEmitter key="emberParticle" {config} {frequency} {maxParticles} emit />
	</BoardContainer>
{/if}
