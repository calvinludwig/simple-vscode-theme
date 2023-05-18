local M = {}

local active_tab = {
	bg_color = '#f8fafc',
	fg_color = '#020617',
}

local inactive_tab = {
	bg_color = '#e2e8f0',
	fg_color = '#475569',
}

function M.colors()
	return {
		foreground = '#020617',
		background = '#f8fafc',
		cursor_bg = '#6366f1',
		cursor_border = '#6366f1',
		cursor_fg = '#020617',
		selection_bg = '#cbd5e1',
		selection_fg = '#1e293b',

		ansi = {
			'#0f172a',
			'#dc2626',
			'#16a34a',
			'#ca8a04',
			'#2563eb',
			'#c026d3',
			'#0891b2',
			'#475569',
		},

		brights = {
			'#334155',
			'#b91c1c',
			'#15803d',
			'#a16207',
			'#1d4ed8',
			'#a21caf',
			'#0e7490',
			'#94a3b8',
		},

		tab_bar = {
			background = '#f1f5f9',
			active_tab = active_tab,
			inactive_tab = inactive_tab,
			inactive_tab_hover = active_tab,
			new_tab = inactive_tab,
			new_tab_hover = active_tab,
		},
	}
end

return M
