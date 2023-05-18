local M = {}

local active_tab = {
	bg_color = '#0a0a0a',
	fg_color = '#fafafa',
}

local inactive_tab = {
	bg_color = '#262626',
	fg_color = '#a3a3a3',
}

function M.colors()
	return {
		foreground = '#fafafa',
		background = '#0a0a0a',
		cursor_bg = '#6366f1',
		cursor_border = '#6366f1',
		cursor_fg = '#fafafa',
		selection_bg = '#404040',
		selection_fg = '#e5e5e5',

		ansi = {
			'#f5f5f5',
			'#f87171',
			'#4ade80',
			'#facc15',
			'#60a5fa',
			'#e879f9',
			'#22d3ee',
			'#a3a3a3',
		},

		brights = {
			'#d4d4d4',
			'#fca5a5',
			'#86efac',
			'#fde047',
			'#93c5fd',
			'#f0abfc',
			'#67e8f9',
			'#525252',
		},

		tab_bar = {
			background = '#171717',
			active_tab = active_tab,
			inactive_tab = inactive_tab,
			inactive_tab_hover = active_tab,
			new_tab = inactive_tab,
			new_tab_hover = active_tab,
		},
	}
end

return M
