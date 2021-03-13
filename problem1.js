function removeDuplicate(str) {
  let res = {};
  str = str.split("");

  str.map((el) => {
    res[`${el}`] = el;
  });

  return Object.values(res).join("");
}

console.log(removeDuplicate("alagcgcdodol"));
