const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const bin = [];
    for(let letter = 0; letter < expr.length; letter += 10) {
        bin.push(expr.substr(letter, 10));
    }
    const morse = [];
    let str = '';
    bin.forEach((item) => {
        for (let i = 0; i < 10; i += 2) {
            let temp = item.substr(i, 2);
            if (temp === '10') {
                str += '.';
            } else if (temp === '11') {
                str += '-';
            } else if (temp === '**') {
                str += ' ';
                break;
            } else if (temp === '00') {
                continue;
            }
        }
        morse.push(str);
        str = '';
    });

    const letters = [];
    for (let item of morse) {
        if (item === ' ') {
            letters.push(item);
        } else {
            letters.push(MORSE_TABLE[item]);
        }
    }
    return letters.join('').split('*').join(' ');
}

module.exports = {
    decode
}
