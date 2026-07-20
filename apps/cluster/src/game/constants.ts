import _ from 'lodash';

import type { RawSymbol, SymbolState } from './types';

// Vertical cell pitch (row height). Reduced from 80 so the full board + header
// fits with margin above the HUD - every UI element sized relative to
// SYMBOL_SIZE shrinks proportionally along with it.
export const SYMBOL_SIZE = 68;

// Cell width:height ratio. Circular/portrait Bloodcount art reads better
// slightly narrower than tall; the square symbol art in progress will use 1.0.
// Change this one constant when that art lands - CELL_WIDTH and the render
// dimensions below derive from it automatically.
export const CELL_ASPECT = 0.78;
// Horizontal cell pitch (reel spacing), derived from CELL_ASPECT.
export const CELL_WIDTH = SYMBOL_SIZE * CELL_ASPECT;

// Fraction of each cell the rendered card fills. Near 1 = cells tile almost
// edge-to-edge; the cards' own frames (once real card art lands) provide the
// visual separation instead of empty gutter space.
export const CELL_FILL = 0.97;
// Single source of truth for on-board symbol render size - see SymbolSprite.svelte.
// Every symbol uses these exact numbers regardless of source art size or any
// per-symbol data, so uniformity holds by construction.
export const SYMBOL_RENDER_WIDTH = CELL_WIDTH * CELL_FILL;
export const SYMBOL_RENDER_HEIGHT = SYMBOL_SIZE * CELL_FILL;

export const REEL_PADDING = 0.53;

// initial board (padded top and bottom): 6 reels x 7 data rows (5 visible + 1 padding row top/bottom)
export const INITIAL_BOARD: RawSymbol[][] = [
	[
		{
			name: 'L1',
		},
		{
			name: 'H1',
		},
		{
			name: 'L1',
		},
		{
			name: 'L2',
		},
		{
			name: 'L2',
		},
		{
			name: 'L3',
		},
		{
			name: 'L2',
		},
	],
	[
		{
			name: 'L2',
		},
		{
			name: 'L2',
		},
		{
			name: 'L3',
		},
		{
			name: 'L2',
		},
		{
			name: 'L2',
		},
		{
			name: 'L3',
		},
		{
			name: 'L2',
		},
	],
	[
		{
			name: 'L3',
		},
		{
			name: 'H3',
		},
		{
			name: 'L1',
		},
		{
			name: 'L1',
		},
		{
			name: 'H4',
		},
		{
			name: 'L2',
		},
		{
			name: 'H4',
		},
	],
	[
		{
			name: 'H4',
		},
		{
			name: 'L1',
		},
		{
			name: 'H2',
		},
		{
			name: 'H2',
		},
		{
			name: 'H4',
		},
		{
			name: 'H2',
		},
		{
			name: 'H2',
		},
	],
	[
		{
			name: 'L1',
		},
		{
			name: 'L1',
		},
		{
			name: 'H3',
		},
		{
			name: 'H1',
		},
		{
			name: 'H1',
		},
		{
			name: 'L2',
		},
		{
			name: 'L2',
		},
	],
	[
		{
			name: 'L1',
		},
		{
			name: 'L2',
		},
		{
			name: 'L2',
		},
		{
			name: 'H1',
		},
		{
			name: 'H4',
		},
		{
			name: 'H4',
		},
		{
			name: 'H2',
		},
	],
];

export const BOARD_DIMENSIONS = { x: INITIAL_BOARD.length, y: INITIAL_BOARD[0].length - 2 };

export const BOARD_SIZES = {
	width: CELL_WIDTH * BOARD_DIMENSIONS.x,
	height: SYMBOL_SIZE * BOARD_DIMENSIONS.y,
};

export const BACKGROUND_RATIO = 2039 / 1000;
export const PORTRAIT_BACKGROUND_RATIO = 1242 / 2208;
const PORTRAIT_RATIO = 800 / 1422;
const LANDSCAPE_RATIO = 1600 / 900;
const DESKTOP_RATIO = 1422 / 800;

const DESKTOP_HEIGHT = 800;
const LANDSCAPE_HEIGHT = 900;
const PORTRAIT_HEIGHT = 1422;
export const DESKTOP_MAIN_SIZES = { width: DESKTOP_HEIGHT * DESKTOP_RATIO, height: DESKTOP_HEIGHT };
export const LANDSCAPE_MAIN_SIZES = {
	width: LANDSCAPE_HEIGHT * LANDSCAPE_RATIO,
	height: LANDSCAPE_HEIGHT,
};
export const PORTRAIT_MAIN_SIZES = {
	width: PORTRAIT_HEIGHT * PORTRAIT_RATIO,
	height: PORTRAIT_HEIGHT,
};

export const HIGH_SYMBOLS = ['H1', 'H2', 'H3', 'H4', 'H5', 'VLORD', 'PRIEST', 'GUARD', 'SMITH', 'FARMER'];

export const INITIAL_SYMBOL_STATE: SymbolState = 'static';

const M_SIZE = 0.3;
const HIGH_SYMBOL_SIZE = 0.9;
const LOW_SYMBOL_SIZE = 0.9;
const SPECIAL_SYMBOL_SIZE = 1;

const SPIN_OPTIONS_SHARED = {
	reelFallInDelay: 80,
	reelPaddingMultiplierNormal: 1.25,
	reelPaddingMultiplierAnticipated: 18,
	reelFallOutDelay: 145,
};

export const SPIN_OPTIONS_DEFAULT = {
	...SPIN_OPTIONS_SHARED,
	symbolFallInSpeed: 3.5,
	symbolFallInInterval: 30,
	symbolFallInBounceSpeed: 0.15,
	symbolFallInBounceSizeMulti: 0.5,
	symbolFallOutSpeed: 3.5,
	symbolFallOutInterval: 20,
};

export const SPIN_OPTIONS_FAST = {
	...SPIN_OPTIONS_SHARED,
	symbolFallInSpeed: 7,
	symbolFallInInterval: 0,
	symbolFallInBounceSpeed: 0.3,
	symbolFallInBounceSizeMulti: 0.25,
	symbolFallOutSpeed: 7,
	symbolFallOutInterval: 0,
};

export const MOTION_BLUR_VELOCITY = 31;

export const zIndexes = {
	background: {
		backdrop: -3,
		normal: -2,
		feature: -1,
	},
};

const explosion = {
	type: 'spine',
	assetKey: 'explosion',
	animationName: 'explosion',
	sizeRatios: { width: 1, height: 1 },
};

const h1Static = { type: 'sprite', assetKey: 'h1.webp', sizeRatios: { width: 1, height: 1 } };
const h2Static = { type: 'sprite', assetKey: 'h2.webp', sizeRatios: { width: 1, height: 1 } };
const h3Static = { type: 'sprite', assetKey: 'h3.webp', sizeRatios: { width: 1, height: 1 } };
const h4Static = { type: 'sprite', assetKey: 'h4.webp', sizeRatios: { width: 1, height: 1 } };
const h5Static = { type: 'sprite', assetKey: 'h5.webp', sizeRatios: { width: 1, height: 1 } };

const l1Static = { type: 'sprite', assetKey: 'l1.webp', sizeRatios: { width: 1, height: 1 } };
const l2Static = { type: 'sprite', assetKey: 'l2.webp', sizeRatios: { width: 1, height: 1 } };
const l3Static = { type: 'sprite', assetKey: 'l3.webp', sizeRatios: { width: 1, height: 1 } };
const l4Static = { type: 'sprite', assetKey: 'l4.webp', sizeRatios: { width: 1, height: 1 } };

const sStatic = { type: 'sprite', assetKey: 's.png', sizeRatios: { width: 1.243, height: 1.243 } };
const wStatic = { type: 'sprite', assetKey: 'w.png', sizeRatios: { width: 1.12, height: 1.12 } };

const m2Static = {
	type: 'sprite',
	assetKey: 'm1_2x.png',
	sizeRatios: { width: 0.88, height: 0.88 },
};
const m4Static = {
	type: 'sprite',
	assetKey: 'm1_4x.png',
	sizeRatios: { width: 0.88, height: 0.88 },
};
const m5Static = { type: 'sprite', assetKey: 'm2_5x.png', sizeRatios: { width: 1, height: 1 } };
const m7Static = { type: 'sprite', assetKey: 'm2_7x.png', sizeRatios: { width: 1, height: 1 } };
const m10Static = { type: 'sprite', assetKey: 'm3_10x.png', sizeRatios: { width: 1, height: 1 } };

const wSizeRatios = { width: 1.5 * 0.9, height: SPECIAL_SYMBOL_SIZE * 1.15 };
const sSizeRatios = { width: 2.5, height: SPECIAL_SYMBOL_SIZE * 2.3 };

// Bloodcount real art: each is its own standalone 512x512 sprite (see assets.ts),
// registered directly under the symbol's own key rather than a shared sheet frame.
// All symbols share the exact same sizeRatios so every one renders at the same
// size on the board — no per-symbol size drift inherited from the old mining art.
const vlordStatic = { type: 'sprite', assetKey: 'VLORD', sizeRatios: { width: 1, height: 1 } };
const priestStatic = { type: 'sprite', assetKey: 'PRIEST', sizeRatios: { width: 1, height: 1 } };
const guardStatic = { type: 'sprite', assetKey: 'GUARD', sizeRatios: { width: 1, height: 1 } };
const smithStatic = { type: 'sprite', assetKey: 'SMITH', sizeRatios: { width: 1, height: 1 } };
const farmerStatic = { type: 'sprite', assetKey: 'FARMER', sizeRatios: { width: 1, height: 1 } };
const peasantStatic = { type: 'sprite', assetKey: 'PEASANT', sizeRatios: { width: 1, height: 1 } };
const aStatic = { type: 'sprite', assetKey: 'A', sizeRatios: { width: 1, height: 1 } };
const kStatic = { type: 'sprite', assetKey: 'K', sizeRatios: { width: 1, height: 1 } };
const qStatic = { type: 'sprite', assetKey: 'Q', sizeRatios: { width: 1, height: 1 } };
const jStatic = { type: 'sprite', assetKey: 'J', sizeRatios: { width: 1, height: 1 } };
const moonStatic = { type: 'sprite', assetKey: 'MOON', sizeRatios: { width: 1, height: 1 } };

export const SYMBOL_INFO_MAP = {
	H1: {
		explosion,
		win: {
			type: 'spine',
			assetKey: 'H1',
			animationName: 'h1',
			sizeRatios: { width: 0.5 * 1.15, height: HIGH_SYMBOL_SIZE * 0.57 },
		},
		postWinStatic: h1Static,
		static: h1Static,
		spin: h1Static,
		land: h1Static,
	},
	H2: {
		explosion,
		win: {
			type: 'spine',
			assetKey: 'H2',
			animationName: 'h2',
			sizeRatios: { width: 0.5, height: HIGH_SYMBOL_SIZE * 0.57 },
		},
		postWinStatic: h2Static,
		static: h2Static,
		spin: h2Static,
		land: h2Static,
	},
	H3: {
		explosion,
		win: {
			type: 'spine',
			assetKey: 'H3',
			animationName: 'h3',
			sizeRatios: { width: 0.5 * 0.9, height: HIGH_SYMBOL_SIZE * 0.53 },
		},
		postWinStatic: h3Static,
		static: h3Static,
		spin: h3Static,
		land: h3Static,
	},
	H4: {
		explosion,
		win: {
			type: 'spine',
			assetKey: 'H4',
			animationName: 'h4',
			sizeRatios: { width: 0.5 * 0.9, height: HIGH_SYMBOL_SIZE * 0.53 },
		},
		postWinStatic: h4Static,
		static: h4Static,
		spin: h4Static,
		land: h4Static,
	},
	H5: {
		explosion,
		win: {
			type: 'spine',
			assetKey: 'H5',
			animationName: 'h5',
			sizeRatios: { width: 0.5 * 0.9, height: HIGH_SYMBOL_SIZE * 0.53 },
		},
		postWinStatic: h5Static,
		static: h5Static,
		spin: h5Static,
		land: h5Static,
	},
	L1: {
		explosion,
		win: {
			type: 'spine',
			assetKey: 'L1',
			animationName: 'l1',
			sizeRatios: { width: 0.5 * 0.75, height: LOW_SYMBOL_SIZE * 0.65 },
		},
		postWinStatic: l1Static,
		static: l1Static,
		spin: l1Static,
		land: l1Static,
	},
	L2: {
		explosion,
		win: {
			type: 'spine',
			assetKey: 'L2',
			animationName: 'l2',
			sizeRatios: { width: 0.5 * 0.75, height: LOW_SYMBOL_SIZE * 0.65 },
		},
		postWinStatic: l2Static,
		static: l2Static,
		spin: l2Static,
		land: l2Static,
	},
	L3: {
		explosion,
		win: {
			type: 'spine',
			assetKey: 'L3',
			animationName: 'l3',
			sizeRatios: { width: 0.5 * 0.75, height: LOW_SYMBOL_SIZE * 0.63 },
		},
		postWinStatic: l3Static,
		static: l3Static,
		spin: l3Static,
		land: l3Static,
	},
	L4: {
		explosion,
		win: {
			type: 'spine',
			assetKey: 'L4',
			animationName: 'l4',
			sizeRatios: { width: 0.5 * 0.75, height: LOW_SYMBOL_SIZE * 0.63 },
		},
		postWinStatic: l4Static,
		static: l4Static,
		spin: l4Static,
		land: l4Static,
	},
	W: {
		explosion,
		postWinStatic: {
			type: 'sprite',
			assetKey: 'explodedW.png',
			sizeRatios: { width: 0.85, height: 0.85 },
		},
		static: wStatic,
		spin: wStatic,
		win: { type: 'spine', assetKey: 'W', animationName: 'wild_dynamite', sizeRatios: wSizeRatios },
		land: {
			type: 'spine',
			assetKey: 'W',
			animationName: 'wild_dynamite_land',
			sizeRatios: wSizeRatios,
		},
	},
	S: {
		explosion,
		postWinStatic: sStatic,
		static: sStatic,
		spin: {
			type: 'spine',
			assetKey: 'S',
			animationName: 'scatter_spin',
			sizeRatios: sSizeRatios,
		},
		win: { type: 'spine', assetKey: 'S', animationName: 'scatter_win', sizeRatios: sSizeRatios },
		land: {
			type: 'spine',
			assetKey: 'S',
			animationName: 'scatter_land',
			sizeRatios: sSizeRatios,
		},
	},
	VLORD: {
		explosion,
		win: vlordStatic,
		postWinStatic: vlordStatic,
		static: vlordStatic,
		spin: vlordStatic,
		land: vlordStatic,
	},
	PRIEST: {
		explosion,
		win: priestStatic,
		postWinStatic: priestStatic,
		static: priestStatic,
		spin: priestStatic,
		land: priestStatic,
	},
	GUARD: {
		explosion,
		win: guardStatic,
		postWinStatic: guardStatic,
		static: guardStatic,
		spin: guardStatic,
		land: guardStatic,
	},
	SMITH: {
		explosion,
		win: smithStatic,
		postWinStatic: smithStatic,
		static: smithStatic,
		spin: smithStatic,
		land: smithStatic,
	},
	FARMER: {
		explosion,
		win: farmerStatic,
		postWinStatic: farmerStatic,
		static: farmerStatic,
		spin: farmerStatic,
		land: farmerStatic,
	},
	// dormant: math renamed this symbol to PEASANT; no longer referenced by book data
	MILLER: {
		explosion,
		win: {
			type: 'spine',
			assetKey: 'MILLER',
			animationName: 'l2',
			sizeRatios: { width: 0.5 * 0.75, height: LOW_SYMBOL_SIZE * 0.65 },
		},
		postWinStatic: l2Static,
		static: l2Static,
		spin: l2Static,
		land: l2Static,
	},
	PEASANT: {
		explosion,
		win: peasantStatic,
		postWinStatic: peasantStatic,
		static: peasantStatic,
		spin: peasantStatic,
		land: peasantStatic,
	},
	A: {
		explosion,
		win: aStatic,
		postWinStatic: aStatic,
		static: aStatic,
		spin: aStatic,
		land: aStatic,
	},
	K: {
		explosion,
		win: kStatic,
		postWinStatic: kStatic,
		static: kStatic,
		spin: kStatic,
		land: kStatic,
	},
	Q: {
		explosion,
		win: qStatic,
		postWinStatic: qStatic,
		static: qStatic,
		spin: qStatic,
		land: qStatic,
	},
	J: {
		explosion,
		win: jStatic,
		postWinStatic: jStatic,
		static: jStatic,
		spin: jStatic,
		land: jStatic,
	},
	MOON: {
		explosion,
		win: moonStatic,
		postWinStatic: moonStatic,
		static: moonStatic,
		spin: moonStatic,
		land: moonStatic,
	},
} as const;

export const SCATTER_LAND_SOUND_MAP = {
	1: 'sfx_scatter_stop_1',
	2: 'sfx_scatter_stop_2',
	3: 'sfx_scatter_stop_3',
	4: 'sfx_scatter_stop_4',
	5: 'sfx_scatter_stop_5',
} as const;
