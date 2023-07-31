module.exports = function toReadable (number) {
    const dic = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
      };
      
      let numberStr = String(number);
      let result = '';
      
      switch (numberStr.length) {
        case 1:
          result = dic[+(numberStr[0])];
          break;
        case 2:
          result = ((number % 10 === 0) && (number > 19)) || (number > 9 && number < 20) ? dic[+(numberStr)] : dic[+(numberStr[0] + '0')]+ ' ' + dic[+(numberStr[1])];
          console.log(result);
          break;
        case 3:
          result = dic[+(numberStr[0])] + ' hundred';
          numberStr = +numberStr.slice(1);
          if (numberStr !== 0) {
            result += ' ';
            result += ((numberStr % 10 === 0) && (numberStr > 19)) || (numberStr > 9 && numberStr < 20) ? dic[(numberStr)] : (numberStr < 10) ? dic[numberStr] : dic[+((String(numberStr)[0]) + '0')]+ ' ' + dic[+(String(numberStr)[1])];
          }
          break;
        default:
          result = 'no number';
      }
      
      
      return result;
}
