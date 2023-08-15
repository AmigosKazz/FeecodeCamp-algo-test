function rot13(str) {
  let decodeText = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char.match(/[A-Z]/)) {
      const code = str.charCodeAt(i);
      const decode = ((code - 65 + 13) % 26) + 65;
      char = String.fromCharCode(decode);
    }
    decodeText += char;
  }

  return decodeText;
}
