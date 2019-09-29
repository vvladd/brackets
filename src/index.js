module.exports = function check(str, bracketsConfig) {
    let openBrackets = [];
    let closeBrackets = [];
    let mapBrackets = {};
    let arr = str.split("");
    let stack = [];
    let last = "";

    for (let i = 0; i < bracketsConfig.length; i++) {
        openBrackets.push(bracketsConfig[i][0]);
        closeBrackets.push(bracketsConfig[i][1]);
        mapBrackets[openBrackets[i]] = closeBrackets[i];
    }

    for (let i = 0; i < arr.length; i++) {
        if (openBrackets.includes(arr[i]) && closeBrackets.includes(arr[i]))
            continue;
        if (openBrackets.includes(arr[i])) {
            stack.push(arr[i]);
        } else {
            last = stack.pop();
            if (arr[i] !== mapBrackets[last]) return false;
        }
    }
    if (stack.length !== 0) return false;
    return true;
};
