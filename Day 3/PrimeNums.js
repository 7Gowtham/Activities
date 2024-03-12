// Anonymous Function:

let prime = function(arr){
	let primeArr = [];
  for(let i = 0; i < arr.length; i++){
  	let c = 0;
  	if(arr[i] <= 1){
    	return false;
    }
    for(let j = 2; j <= arr[i]; j++){
    	if(arr[i] % j == 0){
      	c++;
      }
    }
    if(c == 1){
    	primeArr.push(arr[i]);
    }
  }
  return primeArr;
}

let res = prime([2,4,5,15,9,11]);

console.log(res);


// IIFE Function:

let primeArr = [];

let prime = (function(arr){
	for(let i = 0; i < arr.length; i++){
  	c = 0;
  	if(arr[i] <= 1){
    	return false;
    }
    for(let j = 2; j <= arr[i]; j++){
    	if(arr[i] % j == 0){
      	c++;
      }
    }
    if(c == 1){
    	primeArr.push(arr[i]);
    }
  }
  return primeArr;
  
})([2,6,3,15,9,11]);

let res = prime;
console.log(res);


// Arrow Function:

let prime = (arr) => {
	let primeArr = [];
	for(let i = 0; i < arr.length; i++){
  	let c = 0;
  	if(arr[i] <= 1){
    	return false;
    }
    for(j = 2; j <= arr[i]; j++){
    	if(arr[i] % j == 0){
      	c++;
      }
    }
    if(c == 1){
    	primeArr.push(arr[i]);
    }
  }
  return primeArr;
};

let res = prime([2,5,4,9,11,15,17]);
console.log(res);