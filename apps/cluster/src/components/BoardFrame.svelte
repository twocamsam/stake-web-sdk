<script lang="ts">
	import { Sprite } from 'pixi-svelte';

	import { getContext } from '../game/context';

	const context = getContext();
	const POSITION_ADJUSTMENT = 1.01;

	// Bloodcount real art: boardPanel.png (1122x1402, portrait) replaces the old
	// frame_bg.png/frame_edge.png pair (a single image now, not a bg+edge duo).
	// "cover" fit around the board area with a little breathing room, preserving
	// the new art's own aspect ratio rather than the old landscape BG_RATIO.
	const BOARD_PANEL_NATIVE = { width: 1122, height: 1402 };
	const PANEL_COVER_MARGIN = 1.08;
	const panelSizes = $derived.by(() => {
		const boardLayout = context.stateGameDerived.boardLayout();
		const scale =
			Math.max(
				boardLayout.width / BOARD_PANEL_NATIVE.width,
				boardLayout.height / BOARD_PANEL_NATIVE.height,
			) * PANEL_COVER_MARGIN;
		return {
			width: BOARD_PANEL_NATIVE.width * scale,
			height: BOARD_PANEL_NATIVE.height * scale,
		};
	});
</script>

<Sprite
	key="boardPanel"
	anchor={0.5}
	x={context.stateGameDerived.boardLayout().x * POSITION_ADJUSTMENT}
	y={context.stateGameDerived.boardLayout().y * POSITION_ADJUSTMENT}
	width={panelSizes.width}
	height={panelSizes.height}
/>
