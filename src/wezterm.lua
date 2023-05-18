local M = {}

local active_tab = {
    bg_color = palette.overlay,
    fg_color = palette.text,
}

local inactive_tab = {
    bg_color = palette.base,
    fg_color = palette.muted,
}

function M.colors()
    return {
        foreground = palette.text,
        background = palette.base,
        cursor_bg = palette.highlight_high,
        cursor_border = palette.highlight_high,
        cursor_fg = palette.text,
        selection_bg = '#2a283e',
        selection_fg = palette.text,

        ansi = {
            palette.overlay,
            palette.love,
            palette.pine,
            palette.gold,
            palette.foam,
            palette.iris,
            palette.rose,
            palette.text,
        },

        brights = {
            palette.muted,
            palette.love,
            palette.pine,
            palette.gold,
            palette.foam,
            palette.iris,
            palette.rose,
            palette.text,
        },

        tab_bar = {
            background = palette.base,
            active_tab = active_tab,
            inactive_tab = inactive_tab,
            inactive_tab_hover = active_tab,
            new_tab = inactive_tab,
            new_tab_hover = active_tab,
        },
    }
end

return M
