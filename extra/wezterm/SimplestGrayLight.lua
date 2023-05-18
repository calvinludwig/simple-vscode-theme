local M = {}

local active_tab = {
	bg_color = '#f9fafb',
	fg_color = '#030712',
}

local inactive_tab = {
	bg_color = '#e5e7eb',
	fg_color = '#4b5563',
}

function M.colors()
	return {
		foreground = '#030712',
		background = '#f9fafb',
		cursor_bg = '#6366f1',
		cursor_border = '#6366f1',
		cursor_fg = '#030712',
		selection_bg = '#d1d5db',
		selection_fg = '#1f2937',

		ansi = {
			'#111827',
			'#dc2626',
			'#16a34a',
			'#ca8a04',
			'#2563eb',
			'#c026d3',
			'#0891b2',
			'#4b5563',
		},

		brights = {
			'#374151',
			'#b91c1c',
			'#15803d',
			'#a16207',
			'#1d4ed8',
			'#a21caf',
			'#0e7490',
			'#9ca3af',
		},

		tab_bar = {
			background = '#f3f4f6',
			active_tab = active_tab,
			inactive_tab = inactive_tab,
			inactive_tab_hover = active_tab,
			new_tab = inactive_tab,
			new_tab_hover = active_tab,
		},
	}
end

return M
