function palindrome(str) {
  //Convertiser en minuscule et supimer la lettre non alpha
  const formatStd = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  const reverseStd = formatStd.split("").reverse().join("");

  if (formatStd === reverseStd) {
    return true;
  } else {
    return false;
  }
}
