local M = {}

local active_tab = {
	bg_color = '#09090b',
	fg_color = '#fafafa',
}

local inactive_tab = {
	bg_color = '#27272a',
	fg_color = '#a1a1aa',
}

function M.colors()
	return {
		foreground = '#fafafa',
		background = '#09090b',
		cursor_bg = '#6366f1',
		cursor_border = '#6366f1',
		cursor_fg = '#fafafa',
		selection_bg = '#3f3f46',
		selection_fg = '#e4e4e7',

		ansi = {
			'#f4f4f5',
			'#f87171',
			'#4ade80',
			'#facc15',
			'#60a5fa',
			'#e879f9',
			'#22d3ee',
			'#a1a1aa',
		},

		brights = {
			'#d4d4d8',
			'#fca5a5',
			'#86efac',
			'#fde047',
			'#93c5fd',
			'#f0abfc',
			'#67e8f9',
			'#52525b',
		},

		tab_bar = {
			background = '#18181b',
			active_tab = active_tab,
			inactive_tab = inactive_tab,
			inactive_tab_hover = active_tab,
			new_tab = inactive_tab,
			new_tab_hover = active_tab,
		},
	}
end

return M
