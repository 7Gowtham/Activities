// Anonymous Function:

let sumArr = function(arr){
	sum = 0;
	for(let i = 0; i < arr.length; i++){
  	sum = sum + arr[i];
  }
  return sum;
}

let res = sumArr([1,2,3,4]);
console.log(res);


// IIFE Function:

let sumArr = (function(arr){
	let sum = 0;
  for(let i = 0; i < arr.length; i++){
  	sum = sum + arr[i];
  }
  return sum;
})([1,4,2,5,4]);

let res = sumArr;
console.log(res);


// Arrow Function:

let sumArr = (arr) => {
	let sum = 0;
  for(let i = 0; i < arr.length; i++){
  	sum = sum + arr[i];
  }
  console.log(sum);
};

sumArr([3,2,5,4,6]);
