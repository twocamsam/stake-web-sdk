<script lang="ts">
	import type { Snippet } from 'svelte';

	import { BitmapText, Container, Rectangle, type Sizes } from 'pixi-svelte';

	import { SYMBOL_SIZE } from '../game/constants';

	type Props = {
		children: Snippet<[{ frameSizes: Sizes }]>;
	};

	const props: Props = $props();
	const GOTHIC_RED = 0xc41e3a;
	const PANEL_FILL = 0x1a0505;

	// Placeholder dark/blood panels standing in for the old mining Frame_TumbleWin.png
	// / Frame_Tumble.png sprites (still registered under the reelsFrame spritesheet,
	// see assets.ts) until real generated card-frame textures land. To swap back to
	// real art: replace these two <Rectangle> blocks with <Sprite key="Frame_TumbleWin.png" .../>
	// and <Sprite key="Frame_Tumble.png" .../> respectively, reusing the same *_SIZES.
	const TITLE_RATIO = 532 / 143;
	const TITLE_HEIGHT = SYMBOL_SIZE * 0.28;
	const TITLE_SIZES = {
		width: TITLE_HEIGHT * TITLE_RATIO,
		height: TITLE_HEIGHT,
	};

	const PANEL_RATIO = 1442 / 374;
	const PANEL_HEIGHT = SYMBOL_SIZE * 0.8;
	const PANEL_SIZES = {
		width: PANEL_HEIGHT * PANEL_RATIO,
		height: PANEL_HEIGHT,
	};
</script>

<Rectangle
	anchor={0.5}
	{...PANEL_SIZES}
	borderRadius={PANEL_SIZES.height * 0.3}
	backgroundColor={PANEL_FILL}
	backgroundAlpha={0.88}
	borderColor={GOTHIC_RED}
	borderWidth={2}
	borderAlpha={0.75}
/>

<Container y={-TITLE_HEIGHT * 1.2}>
	<Rectangle
		anchor={0.5}
		{...TITLE_SIZES}
		borderRadius={TITLE_SIZES.height * 0.3}
		backgroundColor={PANEL_FILL}
		backgroundAlpha={0.88}
		borderColor={GOTHIC_RED}
		borderWidth={2}
		borderAlpha={0.75}
	/>
	<BitmapText
		anchor={0.5}
		y={-TITLE_HEIGHT * 0.025}
		text="TUMBLE WIN"
		style={{ fontFamily: 'gold', fontSize: TITLE_HEIGHT * 0.45 }}
	/>
</Container>

{@render props.children({ frameSizes: PANEL_SIZES })}
