local M = {}

local active_tab = {
	bg_color = '#030712',
	fg_color = '#f9fafb',
}

local inactive_tab = {
	bg_color = '#1f2937',
	fg_color = '#9ca3af',
}

function M.colors()
	return {
		foreground = '#f9fafb',
		background = '#030712',
		cursor_bg = '#6366f1',
		cursor_border = '#6366f1',
		cursor_fg = '#f9fafb',
		selection_bg = '#374151',
		selection_fg = '#e5e7eb',

		ansi = {
			'#f3f4f6',
			'#f87171',
			'#4ade80',
			'#facc15',
			'#60a5fa',
			'#e879f9',
			'#22d3ee',
			'#9ca3af',
		},

		brights = {
			'#d1d5db',
			'#fca5a5',
			'#86efac',
			'#fde047',
			'#93c5fd',
			'#f0abfc',
			'#67e8f9',
			'#4b5563',
		},

		tab_bar = {
			background = '#111827',
			active_tab = active_tab,
			inactive_tab = inactive_tab,
			inactive_tab_hover = active_tab,
			new_tab = inactive_tab,
			new_tab_hover = active_tab,
		},
	}
end

return M
