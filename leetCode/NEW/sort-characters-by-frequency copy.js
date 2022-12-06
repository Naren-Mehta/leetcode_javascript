var frequencySort = function(s) {
    
    const frequency = s.split('').reduce((obj, freq) => {
        obj[freq] = obj[freq] + 1 || 1;
        return obj;
    }, {});

    return Object.entries(frequency).sort(([a, i], [b, j]) => j - i).reduce((ans, [char, freq]) => ans+= char.repeat(freq), '');
};

console.log(frequencySort("tree"));