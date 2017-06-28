function countLetters(string) {

  var noCaps = string.toLowerCase().split('');
  var Letters = {};

  for (i in noCaps) {
    if (noCaps[i] != ' '){
        if(Letters[noCaps[i]]){

            Letters[noCaps[i]].push(i);
        } else {
            Letters[noCaps[i]] = [i];
        }
    }
  };
  return Letters;
};

console.log(countLetters("lighthouse in the house"));