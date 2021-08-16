module.exports = function toReadable (number) {
    const units = [
        '',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen'
    ];
    const dozens = [
        '',
        '',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety',
    ];
    const str = number.toString();
    if (number === 0) {return 'zero';} // 0
    if (number < 20) {return units[number];} // 1 - 19
    if (str.length === 2) {return (dozens[str[0]] + ' ' + units[str[1]]).trim();} // 20 - 99
    if (str.length == 3) {
        if (str[1] === '0' && str[2] === '0') //100, 200, 300 - 900
        {return units[str[0]] + ' hundred';}
        else
        {return units[str[0]] + ' hundred ' + toReadable(+(str[1] + str[2])).trim();} // 101 - 999
    }

}

