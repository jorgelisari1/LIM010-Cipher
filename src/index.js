//Aqui se encuentra el codigo de cipher
const string=document.getElementById('mensaje');
const num=document.getElementById('offset');

const cifrar = document.getElementById('cifrar');
const descifrar =document.getElementById('descifrar');
const escribirmensaje = document.getElementById('escribirmensaje');
cifrar.addEventListener('click',()=>{
  const cadena = string.value;
  const n = num.value;
  if(cadena != '' || n != ''){
     escribirmensaje.innerHTML = cipher.encode(n,cadena);
    document.getElementById('pantalla2').classList.add('mostrarocultar');
    document.getElementById('pantalla3').classList.remove('mostrarocultar');

  }else{
    alert ('faltan campos por llenar');
  }

});

descifrar.addEventListener('click',()=>{
  const cadena = string.value;
  const n = num.value;
  if (cadena !='' || n !='') {
     escribirmensaje.innerHTML = cipher.decode(n,cadena);
    document.getElementById('pantalla2').classList.add('mostrarocultar');
    document.getElementById('pantalla3').classList.remove('mostrarocultar');
  }else{
    alert ('faltan campos por llenar');
  }

});

//guardo la contraseña ingresada por el usiario.
const claveIngresada=document.getElementById('clave');
//obtengo el click
const ingresar= document.getElementById('capturarClave');
//contador de las veces que ingresa la contraseña incorrecta
let cont=1;
//funcion de login
ingresar.addEventListener('click',() =>
{

  if(claveIngresada.value=='LABORATORIA'){

        document.getElementById('pantalla1').classList.add('mostrarocultar');
        document.getElementById('pantalla2').classList.remove('mostrarocultar');
      }
      else  if(cont ==3)
        {
          alert("Ya utilizaste todos tus intentos, en este momento no podrás ingresar.");
          document.getElementById('pantalla1').classList.add('mostrarocultar');
          document.getElementById('pantalla4').classList.remove('mostrarocultar');
        }else {

          //vacio el campo de contraseña
           document.getElementById('clave'). value = "";
           alert("Porfavor ingrese contraseña correcta, te quedan "+ (3-cont) +"  intentos.");
           cont= cont+1;
      }
 });


//obtengo el click de volver
 const regresar= document.getElementById('volver');

 regresar.addEventListener('click',()=>{
   document.getElementById('pantalla3').classList.add('mostrarocultar');
   document.getElementById('pantalla2').classList.remove('mostrarocultar');

 });

 //obtengo el click de salir
 const exit= document.getElementById('salir');
 exit.addEventListener('click',()=>{
   document.getElementById('pantalla3').classList.add('mostrarocultar');
   document.getElementById('pantalla4').classList.remove('mostrarocultar');
 });
