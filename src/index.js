const LETTERS_TABLE = {
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
    '*****':  ' '
};

SYMBOLS_TABLE = {
  '00': '',
  '10': '.',
  '11': '-',
  '**': '*'
}

function decode(expr) {
  
  return expr
    .match(/.{10}/g) // letters bin codes array
    .map((binCode) => {
    
      code = binCode
        .match(/.{2}/g) // symbols bin codes array
        .map((binSymbol) => {
          return SYMBOLS_TABLE[binSymbol];
        }) // symbols array
        .join('');
    
      return LETTERS_TABLE[code];
    }) // letters array
    .join('');
}

module.exports = {
    decode
}