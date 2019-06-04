const string=document.getElementById('mensaje');
const offset=document.getElementById('offset');
const cifrar = document.getElementById('cifrar');
const descifrar =document.getElementById('descifrar');

cifrar.addEventListener('click',()=>{
  const cadena = string.value;
  const n = offset.value;
  cipher.encode(n,cadena);
});

descifrar.addEventListener('click',()=>{
  alert('LOCAAAAA');
});



window.cipher = {
  encode: (offset, string) => {
    const text = string.value;

    let valorascii,result,newletter,stringResult ="", cont =0;
      if(offset > 0 && string.length>=0)
      {
        do{
          valorascii = string.charCodeAt(cont);
          result = (valorascii-65+offset)%26+65;
          newletter.concat(String.fromCharCode(result));
          stringResult.concat(newletter);

          cont = cont +1;

        }while (cont <string.length);
          alert('mensaje cifrado=' + newletter );

      }
  },
  decode: (offset, string) => {
    /* Acá va tu código que descifra*/
  }
};
