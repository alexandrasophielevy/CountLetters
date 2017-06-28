function countLetters(string) {
  var noSpaces = string.split(" ").join("").toLowerCase();
  var Letters = {};

  for (i in noSpaces) {
    Letters[noSpaces[i]] = 0
  };
  for (i in noSpaces) {
    Letters[noSpaces[i]] += 1
  };
  return Letters;
};

console.log(countLetters("lighthouse in the house"));