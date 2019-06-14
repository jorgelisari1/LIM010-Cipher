//¡------------------------------Aqui se encuentra el codigo de cipher------------------------------!

const string=document.getElementById('mensaje');
const num=document.getElementById('offset');

const cifrar = document.getElementById('cifrar');
const descifrar =document.getElementById('descifrar');
const escribirMensaje = document.getElementById('escribirMensaje');

cifrar.addEventListener('click',()=>{
  let cadena = string.value;
  let n = num.value;
  cadena = cadena.toUpperCase();

  if(cadena != '' && n != ''){
    if(n<0){
      n = n*(-1);
      escribirMensaje.innerHTML = cipher.decode(n,cadena);
    }
     escribirMensaje.innerHTML = cipher.encode(n,cadena);
    document.getElementById('pantalla2').classList.add('mostrarOcultar');
    document.getElementById('pantalla3').classList.remove('mostrarOcultar');

  }else{
    alert ('Faltan campos por llenar');
  }

});

descifrar.addEventListener('click',()=>{
  let cadena = string.value;
  let n = num.value
   cadena = cadena.toUpperCase();
  if (cadena !='' && n !='') {
    if(n<0){
      n = n*(-1);
      escribirMensaje.innerHTML = cipher.encode(n,cadena);
    }
     escribirMensaje.innerHTML = cipher.decode(n,cadena);
    document.getElementById('pantalla2').classList.add('mostrarOcultar');
    document.getElementById('pantalla3').classList.remove('mostrarOcultar');
  }else{
    alert ('Faltan campos por llenar');
  }

});

// ¡---------------------------Aqui termina el codigo cipher-------------------------------------!
// ¡--------------------------Aqui empieza el codigo de mi 1ra pantalla--------------------------!
//guardo la contraseña ingresada por el usuario.
const claveIngresada=document.getElementById('clave');
//obtengo el click
const ingresar= document.getElementById('capturarClave');
//contador de las veces que ingresa la contraseña incorrecta
let cont=1;

//funcion de login
ingresar.addEventListener('click',() =>
{

  if(claveIngresada.value=='LABORATORIA'){

        document.getElementById('pantalla1').classList.add('mostrarOcultar');
        document.getElementById('pantalla2').classList.remove('mostrarOcultar');
      }
      else  if(cont ==3)
        {
          alert("Ya utilizaste todos tus intentos, en este momento no podrás ingresar.");
          document.getElementById('pantalla1').classList.add('mostrarOcultar');
          document.getElementById('pantalla4').classList.remove('mostrarOcultar');
        }else {

          //vacio el campo de contraseña
           document.getElementById('clave'). value = "";
           alert("Por favor ingrese contraseña correcta, te quedan "+ (3-cont) +"  intentos.");
           cont= cont+1;
      }
 });

 var input = document.getElementById('clave');


input.addEventListener("keyup", (event)=> {

  if (event.keyCode === 13) {

    event.preventDefault();

    document.getElementById('capturarClave').click();
  }
});
// ¡--------------------Aqui termina el codigo de mi primera pantalla-------------------------!

//obtengo el click de volver
 const regresar= document.getElementById('volver');

 regresar.addEventListener('click',()=>{
   document.getElementById('pantalla3').classList.add('mostrarOcultar');
   document.getElementById('pantalla2').classList.remove('mostrarOcultar');

 });

 //obtengo el click de salir
 const exit= document.getElementById('salir');
 exit.addEventListener('click',()=>{
   document.getElementById('pantalla3').classList.add('mostrarOcultar');
   document.getElementById('pantalla4').classList.remove('mostrarOcultar');
 });
