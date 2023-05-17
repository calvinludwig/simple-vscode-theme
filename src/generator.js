import colors from "./colors.js";

export function generator(name, grayVariant, darkMode) {
	const scale = darkMode
		? [950, 900, 800, 700, 600, 500, 400, 300, 200, 100, 50]
		: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

	const transparent = "#0000";

	return {
		"name": name,
		"colors": {
			"focusBorder": colors.Indigo[scale[5]],
			"foreground": grayVariant[scale[8]],
			"disabledForeground": grayVariant[scale[7]],
			"widget.border": grayVariant[scale[0]],
			"widget.shadow": grayVariant[scale[0]],
			"selection.background": grayVariant[scale[3]],
			"descriptionForeground": grayVariant[scale[8]],
			"errorForeground": colors.Red[scale[6]],
			"icon.foreground": grayVariant[scale[8]],
			"sash.hoverBorder": grayVariant[scale[5]],
			"window.activeBorder": grayVariant[scale[1]],
			"textBlockQuote.background": grayVariant[scale[2]],
			"textBlockQuote.border": grayVariant[scale[4]],
			"textCodeBlock.background": grayVariant[scale[0]],
			"textLink.activeForeground": colors.Blue[scale[10]],
			"textLink.foreground": colors.Blue[scale[7]],
			"textPreformat.foreground": grayVariant[scale[8]],
			"textSeparator.foreground": grayVariant[scale[8]],
			"toolbar.hoverBackground": grayVariant[scale[1]],
			"toolbar.hoverOutline": grayVariant[scale[1]],
			"toolbar.activeBackground": grayVariant[scale[1]],
			"button.background": colors.Indigo[scale[5]],
			"button.foreground": grayVariant[scale[0]],
			"button.border": transparent,
			"button.separator": grayVariant[scale[0]],
			"button.hoverBackground": colors.Indigo[scale[7]],
			"button.secondaryForeground": grayVariant[scale[10]],
			"button.secondaryBackground": grayVariant[scale[5]],
			"button.secondaryHoverBackground": grayVariant[scale[5]],
			"checkbox.background": grayVariant[scale[1]],
			"checkbox.foreground": grayVariant[scale[7]],
			"checkbox.border": grayVariant[scale[7]],
			"checkbox.selectBackground": grayVariant[scale[7]],
			"checkbox.selectBorder": grayVariant[scale[1]],
			"dropdown.background": grayVariant[scale[2]],
			"dropdown.listBackground": grayVariant[scale[2]],
			"dropdown.border": grayVariant[scale[2]],
			"dropdown.foreground": grayVariant[scale[10]],
			"input.background": grayVariant[scale[0]],
			"input.border": grayVariant[scale[1]],
			"input.foreground": grayVariant[scale[8]],
			"input.placeholderForeground": grayVariant[scale[5]],
			"inputValidation.errorBackground": colors.Red[scale[1]],
			"inputValidation.errorForeground": colors.Red[scale[6]],
			"inputValidation.errorBorder": colors.Red[scale[2]],
			"inputValidation.infoBackground": colors.Blue[scale[1]],
			"inputValidation.infoForeground": colors.Blue[scale[6]],
			"inputValidation.infoBorder": colors.Blue[scale[2]],
			"inputValidation.warningBackground": colors.Orange[scale[1]],
			"inputValidation.warningForeground": colors.Orange[scale[6]],
			"inputValidation.warningBorder": colors.Orange[scale[2]],
			"scrollbar.shadow": transparent,
			"scrollbarSlider.activeBackground": grayVariant[scale[3]],
			"scrollbarSlider.background": grayVariant[scale[2]],
			"scrollbarSlider.hoverBackground": grayVariant[scale[3]],
			"badge.foreground": grayVariant[scale[0]],
			"badge.background": grayVariant[scale[8]],
			"progressBar.background": grayVariant[scale[8]],
			"list.activeSelectionBackground": grayVariant[scale[3]],
			"list.inactiveSelectionBackground": grayVariant[scale[3]],
			"list.activeSelectionForeground": grayVariant[scale[9]],
			"list.activeSelectionIconForeground": grayVariant[scale[9]],
			"list.dropBackground": grayVariant[scale[4]],
			"list.focusBackground": grayVariant[scale[3]],
			"list.focusForeground": grayVariant[scale[9]],
			"list.focusHighlightForeground": grayVariant[scale[9]],
			"list.focusOutline": transparent,
			"list.focusAndSelectionOutline": transparent,
			"list.highlightForeground": colors.Indigo[scale[7]],
			"list.hoverBackground": grayVariant[scale[3]],
			"list.hoverForeground": grayVariant[scale[8]],
			"list.invalidItemForeground": colors.Red[scale[6]],
			"list.errorForeground": colors.Red[scale[6]],
			"list.warningForeground": colors.Orange[scale[6]],
			"activityBar.background": grayVariant[scale[1]],
			"activityBar.dropBorder": grayVariant[scale[3]],
			"activityBar.foreground": grayVariant[scale[8]],
			"activityBar.inactiveForeground": grayVariant[scale[4]],
			"activityBar.border": grayVariant[scale[1]],
			"activityBarBadge.background": colors.Indigo[scale[5]],
			"activityBarBadge.foreground": grayVariant[scale[0]],
			"activityBar.activeBorder": grayVariant[scale[8]],
			"activityBar.activeBackground": grayVariant[scale[1]],
			"activityBar.activeFocusBorder": grayVariant[scale[8]],
			"sideBar.background": grayVariant[scale[1]],
			"sideBar.foreground": grayVariant[scale[6]],
			"sideBar.border": transparent,
			"sideBar.dropBackground": grayVariant[scale[6]],
			"sideBarTitle.foreground": grayVariant[scale[8]],
			"sideBarSectionHeader.background": grayVariant[scale[2]],
			"sideBarSectionHeader.foreground": grayVariant[scale[8]],
			"sideBarSectionHeader.border": transparent,
			"editorGroup.border": transparent,
			"editorGroup.dropBackground": grayVariant[scale[2]],
			"editorGroupHeader.noTabsBackground": grayVariant[scale[3]],
			"editorGroupHeader.tabsBackground": grayVariant[scale[1]],
			"editorGroupHeader.tabsBorder": transparent,
			"editorGroupHeader.border": transparent,
			"editorGroup.emptyBackground": grayVariant[scale[2]],
			"editorGroup.focusedEmptyBorder": grayVariant[scale[2]],
			"editorGroup.dropIntoPromptForeground": grayVariant[scale[7]],
			"editorGroup.dropIntoPromptBackground": grayVariant[scale[1]],
			"editorGroup.dropIntoPromptBorder": transparent,
			"tab.unfocusedActiveBackground": grayVariant[scale[0]],
			"tab.activeForeground": grayVariant[scale[9]],
			"tab.border": transparent,
			"tab.activeBorder": transparent,
			"tab.unfocusedActiveBorder": transparent,
			"tab.activeBorderTop": transparent,
			"tab.unfocusedActiveBorderTop": transparent,
			"tab.lastPinnedBorder": transparent,
			"tab.inactiveBackground": grayVariant[scale[2]],
			"tab.unfocusedInactiveBackground": grayVariant[scale[2]],
			"tab.inactiveForeground": grayVariant[scale[6]],
			"tab.unfocusedActiveForeground": grayVariant[scale[9]],
			"tab.unfocusedInactiveForeground": grayVariant[scale[6]],
			"tab.hoverBackground": grayVariant[scale[0]],
			"tab.unfocusedHoverBackground": grayVariant[scale[0]],
			"tab.hoverForeground": grayVariant[scale[9]],
			"tab.unfocusedHoverForeground": grayVariant[scale[9]],
			"tab.hoverBorder": transparent,
			"tab.unfocusedHoverBorder": transparent,
			"tab.activeModifiedBorder": colors.Indigo[scale[5]],
			"tab.inactiveModifiedBorder": colors.Indigo[scale[5]],
			"tab.unfocusedActiveModifiedBorder": colors.Indigo[scale[5]],
			"tab.unfocusedInactiveModifiedBorder": colors.Indigo[scale[5]],
			"editorPane.background": grayVariant[scale[1]],
			"sideBySideEditor.horizontalBorder": grayVariant[scale[1]],
			"sideBySideEditor.verticalBorder": grayVariant[scale[1]],
			"editor.background": grayVariant[scale[0]],
			"editor.foreground": grayVariant[scale[8]],
			"editorLineNumber.foreground": grayVariant[scale[4]],
			"editorLineNumber.activeForeground": grayVariant[scale[6]],
			"editorLineNumber.dimmedForeground": grayVariant[scale[6]],
			"editorCursor.background": grayVariant[scale[0]],
			"editorCursor.foreground": colors.Indigo[scale[5]],
			"editor.selectionBackground": grayVariant[scale[3]],
			"editor.selectionForeground": grayVariant[scale[10]],
			"editor.inactiveSelectionBackground": grayVariant[scale[2]],
			"editor.selectionHighlightBackground": colors.Yellow[scale[0]],
			"editor.selectionHighlightBorder": transparent,
			"editor.wordHighlightBackground": colors.Yellow[scale[2]],
			"editor.wordHighlightBorder": transparent,
			"editor.wordHighlightStrongBackground": colors.Yellow[scale[2]],
			"editor.wordHighlightStrongBorder": transparent,
			"editor.findMatchBackground": colors.Yellow[scale[2]],
			"editor.findMatchHighlightBackground": colors.Yellow[scale[1]],
			"editor.findRangeHighlightBackground": colors.Yellow[scale[2]],
			"editor.findMatchBorder": transparent,
			"editor.findMatchHighlightBorder": transparent,
			"editor.findRangeHighlightBorder": transparent,
			"editor.hoverHighlightBackground": colors.Yellow[scale[1]],
			"editorLink.activeForeground": colors.Blue[scale[5]],
			"editorWhitespace.foreground": grayVariant[scale[2]],
			"editorIndentGuide.background": grayVariant[scale[3]],
			"editorIndentGuide.activeBackground": grayVariant[scale[5]],
			"editorRuler.foreground": grayVariant[scale[2]],
			"editorBracketMatch.background": grayVariant[scale[3]],
			"editorBracketMatch.border": transparent,
			"editorBracketHighlight.foreground1": colors.Indigo[scale[3]],
			"editorBracketHighlight.foreground2": colors.Violet[scale[3]],
			"editorBracketHighlight.foreground3": colors.Purple[scale[3]],
			"editorBracketHighlight.foreground4": colors.Fuchsia[scale[3]],
			"editorBracketHighlight.foreground5": colors.Pink[scale[3]],
			"editorBracketHighlight.foreground6": colors.Rose[scale[3]],
			"editorBracketHighlight.unexpectedBracket.foreground": colors.Yellow[scale[5]],
			"editorBracketPairGuide.activeBackground1": colors.Indigo[scale[3]],
			"editorBracketPairGuide.activeBackground2": colors.Violet[scale[3]],
			"editorBracketPairGuide.activeBackground3": colors.Purple[scale[3]],
			"editorBracketPairGuide.activeBackground4": colors.Fuchsia[scale[3]],
			"editorBracketPairGuide.activeBackground5": colors.Pink[scale[3]],
			"editorBracketPairGuide.activeBackground6": colors.Rose[scale[3]],
			"editorBracketPairGuide.background1": colors.Indigo[scale[2]],
			"editorBracketPairGuide.background2": colors.Violet[scale[2]],
			"editorBracketPairGuide.background3": colors.Purple[scale[2]],
			"editorBracketPairGuide.background4": colors.Fuchsia[scale[2]],
			"editorBracketPairGuide.background5": colors.Pink[scale[2]],
			"editorBracketPairGuide.background6": colors.Rose[scale[2]],
			"editor.foldBackground": grayVariant[scale[2]],
			"editorOverviewRuler.border": transparent,
			"editorOverviewRuler.modifiedForeground": colors.Amber[scale[5]],
			"editorOverviewRuler.addedForeground": colors.Emerald[scale[5]],
			"editorOverviewRuler.deletedForeground": colors.Rose[scale[5]],
			"editorOverviewRuler.errorForeground": colors.Red[scale[5]],
			"editorOverviewRuler.warningForeground": colors.Orange[scale[5]],
			"editorOverviewRuler.infoForeground": colors.Blue[scale[5]],
			"editorOverviewRuler.bracketMatchForeground": grayVariant[scale[7]],
			"editorError.foreground": colors.Red[scale[6]],
			"editorError.border": colors.Red[scale[2]],
			"editorError.background": colors.Red[scale[2]],
			"editorWarning.foreground": colors.Orange[scale[6]],
			"editorWarning.border": colors.Orange[scale[2]],
			"editorWarning.background": colors.Orange[scale[2]],
			"editorInfo.foreground": colors.Blue[scale[6]],
			"editorInfo.border": colors.Blue[scale[2]],
			"editorInfo.background": colors.Blue[scale[2]],
			"editorHint.foreground": colors.Cyan[scale[7]],
			"editorHint.border": colors.Cyan[scale[2]],
			"problemsErrorIcon.foreground": colors.Red[scale[6]],
			"problemsWarningIcon.foreground": colors.Orange[scale[6]],
			"problemsInfoIcon.foreground": colors.Blue[scale[6]],
			"editorUnnecessaryCode.border": colors.Red[scale[6]],
			"editorGutter.modifiedBackground": colors.Amber[scale[5]],
			"editorGutter.addedBackground": colors.Emerald[scale[5]],
			"editorGutter.deletedBackground": colors.Rose[scale[5]],
			"editorGutter.foldingControlForeground": grayVariant[scale[6]],
			"diffEditor.insertedTextBackground": colors.Emerald[scale[2]],
			"diffEditor.insertedTextBorder": transparent,
			"diffEditor.removedTextBackground": colors.Rose[scale[2]],
			"diffEditor.removedTextBorder": transparent,
			"diffEditor.border": grayVariant[scale[3]],
			"diffEditor.diagonalFill": colors.Yellow[scale[2]],
			"diffEditor.insertedLineBackground": colors.Emerald[scale[2]],
			"diffEditor.removedLineBackground": colors.Rose[scale[2]],
			"diffEditorGutter.insertedLineBackground": colors.Emerald[scale[2]],
			"diffEditorGutter.removedLineBackground": colors.Rose[scale[2]],
			"diffEditorOverview.insertedForeground": colors.Emerald[scale[5]],
			"diffEditorOverview.removedForeground": colors.Rose[scale[5]],
			"editorWidget.foreground": grayVariant[scale[8]],
			"editorWidget.background": grayVariant[scale[1]],
			"editorWidget.border": transparent,
			"editorWidget.resizeBorder": transparent,
			"editorSuggestWidget.background": grayVariant[scale[1]],
			"editorSuggestWidget.border": transparent,
			"editorSuggestWidget.foreground": grayVariant[scale[8]],
			"editorSuggestWidget.focusHighlightForeground": grayVariant[scale[8]],
			"editorSuggestWidget.highlightForeground": grayVariant[scale[10]],
			"editorSuggestWidget.selectedBackground": grayVariant[scale[2]],
			"editorSuggestWidget.selectedForeground": grayVariant[scale[10]],
			"editorSuggestWidgetStatus.foreground": grayVariant[scale[10]],
			"editorHoverWidget.background": grayVariant[scale[2]],
			"editorHoverWidget.border": transparent,
			"editorHoverWidget.highlightForeground": grayVariant[scale[3]],
			"editorHoverWidget.statusBarBackground": grayVariant[scale[3]],
			"editorGhostText.border": transparent,
			"editorGhostText.foreground": grayVariant[scale[5]],
			"editorStickyScrollHover.background": grayVariant[scale[1]],
			"panel.background": grayVariant[scale[1]],
			"panel.border": transparent,
			"panel.dropBorder": grayVariant[scale[2]],
			"panelTitle.activeBorder": grayVariant[scale[10]],
			"panelTitle.activeForeground": grayVariant[scale[10]],
			"panelTitle.inactiveForeground": grayVariant[scale[6]],
			"panelInput.border": transparent,
			"panelSection.border": transparent,
			"panelSection.dropBackground": grayVariant[scale[2]],
			"statusBar.background": grayVariant[scale[1]],
			"statusBar.foreground": grayVariant[scale[8]],
			"statusBar.border": transparent,
			"statusBar.debuggingBackground": grayVariant[scale[2]],
			"statusBar.debuggingForeground": grayVariant[scale[9]],
			"statusBar.debuggingBorder": transparent,
			"statusBar.noFolderForeground": grayVariant[scale[8]],
			"statusBar.noFolderBackground": grayVariant[scale[0]],
			"statusBar.noFolderBorder": transparent,
			"statusBarItem.activeBackground": grayVariant[scale[2]],
			"statusBarItem.hoverBackground": grayVariant[scale[2]],
			"statusBarItem.prominentForeground": grayVariant[scale[2]],
			"statusBarItem.prominentBackground": grayVariant[scale[9]],
			"statusBarItem.prominentHoverBackground": grayVariant[scale[3]],
			"statusBarItem.remoteBackground": colors.Indigo[scale[5]],
			"statusBarItem.remoteForeground": grayVariant[scale[10]],
			"statusBarItem.errorBackground": colors.Red[scale[5]],
			"statusBarItem.errorForeground": grayVariant[scale[10]],
			"statusBarItem.warningBackground": colors.Orange[scale[5]],
			"statusBarItem.warningForeground": grayVariant[scale[10]],
			"statusBarItem.focusBorder": transparent,
			"statusBar.focusBorder": transparent,
			"titleBar.activeBackground": grayVariant[scale[1]],
			"titleBar.activeForeground": grayVariant[scale[8]],
			"titleBar.inactiveBackground": grayVariant[scale[1]],
			"titleBar.inactiveForeground": grayVariant[scale[5]],
			"titleBar.border": transparent,
			"pickerGroup.border": transparent,
			"pickerGroup.foreground": grayVariant[scale[8]],
			"quickInput.background": grayVariant[scale[1]],
			"quickInput.foreground": grayVariant[scale[8]],
			"quickInputList.focusBackground": grayVariant[scale[3]],
			"quickInputList.focusForeground": grayVariant[scale[10]],
			"quickInputTitle.background": grayVariant[scale[1]],
			"terminal.background": grayVariant[scale[1]],
			"terminal.border": transparent,
			"terminal.foreground": grayVariant[scale[10]],
			"terminal.ansiBlack": grayVariant[scale[9]],
			"terminal.ansiBrightBlack": grayVariant[scale[7]],
			"terminal.ansiRed": colors.Red[scale[6]],
			"terminal.ansiBrightRed": colors.Red[scale[7]],
			"terminal.ansiGreen": colors.Green[scale[6]],
			"terminal.ansiBrightGreen": colors.Green[scale[7]],
			"terminal.ansiYellow": colors.Yellow[scale[6]],
			"terminal.ansiBrightYellow": colors.Yellow[scale[7]],
			"terminal.ansiBlue": colors.Blue[scale[6]],
			"terminal.ansiBrightBlue": colors.Blue[scale[7]],
			"terminal.ansiMagenta": colors.Fuchsia[scale[6]],
			"terminal.ansiBrightMagenta": colors.Fuchsia[scale[7]],
			"terminal.ansiCyan": colors.Cyan[scale[6]],
			"terminal.ansiBrightCyan": colors.Cyan[scale[7]],
			"terminal.ansiWhite": grayVariant[scale[6]],
			"terminal.ansiBrightWhite": grayVariant[scale[4]],
			"terminal.selectionBackground": grayVariant[scale[4]],
			"terminal.inactiveSelectionBackground": grayVariant[scale[3]],
			"terminalCursor.foreground": colors.Indigo[scale[5]],
			"terminal.dropBackground": grayVariant[scale[4]],
			"terminal.tab.activeBorder": colors.Indigo[scale[5]],
			"terminalCommandDecoration.defaultBackground": grayVariant[scale[5]],
			"terminalCommandDecoration.successBackground": colors.Green[scale[5]],
			"terminalCommandDecoration.errorBackground": colors.Red[scale[5]],
			"testing.iconFailed": colors.Red[scale[5]],
			"testing.iconErrored": colors.Orange[scale[5]],
			"testing.iconPassed": colors.Green[scale[5]],
			"testing.runAction": colors.Green[scale[5]],
			"testing.iconQueued": colors.Teal[scale[5]],
			"testing.iconUnset": grayVariant[scale[5]],
			"testing.iconSkipped": colors.Yellow[scale[5]],
			"testing.message.error.decorationForeground": colors.Red[scale[5]],
			"testing.message.error.lineBackground": colors.Red[scale[1]],
			"testing.message.info.decorationForeground": colors.Sky[scale[5]],
			"testing.message.info.lineBackground": colors.Sky[scale[1]],
			"gitDecoration.addedResourceForeground": colors.Emerald[scale[5]],
			"gitDecoration.modifiedResourceForeground": colors.Amber[scale[5]],
			"gitDecoration.deletedResourceForeground": colors.Rose[scale[5]],
			"gitDecoration.renamedResourceForeground": colors.Amber[scale[5]],
			"gitDecoration.stageModifiedResourceForeground": colors.Emerald[scale[6]],
			"gitDecoration.stageDeletedResourceForeground": colors.Rose[scale[6]],
			"gitDecoration.untrackedResourceForeground": colors.Amber[scale[4]],
			"gitDecoration.ignoredResourceForeground": grayVariant[scale[5]],
			"gitDecoration.conflictingResourceForeground": colors.Red[scale[4]],
			"gitDecoration.submoduleResourceForeground": colors.Pink[scale[5]],
			"charts.red": colors.Red[scale[5]],
			"charts.blue": colors.Blue[scale[5]],
			"charts.yellow": colors.Yellow[scale[5]],
			"charts.orange": colors.Orange[scale[5]],
			"charts.green": colors.Green[scale[5]],
			"charts.purple": colors.Purple[scale[5]],
		},
		"tokenColors": [
			{
				"scope": [
					"string",
					"constant.numeric",
					"constant.character",
					"constant.other",
					"punctuation.definition.string",
				],
				"settings": {
					"foreground": colors.Green[scale[7]]
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
					"foreground": colors.Blue[scale[7]]
				}
			},
			{
				"scope": [
					"meta",
					"support.type",
					"variable.other.readwrite.alias",
				],
				"settings": {
					"foreground": colors.Purple[scale[7]]
				}
			},
			{
				"scope": [
					"variable"
				],
				"settings": {
					"foreground": grayVariant[scale[9]]
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
					"foreground": grayVariant[scale[5]]
				}
			},
		]
	}
}
