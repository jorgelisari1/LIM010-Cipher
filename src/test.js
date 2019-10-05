let arr =['one ','two ','three'];
let test =[];
let cont = 0;
for(let i = arr.length-1; i>=0; i--){
  test[cont] = arr[i];
  cont ++;
}
console.log(test);