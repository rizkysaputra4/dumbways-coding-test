function wordSorting(str) {
  str = str.split(" ");
  let withIndex = {};
  let number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  str.map((el) => {
    let word = el.split("");
    let foundNumberBefore = false;
    let index = "";
    for (let i = 0; i < word.length; i++) {
      if (number.includes(word[i])) {
        foundNumberBefore = true;
        index += word[i];
      } else if (foundNumberBefore) {
        break;
      }
    }
    withIndex[`${index}`] = el;
  });

  return Object.values(withIndex).join(" ");
}

console.log(wordSorting("ta3hun menjela2ng se1lamat b4aru"));
