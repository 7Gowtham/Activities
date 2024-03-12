// Anonymous Function:

let resArr = [];
let dupArr = function(arr){
	for(let i = 0; i < arr.length; i++){
  	let c = 0;
  	for(let j = i+1; j < arr.length; j++){
    	if(arr[i] == arr[j]){
      	c++;
      }
    }
    if(c == 0){
    	resArr.push(arr[i]);
    }
  }
  return resArr;
}

let res = dupArr([2,3,2,3,5]);
console.log(res);


// IIFE Function:

let resArr = [];

let dupArr = (function(arr){
	for(let i = 0; i < arr.length; i++){
  	let c = 0;
    for(let j = i + 1; j < arr.length; j++){
    	if(arr[i] == arr[j]){
      	c++;
      }
    }
    if(c == 0){
    	resArr.push(arr[i]);
    }
  }
  return resArr;
})([1,3,4,1,3,4,5]);

let res = dupArr;
console.log(res);