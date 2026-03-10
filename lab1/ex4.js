function stringCount(value) {
    return value.length;
}
function stringCountTrim(value) {
    return value.trim().length;
}
function stringCountAndTrim(value, option) {
    var count = 0;
    if (option == true) {
        count = value.length;
    }
    else {
        count = value.trim().length;
    }
    return count;
}
console.log(stringCount("  test1  "));
console.log(stringCountTrim("  test2   "));
console.log(stringCountAndTrim("  test3  ", false));
console.log(stringCountAndTrim("  test3  ", true));
