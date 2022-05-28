var countMatches = function (items, ruleKey, ruleValue) {
    var map= {
        'type': 0,
        'color': 1,
        'name': 2
    };

    //# Solution 3

    return items.filter(item => item[map[ruleKey]] === ruleValue).length;


//# Solution 2

    // for (var i = 0; i < items.length; i++) {
    //     if(items[i][map[ruleKey]] === ruleValue){
    //         count++;
    //     }
    // }

//# Solution 1

    // for (var i = 0; i < items.length; i++) {
    //     if ((ruleKey === 'type' && items[i][0]===ruleValue) || (ruleKey === 'color' && items[i][1]===ruleValue) || (ruleKey === 'name' && items[i][2]===ruleValue)) {
    //         count++; 
    //     }
    // }
    return count;

};

console.log(countMatches([
    ["phone", "blue", "pixel"],
    ["computer", "silver", "lenovo"],
    ["phone", "gold", "iphone"]
], 'type', 'phone'));