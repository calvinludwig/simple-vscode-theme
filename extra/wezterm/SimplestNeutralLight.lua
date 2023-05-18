local M = {}

local active_tab = {
	bg_color = '#fafafa',
	fg_color = '#0a0a0a',
}

local inactive_tab = {
	bg_color = '#e5e5e5',
	fg_color = '#525252',
}

function M.colors()
	return {
		foreground = '#0a0a0a',
		background = '#fafafa',
		cursor_bg = '#6366f1',
		cursor_border = '#6366f1',
		cursor_fg = '#0a0a0a',
		selection_bg = '#d4d4d4',
		selection_fg = '#262626',

		ansi = {
			'#171717',
			'#dc2626',
			'#16a34a',
			'#ca8a04',
			'#2563eb',
			'#c026d3',
			'#0891b2',
			'#525252',
		},

		brights = {
			'#404040',
			'#b91c1c',
			'#15803d',
			'#a16207',
			'#1d4ed8',
			'#a21caf',
			'#0e7490',
			'#a3a3a3',
		},

		tab_bar = {
			background = '#f5f5f5',
			active_tab = active_tab,
			inactive_tab = inactive_tab,
			inactive_tab_hover = active_tab,
			new_tab = inactive_tab,
			new_tab_hover = active_tab,
		},
	}
end

return M
