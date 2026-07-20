<script lang="ts">
	import { Rectangle, Sprite } from 'pixi-svelte';

	import { getContext } from '../game/context';

	const context = getContext();

	// Bloodcount real art: a single gothic village night scene replaces the old
	// mining foregroundAnimation/foregroundFeatureAnimation spine backgrounds
	// (there's no separate "feature"/freegame variant of this image, so it's shown
	// unconditionally rather than gameType-faded like the old pair was).
	const BACKGROUND_NATIVE = { width: 1536, height: 1024 };

	// "cover" fit: scale so the image fully covers the canvas in both dimensions,
	// cropping overflow, without distorting its aspect ratio. Sprite (unlike
	// SpineProvider) doesn't auto-derive a missing dimension, so both are computed here.
	const backgroundSizes = $derived.by(() => {
		const canvasSizes = context.stateLayoutDerived.canvasSizes();
		const scale = Math.max(
			canvasSizes.width / BACKGROUND_NATIVE.width,
			canvasSizes.height / BACKGROUND_NATIVE.height,
		);
		return {
			width: BACKGROUND_NATIVE.width * scale,
			height: BACKGROUND_NATIVE.height * scale,
		};
	});
</script>

<Rectangle {...context.stateLayoutDerived.canvasSizes()} backgroundColor={0x000000} zIndex={-3} />

<Sprite
	key="backgroundVillage"
	anchor={0.5}
	x={context.stateLayoutDerived.canvasSizes().width / 2}
	y={context.stateLayoutDerived.canvasSizes().height / 2}
	width={backgroundSizes.width}
	height={backgroundSizes.height}
	zIndex={-2}
/>
