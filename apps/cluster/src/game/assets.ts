export default {
	loader: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/loader/loader.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/loader/loader.json', import.meta.url).href,
			scale: 2,
		},
		preload: true,
	},
	pressToContinueText: {
		type: 'sprites',
		src: new URL('../../assets/sprites/pressToContinueText/MM_pressanywhere.json', import.meta.url).href,
		preload: true,
	},
	H1: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols/symbols.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols/h1.json', import.meta.url).href,
			scale: 2,
		},
	},
	H2: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols/symbols.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols/h2.json', import.meta.url).href,
			scale: 2,
		},
	},
	H3: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols/symbols.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols/h3.json', import.meta.url).href,
			scale: 2,
		},
	},
	H4: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols/symbols.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols/h4.json', import.meta.url).href,
			scale: 2,
		},
	},
	H5: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols/symbols.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols/h5.json', import.meta.url).href,
			scale: 2,
		},
	},
	L1: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols/symbols.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols/l1.json', import.meta.url).href,
			scale: 2,
		},
	},
	L2: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols/symbols.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols/l2.json', import.meta.url).href,
			scale: 2,
		},
	},
	L3: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols/symbols.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols/l3.json', import.meta.url).href,
			scale: 2,
		},
	},
	L4: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols/symbols.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols/l4.json', import.meta.url).href,
			scale: 2,
		},
	},
	M: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols2/symbols2.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols2/M.json', import.meta.url).href,
			scale: 2,
		},
	},
	S: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols2/symbols2.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols2/S.json', import.meta.url).href,
			scale: 2,
		},
	},
	// ============================================================================
	// BLOODCOUNT symbol slots — real static art
	// ============================================================================
	// The 11 entries below are the real Bloodcount symbols (5 high, 5 low/royal, 1
	// scatter). Each is a standalone 512x512 transparent-padded PNG (not a spine
	// skeleton), living in static/assets/sprites/bloodcount/ and registered the
	// same way `payFrame` registers its single PNG below: `{ type: 'sprite', src }`.
	//
	// Symbol -> file (all under assets/sprites/bloodcount/):
	//   VLORD.png  PRIEST.png  GUARD.png  SMITH.png  FARMER.png
	//   PEASANT.png A.png  K.png  Q.png  J.png
	//   MOON.png (scatter)
	//
	// NOTE: the math redesign removed BAKER/STRAW/CART entirely (replaced by the
	// four royal-paying symbols A/K/Q/J) and separately renamed MILLER -> PEASANT.
	// MILLER is left registered-but-dormant below (harmless, book data will never
	// reference it again); BAKER/STRAW/CART were removed outright since the math
	// will never reference them again either.
	//
	// TO SWAP IN NEWER ART: replace the PNG file in
	// static/assets/sprites/bloodcount/ (same filename) — no code change needed.
	// To rename a file, update the `src` URL below AND the matching `assetKey` in
	// constants.ts's SYMBOL_INFO_MAP for that symbol (static/spin/land/win/
	// postWinStatic all point at the same key). `explosion` is a separate shared
	// spine effect used by every symbol and is untouched by any of this.
	//
	// AVOIDING THE DUPLICATE-KEY ATLAS HAZARD (see the stall investigation): this
	// no longer applies now that these are plain sprites, not spine skeletons — but
	// if a symbol ever moves to spine art again, give it its own dedicated
	// atlas+skeleton file pair rather than sharing a URL with another key.
	VLORD: {
		type: 'sprite',
		src: new URL('../../assets/sprites/bloodcount/VLORD.png', import.meta.url).href,
	},
	PRIEST: {
		type: 'sprite',
		src: new URL('../../assets/sprites/bloodcount/PRIEST.png', import.meta.url).href,
	},
	GUARD: {
		type: 'sprite',
		src: new URL('../../assets/sprites/bloodcount/GUARD.png', import.meta.url).href,
	},
	SMITH: {
		type: 'sprite',
		src: new URL('../../assets/sprites/bloodcount/SMITH.png', import.meta.url).href,
	},
	FARMER: {
		type: 'sprite',
		src: new URL('../../assets/sprites/bloodcount/FARMER.png', import.meta.url).href,
	},
	// dormant: math renamed this symbol to PEASANT (see PEASANT below); no longer referenced by book data
	MILLER: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols/symbols.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols/l2.json', import.meta.url).href,
			scale: 2,
		},
	},
	PEASANT: {
		type: 'sprite',
		src: new URL('../../assets/sprites/bloodcount/PEASANT.png', import.meta.url).href,
	},
	A: {
		type: 'sprite',
		src: new URL('../../assets/sprites/bloodcount/A.png', import.meta.url).href,
	},
	K: {
		type: 'sprite',
		src: new URL('../../assets/sprites/bloodcount/K.png', import.meta.url).href,
	},
	Q: {
		type: 'sprite',
		src: new URL('../../assets/sprites/bloodcount/Q.png', import.meta.url).href,
	},
	J: {
		type: 'sprite',
		src: new URL('../../assets/sprites/bloodcount/J.png', import.meta.url).href,
	},
	MOON: {
		type: 'sprite',
		src: new URL('../../assets/sprites/bloodcount/MOON.png', import.meta.url).href,
	},
	// ============================================================================
	// end BLOODCOUNT symbol slots
	// ============================================================================
	// KillMeterRail portraits: circular 256x256 crops of the 5 human targets, used
	// by the side-rail blood-meter (see KillMeterRail.svelte) instead of the board
	// symbol art above. Same elimination-order roster minus VLORD (the hunter, not
	// a target) plus PRIEST (never eliminated, but still shown on the rail).
	peasantPortrait: {
		type: 'sprite',
		src: new URL('../../assets/sprites/portraits/PEASANT_portrait.png', import.meta.url).href,
	},
	farmerPortrait: {
		type: 'sprite',
		src: new URL('../../assets/sprites/portraits/FARMER_portrait.png', import.meta.url).href,
	},
	smithPortrait: {
		type: 'sprite',
		src: new URL('../../assets/sprites/portraits/SMITH_portrait.png', import.meta.url).href,
	},
	guardPortrait: {
		type: 'sprite',
		src: new URL('../../assets/sprites/portraits/GUARD_portrait.png', import.meta.url).href,
	},
	priestPortrait: {
		type: 'sprite',
		src: new URL('../../assets/sprites/portraits/PRIEST_portrait.png', import.meta.url).href,
	},
	explosion: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols3/symbols3.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols3/explosion.json', import.meta.url).href,
			scale: 2,
		},
	},
	W: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/symbols3/symbols3.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/symbols3/W.json', import.meta.url).href,
			scale: 2,
		},
	},
	reelsFrame: {
		type: 'sprites',
		src: new URL('../../assets/sprites/reelsFrame/reels_frame.json', import.meta.url).href,
	},
	payFrame: {
		type: 'sprite',
		src: new URL('../../assets/sprites/payFrame/payFrame.png', import.meta.url).href,
	},
	// Bloodcount real art: gothic village night scene (replaces the mining
	// foregroundAnimation/foregroundFeatureAnimation spine backgrounds) and the
	// dark board panel (replaces frame_bg.png/frame_edge.png).
	backgroundVillage: {
		type: 'sprite',
		src: new URL('../../assets/sprites/backgroundVillage/backgroundVillage.png', import.meta.url)
			.href,
		preload: true,
	},
	boardPanel: {
		type: 'sprite',
		src: new URL('../../assets/sprites/boardPanel/boardPanel.png', import.meta.url).href,
		preload: true,
	},
	// Soft radial-gradient glow, white so it can be tinted per-particle at runtime.
	// Used by EmberBorder.svelte's fire-particle effect (see below).
	emberParticle: {
		type: 'sprite',
		src: new URL('../../assets/sprites/emberParticle/ember.png', import.meta.url).href,
		preload: true,
	},
	anticipation: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/anticipation/anticipation.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/anticipation/anticipation.json', import.meta.url).href,
			scale: 2,
		},
	},
	goldFont: {
		type: 'font',
		src: new URL('../../assets/fonts/goldFont/mm_gold.xml', import.meta.url).href,
	},
	goldBlur: {
		type: 'font',
		src: new URL('../../assets/fonts/goldBlur/miningfont_gold_blur.xml', import.meta.url).href,
	},
	silverFont: {
		type: 'font',
		src: new URL('../../assets/fonts/silverFont/mm_silver.xml', import.meta.url).href,
	},
	purpleFont: {
		type: 'font',
		src: new URL('../../assets/fonts/purpleFont/mm_purple.xml', import.meta.url).href,
	},
	bigwin: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/bigwin/big_wins.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/bigwin/mm_bigwin.json', import.meta.url).href,
			scale: 2,
		},
	},
	globalMultiplier: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/globalMultiplier/multiframe.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/globalMultiplier/multiframe.json', import.meta.url).href,
			scale: 2,
		},
	},
	fsIntro: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/fsIntro/fs_screen.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/fsIntro/fs_screen.json', import.meta.url).href,
			scale: 2,
		},
	},
	fsIntroNumber: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/fsIntro/fs_screen.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/fsIntro/fs_screen_number.json', import.meta.url).href,
			scale: 2,
		},
	},
	fsOutroNumber: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/fsIntro/fs_screen.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/fsIntro/fs_total_number.json', import.meta.url).href,
			scale: 2,
		},
	},
	foregroundAnimation: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/foregroundAnimation/mm_bg.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/foregroundAnimation/mm_bg.json', import.meta.url).href,
			scale: 2,
		},
		preload: true,
	},
	foregroundFeatureAnimation: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/foregroundFeatureAnimation/mm_bg_feature.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/foregroundFeatureAnimation/mm_bg_feature.json', import.meta.url).href,
			scale: 2,
		},
		preload: true,
	},
	tumble_multiplier: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/tumbleWin/tumble_win.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/tumbleWin/tumble_multiplier.json', import.meta.url).href,
			scale: 2,
		},
	},
	tumble_win: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/tumbleWin/tumble_win.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/tumbleWin/tumble_win.json', import.meta.url).href,
			scale: 2,
		},
	},
	progressBar: {
		type: 'sprites',
		src: new URL('../../assets/sprites/progressBar/progressBar.json', import.meta.url).href,
		preload: true,
	},
	freeSpins: {
		type: 'sprites',
		src: new URL('../../assets/sprites/freeSpins/freeSpins.json', import.meta.url).href,
	},
	winSmall: {
		type: 'sprites',
		src: new URL('../../assets/sprites/winSmall/MM_Localisation_winsmall.json', import.meta.url).href,
	},
	clusterWin: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/clusterWin/clusterpay.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/clusterWin/clusterpay.json', import.meta.url).href,
			scale: 2,
		},
	},
	transition: {
		type: 'spine',
		src: {
			atlas: new URL('../../assets/spines/transition/transition.atlas', import.meta.url).href,
			skeleton: new URL('../../assets/spines/transition/transition.json', import.meta.url).href,
			scale: 2,
		},
	},
	symbolsStatic: {
		type: 'sprites',
		src: new URL('../../assets/sprites/symbolsStatic/symbolsStatic.json', import.meta.url).href,
	},
	coins: {
		type: 'spriteSheet',
		src: new URL('../../assets/sprites/coin/SD2_Coin.json', import.meta.url).href,
	},
	sound: {
		type: 'audio',
		src: new URL('../../assets/audio/sounds.json', import.meta.url).href,
		preload: true,
	},
} as const;
