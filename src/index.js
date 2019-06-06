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

        document.getElementById('pantalla1').style.display = 'none';
        document.getElementById('pantalla2').style.display ='block';
      }
      else  if(cont ==3)
        {
          alert("Ya utilizaste todos tus intentos, en este momento no podrás ingresar.");
        }else {

          //vacio el campo de contraseña
           document.getElementById('clave'). value = "";
           alert("Porfavor ingrese contraseña correcta, te quedan "+ (3-cont) +"  intentos.");
           cont= cont+1;
      }
 });

//obtengo el click de vovler
 const regresar= document.getElementById('volver');

 regresar.addEventListener('click',()=>{
   document.getElementById('pantalla3').style.display = 'none';
   document.getElementById('pantalla2').style.display = 'block';
 });

 //obtengo el click de salir
 const exit= document.getElementById('salir');
 exit.addEventListener('click',()=>{
   document.getElementById('pantalla3').style.display = 'none';
   document.getElementById('pantalla4').style.display = 'block';
 });
