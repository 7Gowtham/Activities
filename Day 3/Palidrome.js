// Anonymous Function:

let palArr = [];

let num = function(arr){
  for(let i = 0; i < arr.length; i++){
  	let sum = 0;
  	let temp = arr[i];
    
    while(temp > 0){
    	r = temp % 10;
      sum = (sum * 10) + r;
      temp = Math.floor(temp / 10);
    }
    if(sum == arr[i]){
    	 palArr.push(arr[i]);
    }
  }
  return palArr;
} 

let res = num([121, 234, 434, 656]);
console.log(res);


// IIFE Function:

let palArr = [];

let pal = (function(arr){
	for(let i = 0; i < arr.length; i++){
  	let temp = arr[i];
    let sum = 0;
    while(temp > 0){
    	let num = temp % 10;
      sum = (sum * 10) + num;
      temp = Math.floor(temp / 10);
    }
    if(sum == arr[i]){
    	palArr.push(arr[i]);
    }
  }
  return palArr;
  
})([131,234,565,435]);

let res = pal;
console.log(res);


// Arrow Function:

let pal = (arr) => {
	let palArr=  [];
  for(let i = 0; i < arr.length; i++){
  	let temp = arr[i];
    let sum = 0;
    
    while(temp > 0){
    	let num = temp % 10;
      sum = (sum * 10) + num;
      temp = Math.floor(temp / 10);
    }
    if(sum == arr[i]){
    	palArr.push(arr[i]);
    }
  }
  return palArr;
};

let res = pal([121, 456, 454, 654, 767]);
console.log(res);