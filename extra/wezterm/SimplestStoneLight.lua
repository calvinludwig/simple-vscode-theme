local M = {}

local active_tab = {
	bg_color = '#fafaf9',
	fg_color = '#0c0a09',
}

local inactive_tab = {
	bg_color = '#e7e5e4',
	fg_color = '#57534e',
}

function M.colors()
	return {
		foreground = '#0c0a09',
		background = '#fafaf9',
		cursor_bg = '#6366f1',
		cursor_border = '#6366f1',
		cursor_fg = '#0c0a09',
		selection_bg = '#d6d3d1',
		selection_fg = '#292524',

		ansi = {
			'#1c1917',
			'#dc2626',
			'#16a34a',
			'#ca8a04',
			'#2563eb',
			'#c026d3',
			'#0891b2',
			'#57534e',
		},

		brights = {
			'#44403c',
			'#b91c1c',
			'#15803d',
			'#a16207',
			'#1d4ed8',
			'#a21caf',
			'#0e7490',
			'#a8a29e',
		},

		tab_bar = {
			background = '#f5f5f4',
			active_tab = active_tab,
			inactive_tab = inactive_tab,
			inactive_tab_hover = active_tab,
			new_tab = inactive_tab,
			new_tab_hover = active_tab,
		},
	}
end

return M
