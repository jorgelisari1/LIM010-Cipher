
window.cipher = {
  encode: (offset, string) => {

    let valorascii, result, newletter, stringResult = "", cont = 0;
      do {
        if (string.charCodeAt(cont) > 90 || string.charCodeAt(cont) < 65) {
          stringResult = stringResult + string.charAt(cont);
        } else {
          valorascii = string.charCodeAt(cont);
          result = (valorascii - 65 + (parseInt(offset, 10))) % 26 + 65;
          newletter = String.fromCharCode(result);
          stringResult = stringResult + newletter;
        }
        cont = cont + 1;
      } while (cont < string.length);
      return stringResult;

  },
  decode: (offset, string) => {
    let valorascii, result, newletter, stringResult = "", cont = 0;
      do {
        if (string.charCodeAt(cont) > 90 || string.charCodeAt(cont) < 65) {
          stringResult = stringResult + string.charAt(cont);
        } else {

          while (offset > 26) {
            offset = offset - 26;
          }
          valorascii = string.charCodeAt(cont);
          result = (valorascii - 65 - (parseInt(offset, 10)))
          if (result < 0) {
            result = result + 26;
          }
          result = result + 65;
          newletter = String.fromCharCode(result);
          //alert(newletter);
          stringResult = stringResult + newletter;
      }
        cont = cont + 1;
    } while (cont < string.length);
      return stringResult;

}};
