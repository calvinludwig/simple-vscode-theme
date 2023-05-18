local M = {}

local active_tab = {
	bg_color = '#0c0a09',
	fg_color = '#fafaf9',
}

local inactive_tab = {
	bg_color = '#292524',
	fg_color = '#a8a29e',
}

function M.colors()
	return {
		foreground = '#fafaf9',
		background = '#0c0a09',
		cursor_bg = '#6366f1',
		cursor_border = '#6366f1',
		cursor_fg = '#fafaf9',
		selection_bg = '#44403c',
		selection_fg = '#e7e5e4',

		ansi = {
			'#f5f5f4',
			'#f87171',
			'#4ade80',
			'#facc15',
			'#60a5fa',
			'#e879f9',
			'#22d3ee',
			'#a8a29e',
		},

		brights = {
			'#d6d3d1',
			'#fca5a5',
			'#86efac',
			'#fde047',
			'#93c5fd',
			'#f0abfc',
			'#67e8f9',
			'#57534e',
		},

		tab_bar = {
			background = '#1c1917',
			active_tab = active_tab,
			inactive_tab = inactive_tab,
			inactive_tab_hover = active_tab,
			new_tab = inactive_tab,
			new_tab_hover = active_tab,
		},
	}
end

return M
