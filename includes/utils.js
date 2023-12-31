function is_yellow(description) {
    return `CASE
    WHEN ${description} LIKE '%Yellow%' THEN 1
    WHEN ${description} LIKE '%yellow%' THEN 1
    END`;
}

function is_red(description) {
    return `CASE
    WHEN ${description} LIKE '%Red%' THEN 1
    WHEN ${description} LIKE '%red%' THEN 1
    END`;
}

function get_card(type_card, type_club) {
    return "(SELECT " +
        String(type_card) + "_cards " +
        "FROM football_dw_inf.load_cards lc WHERE (g.game_id = lc.game_id AND g." +
        String(type_club) +
        "_club_id = lc.club_id))"
}

function mapping_cards_to_game(type_card, type_club) {
    return "CASE WHEN " +
        String(get_card(type_card, type_club)) +
        " IS NULL THEN 0" +
        " ELSE " + String(get_card(type_card, type_club)) +
        " END"
}

module.exports = {
    is_yellow,
    is_red,
    mapping_cards_to_game
};
