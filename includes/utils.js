function format_description(description) {
    return `CASE
    WHEN ${description} LIKE '%Yellow%' THEN 'yellow' 
    WHEN ${description} LIKE '%Red%' THEN 'red'
    ELSE 'none'
    END`;
}

module.exports = {
    format_description
};
