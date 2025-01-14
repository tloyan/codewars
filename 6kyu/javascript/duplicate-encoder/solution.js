function duplicateEncode(word) {
    return word.split('').map((letter) => {
      if (word.split('').filter((v) => v.toLowerCase() == letter.toLowerCase()).length > 1)
        return ')';
      return '(';
    }).join('');
}
