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
    '*****':  ' '
};

SYMBOLS_TABLE = {
  '00': '',
  '10': '.',
  '11': '-',
  '**': '*'
}

function decode(expr) {
  
  let letters = expr.match(/.{10}/g);
  
  letters = letters.map((curLetter) => {
    let symbols = curLetter.match(/.{2}/g);
    symbols = symbols.map((curSymbol) => {
      return SYMBOLS_TABLE[curSymbol];
    })
    
    let code = symbols.join('');
    
    return MORSE_TABLE[code];
  });
  
  
  return letters.join('');
}

module.exports = {
    decode
}