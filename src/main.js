const tw = {
	Slate: {
		50: "#f8fafc",
		100: "#f1f5f9",
		200: "#e2e8f0",
		300: "#cbd5e1",
		400: "#94a3b8",
		500: "#64748b",
		600: "#475569",
		700: "#334155",
		800: "#1e293b",
		900: "#0f172a",
		950: "#020617",
	},
	Gray: {
		50: "#f9fafb",
		100: "#f3f4f6",
		200: "#e5e7eb",
		300: "#d1d5db",
		400: "#9ca3af",
		500: "#6b7280",
		600: "#4b5563",
		700: "#374151",
		800: "#1f2937",
		900: "#111827",
		950: "#030712",
	},
	Zinc: {
		50: blackScale[0],
		100: "#f4f4f5",
		200: "#e4e4e7",
		300: "#d4d4d8",
		400: "#a1a1aa",
		500: "#71717a",
		600: "#52525b",
		700: "#3f3f46",
		800: "#27272a",
		900: "#18181b",
		950: "#09090b",
	},
	Neutral: {
		50: blackScale[0],
		100: blackScale[1],
		200: blackScale[2],
		300: blackScale[3],
		400: blackScale[4],
		500: blackScale[5],
		600: blackScale[6],
		700: blackScale[7],
		800: blackScale[8],
		900: blackScale[9],
		950: blackScale[10],
	},
	Stone: {
		50: "#fafaf9",
		100: "#f5f5f4",
		200: "#e7e5e4",
		300: "#d6d3d1",
		400: "#a8a29e",
		500: "#78716c",
		600: "#57534e",
		700: "#44403c",
		800: "#292524",
		900: "#1c1917",
		950: "#0c0a09",
	},
	Red: {
		50: "#fef2f2",
		100: "#fee2e2",
		200: "#fecaca",
		300: "#fca5a5",
		400: "#f87171",
		500: "#ef4444",
		600: red[600],
		700: "#b91c1c",
		800: "#991b1b",
		900: "#7f1d1d",
		950: "#450a0a",
	},
	Orange: {
		50: "#fff7ed",
		100: "#ffedd5",
		200: "#fed7aa",
		300: "#fdba74",
		400: "#fb923c",
		500: "#f97316",
		600: "#ea580c",
		700: "#c2410c",
		800: "#9a3412",
		900: "#7c2d12",
		950: "#431407",
	},
	Amber: {
		50: "#fffbeb",
		100: "#fef3c7",
		200: "#fde68a",
		300: "#fcd34d",
		400: "#fbbf24",
		500: "#f59e0b",
		600: "#d97706",
		700: "#b45309",
		800: "#92400e",
		900: "#78350f",
		950: "#451a03",
	},
	Yellow: {
		50: "#fefce8",
		100: "#fef9c3",
		200: "#fef08a",
		300: "#fde047",
		400: "#facc15",
		500: "#eab308",
		600: "#ca8a04",
		700: "#a16207",
		800: "#854d0e",
		900: "#713f12",
		950: "#422006",
	},
	Lime: {
		50: "#f7fee7",
		100: "#ecfccb",
		200: "#d9f99d",
		300: "#bef264",
		400: "#a3e635",
		500: "#84cc16",
		600: "#65a30d",
		700: "#4d7c0f",
		800: "#3f6212",
		900: "#365314",
		950: "#1a2e05",
	},
	Green: {
		50: "#f0fdf4",
		100: "#dcfce7",
		200: "#bbf7d0",
		300: "#86efac",
		400: "#4ade80",
		500: "#22c55e",
		600: "#16a34a",
		700: "#15803d",
		800: "#166534",
		900: "#14532d",
		950: "#052e16",
	},
	Emerald: {
		50: "#ecfdf5",
		100: "#d1fae5",
		200: "#a7f3d0",
		300: "#6ee7b7",
		400: "#34d399",
		500: "#10b981",
		600: "#059669",
		700: "#047857",
		800: "#065f46",
		900: "#064e3b",
		950: "#022c22",
	},
	Teal: {
		50: "#f0fdfa",
		100: "#ccfbf1",
		200: "#99f6e4",
		300: "#5eead4",
		400: "#2dd4bf",
		500: "#14b8a6",
		600: "#0d9488",
		700: "#0f766e",
		800: "#115e59",
		900: "#134e4a",
		950: "#042f2e",
	},
	Cyan: {
		50: "#ecfeff",
		100: "#cffafe",
		200: "#a5f3fc",
		300: "#67e8f9",
		400: "#22d3ee",
		500: "#06b6d4",
		600: "#0891b2",
		700: "#0e7490",
		800: "#155e75",
		900: "#164e63",
		950: "#083344",
	},
	Sky: {
		50: "#f0f9ff",
		100: "#e0f2fe",
		200: "#bae6fd",
		300: "#7dd3fc",
		400: "#38bdf8",
		500: "#0ea5e9",
		600: "#0284c7",
		700: "#0369a1",
		800: "#075985",
		900: "#0c4a6e",
		950: "#082f49",
	},
	Blue: {
		50: "#eff6ff",
		100: "#dbeafe",
		200: "#bfdbfe",
		300: "#93c5fd",
		400: "#60a5fa",
		500: "#3b82f6",
		600: "#2563eb",
		700: blue[700],
		800: "#1e40af",
		900: "#1e3a8a",
		950: blue[950],
	},
	Indigo: {
		50: "#eef2ff",
		100: "#e0e7ff",
		200: "#c7d2fe",
		300: "#a5b4fc",
		400: "#818cf8",
		500: primary,
		600: "#4f46e5",
		700: "#4338ca",
		800: "#3730a3",
		900: "#312e81",
		950: "#1e1b4b",
	},
	Violet: {
		50: "#f5f3ff",
		100: "#ede9fe",
		200: "#ddd6fe",
		300: "#c4b5fd",
		400: "#a78bfa",
		500: "#8b5cf6",
		600: "#7c3aed",
		700: "#6d28d9",
		800: "#5b21b6",
		900: "#4c1d95",
		950: "#2e1065",
	},
	Purple: {
		50: "#faf5ff",
		100: "#f3e8ff",
		200: "#e9d5ff",
		300: "#d8b4fe",
		400: "#c084fc",
		500: "#a855f7",
		600: "#9333ea",
		700: "#7e22ce",
		800: "#6b21a8",
		900: "#581c87",
		950: "#3b0764",
	},
	Fuchsia: {
		50: "#fdf4ff",
		100: "#fae8ff",
		200: "#f5d0fe",
		300: "#f0abfc",
		400: "#e879f9",
		500: "#d946ef",
		600: "#c026d3",
		700: "#a21caf",
		800: "#86198f",
		900: "#701a75",
		950: "#4a044e",
	},
	Pink: {
		50: "#fdf2f8",
		100: "#fce7f3",
		200: "#fbcfe8",
		300: "#f9a8d4",
		400: "#f472b6",
		500: "#ec4899",
		600: "#db2777",
		700: "#be185d",
		800: "#9d174d",
		900: "#831843",
		950: "#500724",
	},
	Rose: {
		50: "#fff1f2",
		100: "#ffe4e6",
		200: "#fecdd3",
		300: "#fda4af",
		400: "#fb7185",
		500: "#f43f5e",
		600: "#e11d48",
		700: "#be123c",
		800: "#9f1239",
		900: "#881337",
		950: "#4c0519",
	},
}

const blackScale = [
	tw.Neutral[50],
	tw.Neutral[100],
	tw.Neutral[200],
	tw.Neutral[300],
	tw.Neutral[400],
	tw.Neutral[500],
	tw.Neutral[600],
	tw.Neutral[700],
	tw.Neutral[800],
	tw.Neutral[900],
	tw.Neutral[950],
];

const transparent = transparent;
const primary = tw.Indigo[600];
const primaryDark = tw.Indigo[800];
const code1 = tw.Blue[800];
const code2 = tw.Purple[800];
const code3 = tw.Green[800];

const red = {
	600: tw.Red[600],
}

const blue = {
	700: tw.Blue[700],
	800: tw.Blue[800],
	950: tw.Blue[950],
}

const json = {
	"name": "simple",
	"colors": {
		"focusBorder": primary,
		"foreground": blackScale[8],
		"disabledForeground": blackScale[7],
		"widget.border": blackScale[5],
		"widget.shadow": blackScale[5],
		"selection.background": blackScale[3],
		"descriptionForeground": blackScale[8],
		"errorForeground": red[600],
		"icon.foreground": blackScale[8],
		"sash.hoverBorder": blackScale[5],
		"window.activeBorder": blackScale[1],
		"textBlockQuote.background": blackScale[2],
		"textBlockQuote.border": blackScale[4],
		"textCodeBlock.background": blackScale[0],
		"textLink.activeForeground": blue[950],
		"textLink.foreground": blue[700],
		"textPreformat.foreground": blackScale[8],
		"textSeparator.foreground": blackScale[8],
		"toolbar.hoverBackground": blackScale[1],
		"toolbar.hoverOutline": blackScale[1],
		"toolbar.activeBackground": blackScale[1],
		"button.background": primary,
		"button.foreground": blackScale[0],
		"button.border": transparent,
		"button.separator": blackScale[0],
		"button.hoverBackground": blue[950],
		"button.secondaryForeground": blackScale[10],
		"button.secondaryBackground": blackScale[5],
		"button.secondaryHoverBackground": blackScale[5],
		"checkbox.background": blackScale[1],
		"checkbox.foreground": blackScale[7],
		"checkbox.border": blackScale[7],
		"checkbox.selectBackground": blackScale[7],
		"checkbox.selectBorder": blackScale[1],
		"dropdown.background": blackScale[2],
		"dropdown.listBackground": blackScale[2],
		"dropdown.border": blackScale[2],
		"dropdown.foreground": blackScale[10],
		"input.background": blackScale[0],
		"input.border": blackScale[1],
		"input.foreground": blackScale[8],
		"input.placeholderForeground": blackScale[5],
		"inputValidation.errorBackground": "#fee2e2",
		"inputValidation.errorForeground": red[600],
		"inputValidation.errorBorder": "#fecaca",
		"inputValidation.infoBackground": "#dbeafe",
		"inputValidation.infoForeground": "#2563eb",
		"inputValidation.infoBorder": "#bfdbfe",
		"inputValidation.warningBackground": "#ffedd5",
		"inputValidation.warningForeground": "#ea580c",
		"inputValidation.warningBorder": "#fed7aa",
		"scrollbar.shadow": transparent,
		"scrollbarSlider.activeBackground": blackScale[3],
		"scrollbarSlider.background": blackScale[2],
		"scrollbarSlider.hoverBackground": blackScale[3],
		"badge.foreground": blackScale[0],
		"badge.background": blackScale[8],
		"progressBar.background": blackScale[8],
		"list.activeSelectionBackground": blackScale[3],
		"list.activeSelectionForeground": blackScale[9],
		"list.activeSelectionIconForeground": blackScale[9],
		"list.dropBackground": blackScale[4],
		"list.focusBackground": blackScale[3],
		"list.focusForeground": blackScale[9],
		"list.focusHighlightForeground": blackScale[9],
		"list.focusOutline": transparent,
		"list.focusAndSelectionOutline": transparent,
		"list.highlightForeground": "#4338ca",
		"list.hoverBackground": blackScale[3],
		"list.hoverForeground": blackScale[8],
		"list.invalidItemForeground": red[600],
		"list.errorForeground": red[600],
		"list.warningForeground": "#ea580c",
		"activityBar.background": blackScale[1],
		"activityBar.dropBorder": blackScale[3],
		"activityBar.foreground": blackScale[8],
		"activityBar.inactiveForeground": blackScale[4],
		"activityBar.border": blackScale[1],
		"activityBarBadge.background": primary,
		"activityBarBadge.foreground": blackScale[0],
		"activityBar.activeBorder": blackScale[8],
		"activityBar.activeBackground": blackScale[1],
		"activityBar.activeFocusBorder": blackScale[8],
		"sideBar.background": blackScale[1],
		"sideBar.foreground": blackScale[6],
		"sideBar.border": transparent,
		"sideBar.dropBackground": blackScale[6],
		"sideBarTitle.foreground": "#292524",
		"sideBarSectionHeader.background": blackScale[2],
		"sideBarSectionHeader.foreground": blackScale[8],
		"sideBarSectionHeader.border": transparent,
		"editorGroup.border": transparent,
		"editorGroup.dropBackground": blackScale[2],
		"editorGroupHeader.noTabsBackground": blackScale[3],
		"editorGroupHeader.tabsBackground": blackScale[1],
		"editorGroupHeader.tabsBorder": transparent,
		"editorGroupHeader.border": transparent,
		"editorGroup.emptyBackground": blackScale[2],
		"editorGroup.focusedEmptyBorder": blackScale[2],
		"editorGroup.dropIntoPromptForeground": blackScale[7],
		"editorGroup.dropIntoPromptBackground": blackScale[1],
		"editorGroup.dropIntoPromptBorder": transparent,
		"tab.unfocusedActiveBackground": blackScale[0],
		"tab.activeForeground": blackScale[9],
		"tab.border": transparent,
		"tab.activeBorder": transparent,
		"tab.unfocusedActiveBorder": transparent,
		"tab.activeBorderTop": transparent,
		"tab.unfocusedActiveBorderTop": transparent,
		"tab.lastPinnedBorder": transparent,
		"tab.inactiveBackground": blackScale[2],
		"tab.unfocusedInactiveBackground": blackScale[2],
		"tab.inactiveForeground": blackScale[6],
		"tab.unfocusedActiveForeground": blackScale[9],
		"tab.unfocusedInactiveForeground": blackScale[6],
		"tab.hoverBackground": blackScale[0],
		"tab.unfocusedHoverBackground": blackScale[0],
		"tab.hoverForeground": blackScale[9],
		"tab.unfocusedHoverForeground": blackScale[9],
		"tab.hoverBorder": transparent,
		"tab.unfocusedHoverBorder": transparent,
		"tab.activeModifiedBorder": primary,
		"tab.inactiveModifiedBorder": primary,
		"tab.unfocusedActiveModifiedBorder": primary,
		"tab.unfocusedInactiveModifiedBorder": primary,
		"editorPane.background": blackScale[1],
		"sideBySideEditor.horizontalBorder": blackScale[1],
		"sideBySideEditor.verticalBorder": blackScale[1],
		"editor.background": blackScale[0],
		"editor.foreground": blackScale[8],
		"editorLineNumber.foreground": blackScale[4],
		"editorLineNumber.activeForeground": blackScale[6],
		"editorLineNumber.dimmedForeground": blackScale[6],
		"editorCursor.background": blackScale[0],
		"editorCursor.foreground": primary,
		"editor.selectionBackground": blackScale[3],
		"editor.selectionForeground": blackScale[10],
		"editor.inactiveSelectionBackground": blackScale[2],
		"editor.selectionHighlightBackground": "#fefce8",
		"editor.selectionHighlightBorder": transparent,
		"editor.wordHighlightBackground": "#fef08a",
		"editor.wordHighlightBorder": transparent,
		"editor.wordHighlightStrongBackground": "#fef08a",
		"editor.wordHighlightStrongBorder": transparent,
		"editor.findMatchBackground": "#fef08a",
		"editor.findMatchHighlightBackground": "#fef9c3",
		"editor.findRangeHighlightBackground": "#fef08a",
		"editor.findMatchBorder": transparent,
		"editor.findMatchHighlightBorder": transparent,
		"editor.findRangeHighlightBorder": transparent,
		"editor.hoverHighlightBackground": "#fef9c3",
		"editorLink.activeForeground": "#3b82f6",
		"editorWhitespace.foreground": blackScale[2],
		"editorIndentGuide.background": blackScale[3],
		"editorIndentGuide.activeBackground": blackScale[5],
		"editorRuler.foreground": blackScale[2],
		"editorBracketMatch.background": blackScale[3],
		"editorBracketMatch.border": transparent,
		"editorBracketHighlight.foreground1": "#a5b4fc",
		"editorBracketHighlight.foreground2": "#c4b5fd",
		"editorBracketHighlight.foreground3": "#d8b4fe",
		"editorBracketHighlight.foreground4": "#f0abfc",
		"editorBracketHighlight.foreground5": "#f9a8d4",
		"editorBracketHighlight.foreground6": "#fda4af",
		"editorBracketHighlight.unexpectedBracket.foreground": "#eab308",
		"editorBracketPairGuide.activeBackground1": "#a5b4fc",
		"editorBracketPairGuide.activeBackground2": "#c4b5fd",
		"editorBracketPairGuide.activeBackground3": "#d8b4fe",
		"editorBracketPairGuide.activeBackground4": "#f0abfc",
		"editorBracketPairGuide.activeBackground5": "#f9a8d4",
		"editorBracketPairGuide.activeBackground6": "#fda4af",
		"editorBracketPairGuide.background1": "#c7d2fe",
		"editorBracketPairGuide.background2": "#ddd6fe",
		"editorBracketPairGuide.background3": "#e9d5ff",
		"editorBracketPairGuide.background4": "#f5d0fe",
		"editorBracketPairGuide.background5": "#fbcfe8",
		"editorBracketPairGuide.background6": "#fecdd3",
		"editor.foldBackground": blackScale[2],
		"editorOverviewRuler.border": transparent,
		"editorOverviewRuler.modifiedForeground": "#f59e0b",
		"editorOverviewRuler.addedForeground": "#10b981",
		"editorOverviewRuler.deletedForeground": "#f43f5e",
		"editorOverviewRuler.errorForeground": "#ef4444",
		"editorOverviewRuler.warningForeground": "#f97316",
		"editorOverviewRuler.infoForeground": "#3b82f6",
		"editorOverviewRuler.bracketMatchForeground": blackScale[7],
		"editorError.foreground": red[600],
		"editorError.border": "#fecaca",
		"editorError.background": "#fecaca",
		"editorWarning.foreground": "#ea580c",
		"editorWarning.border": "#fed7aa",
		"editorWarning.background": "#fed7aa",
		"editorInfo.foreground": "#2563eb",
		"editorInfo.border": "#bfdbfe",
		"editorInfo.background": "#bfdbfe",
		"editorHint.foreground": "#0e7490",
		"editorHint.border": "#a5f3fc",
		"problemsErrorIcon.foreground": red[600],
		"problemsWarningIcon.foreground": "#ea580c",
		"problemsInfoIcon.foreground": "#2563eb",
		"editorUnnecessaryCode.border": red[600],
		"editorUnnecessaryCode.opacity": "#000000bb",
		"editorGutter.modifiedBackground": "#f59e0b",
		"editorGutter.addedBackground": "#10b981",
		"editorGutter.deletedBackground": "#f43f5e",
		"editorGutter.foldingControlForeground": blackScale[6],
		"diffEditor.insertedTextBackground": "#a7f3d0",
		"diffEditor.insertedTextBorder": transparent,
		"diffEditor.removedTextBackground": "#fecdd3",
		"diffEditor.removedTextBorder": transparent,
		"diffEditor.border": blackScale[3],
		"diffEditor.diagonalFill": "#fef08a",
		"diffEditor.insertedLineBackground": "#a7f3d0",
		"diffEditor.removedLineBackground": "#fecdd3",
		"diffEditorGutter.insertedLineBackground": "#a7f3d0",
		"diffEditorGutter.removedLineBackground": "#fecdd3",
		"diffEditorOverview.insertedForeground": "#10b981",
		"diffEditorOverview.removedForeground": "#f43f5e",
		"editorWidget.foreground": blackScale[8],
		"editorWidget.background": blackScale[1],
		"editorWidget.border": transparent,
		"editorWidget.resizeBorder": transparent,
		"editorSuggestWidget.background": blackScale[1],
		"editorSuggestWidget.border": transparent,
		"editorSuggestWidget.foreground": blackScale[8],
		"editorSuggestWidget.focusHighlightForeground": blackScale[8],
		"editorSuggestWidget.highlightForeground": blackScale[10],
		"editorSuggestWidget.selectedBackground": blackScale[2],
		"editorSuggestWidget.selectedForeground": blackScale[10],
		"editorSuggestWidgetStatus.foreground": blackScale[10],
		"editorHoverWidget.background": blackScale[2],
		"editorHoverWidget.border": transparent,
		"editorHoverWidget.highlightForeground": blackScale[3],
		"editorHoverWidget.statusBarBackground": blackScale[3],
		"editorGhostText.border": transparent,
		"editorGhostText.foreground": blackScale[5],
		"editorStickyScrollHover.background": blackScale[1],
		"panel.background": blackScale[1],
		"panel.border": transparent,
		"panel.dropBorder": blackScale[2],
		"panelTitle.activeBorder": blackScale[10],
		"panelTitle.activeForeground": blackScale[10],
		"panelTitle.inactiveForeground": blackScale[6],
		"panelInput.border": transparent,
		"panelSection.border": transparent,
		"panelSection.dropBackground": blackScale[2],
		"statusBar.background": blackScale[1],
		"statusBar.foreground": blackScale[8],
		"statusBar.border": transparent,
		"statusBar.debuggingBackground": blackScale[2],
		"statusBar.debuggingForeground": blackScale[9],
		"statusBar.debuggingBorder": transparent,
		"statusBar.noFolderForeground": blackScale[8],
		"statusBar.noFolderBackground": blackScale[0],
		"statusBar.noFolderBorder": transparent,
		"statusBarItem.activeBackground": blackScale[2],
		"statusBarItem.hoverBackground": blackScale[2],
		"statusBarItem.prominentForeground": blackScale[2],
		"statusBarItem.prominentBackground": blackScale[9],
		"statusBarItem.prominentHoverBackground": blackScale[3],
		"statusBarItem.remoteBackground": primary,
		"statusBarItem.remoteForeground": blackScale[10],
		"statusBarItem.errorBackground": "#ef4444",
		"statusBarItem.errorForeground": blackScale[10],
		"statusBarItem.warningBackground": "#f97316",
		"statusBarItem.warningForeground": blackScale[10],
		"statusBarItem.focusBorder": transparent,
		"statusBar.focusBorder": transparent,
		"titleBar.activeBackground": blackScale[1],
		"titleBar.activeForeground": blackScale[8],
		"titleBar.inactiveBackground": blackScale[1],
		"titleBar.inactiveForeground": blackScale[5],
		"titleBar.border": transparent,
		"pickerGroup.border": transparent,
		"pickerGroup.foreground": blackScale[8],
		"quickInput.background": blackScale[1],
		"quickInput.foreground": blackScale[8],
		"quickInputList.focusBackground": blackScale[3],
		"quickInputList.focusForeground": blackScale[10],
		"quickInputTitle.background": blackScale[1],
		"terminal.background": blackScale[1],
		"terminal.border": transparent,
		"terminal.foreground": blackScale[10],
		"terminal.ansiBlack": "#09090b",
		"terminal.ansiBrightBlack": "#27272a",
		"terminal.ansiRed": red[600],
		"terminal.ansiBrightRed": "#ef4444",
		"terminal.ansiGreen": "#16a34a",
		"terminal.ansiBrightGreen": "#22c55e",
		"terminal.ansiYellow": "#eab308",
		"terminal.ansiBrightYellow": "#facc15",
		"terminal.ansiBlue": "#2563eb",
		"terminal.ansiBrightBlue": "#3b82f6",
		"terminal.ansiBrightMagenta": "#d946ef",
		"terminal.ansiMagenta": "#c026d3",
		"terminal.ansiCyan": "#0891b2",
		"terminal.ansiBrightCyan": "#06b6d4",
		"terminal.ansiWhite": "#3f3f46",
		"terminal.ansiBrightWhite": "#71717a",
		"terminal.selectionBackground": blackScale[4],
		"terminal.inactiveSelectionBackground": blackScale[3],
		"terminalCursor.foreground": primary,
		"terminal.dropBackground": blackScale[4],
		"terminal.tab.activeBorder": primary,
		"terminalCommandDecoration.defaultBackground": blackScale[5],
		"terminalCommandDecoration.successBackground": "#22c55e",
		"terminalCommandDecoration.errorBackground": "#ef4444",
		"testing.iconFailed": "#ef4444",
		"testing.iconErrored": "#f97316",
		"testing.iconPassed": "#22c55e",
		"testing.runAction": "#22c55e",
		"testing.iconQueued": "#14b8a6",
		"testing.iconUnset": blackScale[5],
		"testing.iconSkipped": "#eab308",
		"testing.message.error.decorationForeground": "#ef4444",
		"testing.message.error.lineBackground": "#fee2e2",
		"testing.message.info.decorationForeground": "#0ea5e9",
		"testing.message.info.lineBackground": "#e0f2fe",
		"gitDecoration.addedResourceForeground": "#10b981",
		"gitDecoration.modifiedResourceForeground": "#f59e0b",
		"gitDecoration.deletedResourceForeground": "#f43f5e",
		"gitDecoration.renamedResourceForeground": "#f59e0b",
		"gitDecoration.stageModifiedResourceForeground": "#059669",
		"gitDecoration.stageDeletedResourceForeground": "#e11d48",
		"gitDecoration.untrackedResourceForeground": "#fbbf24",
		"gitDecoration.ignoredResourceForeground": "#78716c",
		"gitDecoration.conflictingResourceForeground": "#f87171",
		"gitDecoration.submoduleResourceForeground": "#ec4899",
		"charts.red": "#ef4444",
		"charts.blue": "#3b82f6",
		"charts.yellow": "#eab308",
		"charts.orange": "#f97316",
		"charts.green": "#22c55e",
		"charts.purple": "#a855f7"
	},
	"tokenColors": [
		{
			"scope": [
				"string",
				"constant.numeric",
				"constant.character",
				"constant.other",
				"punctuation.definition.string"
			],
			"settings": {
				"foreground": "#065f46"
			}
		},
		{
			"scope": [
				"keyword",
				"keyword.operator.new",
				"storage.modifier",
				"storage.type",
				"constant.language",
				"support.type",
				"support.type.property-name.json"
			],
			"settings": {
				"foreground": "#1e40af"
			}
		},
		{
			"scope": [
				"meta",
				"support.type",
				"variable.other.readwrite.alias"
			],
			"settings": {
				"foreground": "#6b21a8"
			}
		},
		{
			"scope": [
				"variable"
			],
			"settings": {
				"foreground": blackScale[9]
			}
		},
		{
			"scope": [
				"variable.other.constant"
			],
			"settings": {
				"fontStyle": "italic"
			}
		},
		{
			"scope": [
				"comment",
				"punctuation",
				"meta.brace",
				"storage.type.function.arrow"
			],
			"settings": {
				"foreground": blackScale[5]
			}
		}
	]
}