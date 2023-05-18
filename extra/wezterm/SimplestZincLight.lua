local M = {}

local active_tab = {
	bg_color = '#fafafa',
	fg_color = '#09090b',
}

local inactive_tab = {
	bg_color = '#e4e4e7',
	fg_color = '#52525b',
}

function M.colors()
	return {
		foreground = '#09090b',
		background = '#fafafa',
		cursor_bg = '#6366f1',
		cursor_border = '#6366f1',
		cursor_fg = '#09090b',
		selection_bg = '#d4d4d8',
		selection_fg = '#27272a',

		ansi = {
			'#18181b',
			'#dc2626',
			'#16a34a',
			'#ca8a04',
			'#2563eb',
			'#c026d3',
			'#0891b2',
			'#52525b',
		},

		brights = {
			'#3f3f46',
			'#b91c1c',
			'#15803d',
			'#a16207',
			'#1d4ed8',
			'#a21caf',
			'#0e7490',
			'#a1a1aa',
		},

		tab_bar = {
			background = '#f4f4f5',
			active_tab = active_tab,
			inactive_tab = inactive_tab,
			inactive_tab_hover = active_tab,
			new_tab = inactive_tab,
			new_tab_hover = active_tab,
		},
	}
end

return M
