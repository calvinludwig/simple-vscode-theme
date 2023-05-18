local M = {}

local active_tab = {
	bg_color = '#020617',
	fg_color = '#f8fafc',
}

local inactive_tab = {
	bg_color = '#1e293b',
	fg_color = '#94a3b8',
}

function M.colors()
	return {
		foreground = '#f8fafc',
		background = '#020617',
		cursor_bg = '#6366f1',
		cursor_border = '#6366f1',
		cursor_fg = '#f8fafc',
		selection_bg = '#334155',
		selection_fg = '#e2e8f0',

		ansi = {
			'#f1f5f9',
			'#f87171',
			'#4ade80',
			'#facc15',
			'#60a5fa',
			'#e879f9',
			'#22d3ee',
			'#94a3b8',
		},

		brights = {
			'#cbd5e1',
			'#fca5a5',
			'#86efac',
			'#fde047',
			'#93c5fd',
			'#f0abfc',
			'#67e8f9',
			'#475569',
		},

		tab_bar = {
			background = '#0f172a',
			active_tab = active_tab,
			inactive_tab = inactive_tab,
			inactive_tab_hover = active_tab,
			new_tab = inactive_tab,
			new_tab_hover = active_tab,
		},
	}
end

return M
