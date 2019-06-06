const string=document.getElementById('mensaje');
const num=document.getElementById('offset');

const cifrar = document.getElementById('cifrar');
const descifrar =document.getElementById('descifrar');

cifrar.addEventListener('click',()=>{
  const cadena = string.value;
  const n = offset.value;
  cipher.encode(n,cadena);
  document.getElementById('pantalla2').style.display = 'none';
  document.getElementById('pantalla3').style.display = 'block';
});

descifrar.addEventListener('click',()=>{
  const cadena = string.value;
  const n = offset.value;
  cipher.decode(n,cadena);
  document.getElementById('pantalla2').style.display = 'none';
  document.getElementById('pantalla3').style.display = 'block';
});



window.cipher = {
  encode: (offset, string) => {

    let valorascii,result,newletter,stringResult ="", cont =0;
      if(offset> 0 && string.length>=0)
      {
        do{
          valorascii = string.charCodeAt(cont);
          result = (valorascii-65+(parseInt(offset,10)))%26+65;
          newletter = String.fromCharCode(result);
          //alert(newletter);
          stringResult = stringResult + newletter;
          cont = cont +1;

        }while (cont <string.length);
          escribirmensaje.innerHTML = stringResult;

      }else{
          alert("te faltan campos por rellenar");
      }
  },
  decode: (offset, string) => {
    let valorascii,result,newletter,stringResult ="", cont =0;
      if(offset> 0 && string.length>=0)
      {
        do{
          valorascii = string.charCodeAt(cont);

          result = (valorascii-65-(parseInt(offset,10)))%26+65;
          newletter = String.fromCharCode(result);
          stringResult = stringResult + newletter;
          cont = cont +1;

        }while (cont <string.length);
          escribirmensaje.innerHTML = stringResult;

      }else{
          alert("te faltan campos por rellenar");
      }
  }
};
