function printFlag(strArr) {
  let pattern = ["=", "*"];
  let flagHeight = 7;
  let flagWidth = strArr.length;

  for (let i = 0; i < flagHeight; i++) {
    let line = "";
    for (let j = 0; j < flagWidth; j++) {
      if (i === Math.floor(flagHeight / 2)) {
        line += strArr[j];
      } else if (
        i === Math.floor(flagHeight / 2) - 1 ||
        i === Math.floor(flagHeight / 2) + 1
      ) {
        line += pattern[(j + 1) % 2];
      } else {
        line += pattern[j % 2];
      }
      line += " ";
    }
    console.log(line);
  }
}

printFlag(["D", "U", "M", "B", "W", "A", "Y", "S", "I", "D"]);
