module.exports = function getZerosCount(number, base) {
  let q = 1;
  let c = 0;
  let y = 0;
  let x = 0;
  let a = 1;
  let count = 0;
  let arr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251];
  let arr2 = [];
  let b = 0;
 
  for (let i = 2; i < base; i++) {
     if (base % i !== 0) {
      x = Math.floor(number/Math.pow(base, a++));
      y+=x;
      if (x<base) break; 
      
    }
    else{
    
    for(let i = 0; i < arr.length; i++){
      while (base%arr[i] == 0){
      base = base/arr[i];
      arr2.push(arr[i]);
      }
      function compareNumeric(b, c) {
        if (b > c) return -1;
        if (b < c) return 1;
      }
      arr2.sort(compareNumeric);
      }
      for (let j=0; j=arr2[0];j++){
        if (number>arr2[0]){
       x = Math.floor((number/Math.pow((arr2[0]),a++)));
       y+=x;
       if (x<arr2[0]) break;
        }
      } 
      }
      
    
  }
  return y;
}
    
  
    