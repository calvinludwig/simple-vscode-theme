
import colors from "./colors.js";

export function generateWeztermTheme(grayVariant, darkMode) {
	const scale = darkMode
		? [950, 900, 800, 700, 600, 500, 400, 300, 200, 100, 50]
		: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

	const content =
`local M = {}

local active_tab = {
	bg_color = '${grayVariant[scale[0]]}',
	fg_color = '${grayVariant[scale[10]]}',
}

local inactive_tab = {
	bg_color = '${grayVariant[scale[2]]}',
	fg_color = '${grayVariant[scale[6]]}',
}

function M.colors()
	return {
		foreground = '${grayVariant[scale[10]]}',
		background = '${grayVariant[scale[0]]}',
		cursor_bg = '${colors.Indigo[scale[5]]}',
		cursor_border = '${colors.Indigo[scale[5]]}',
		cursor_fg = '${grayVariant[scale[10]]}',
		selection_bg = '${grayVariant[scale[3]]}',
		selection_fg = '${grayVariant[scale[8]]}',

		ansi = {
			'${grayVariant[scale[9]]}',
			'${colors.Red[scale[6]]}',
			'${colors.Green[scale[6]]}',
			'${colors.Yellow[scale[6]]}',
			'${colors.Blue[scale[6]]}',
			'${colors.Fuchsia[scale[6]]}',
			'${colors.Cyan[scale[6]]}',
			'${grayVariant[scale[6]]}',
		},

		brights = {
			'${grayVariant[scale[7]]}',
			'${colors.Red[scale[7]]}',
			'${colors.Green[scale[7]]}',
			'${colors.Yellow[scale[7]]}',
			'${colors.Blue[scale[7]]}',
			'${colors.Fuchsia[scale[7]]}',
			'${colors.Cyan[scale[7]]}',
			'${grayVariant[scale[4]]}',
		},

		tab_bar = {
			background = '${grayVariant[scale[1]]}',
			active_tab = active_tab,
			inactive_tab = inactive_tab,
			inactive_tab_hover = active_tab,
			new_tab = inactive_tab,
			new_tab_hover = active_tab,
		},
	}
end

return M
`
	return content
}
