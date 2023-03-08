function solution(N){
    if(N !== parseInt(N, 10)) return 'Input must be an integer';
  
    const binaryNumber = N.toString(2);
    
    //Creating an Array of length of each binary item
    const arr = binaryNumber.split('1').map((binaryGap, index, binaryArr) => {
         return binaryArr[index + 1] != undefined ? binaryGap.length : 0;
     });
      return Math.max.apply(Math, arr);
  }