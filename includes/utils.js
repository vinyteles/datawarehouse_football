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

module.exports = {
    is_yellow,
    is_red
};
