// Anonymous Function:

let arr3 = [];

let medArr = function(arr1, arr2){
	let i = 0, j = 0;
  let n1 = arr1.length;
  let n2 = arr2.length;
  while(i < n1 && j < n2){
  	if(arr1[i] < arr2[j]){
    	arr3.push(arr1[i++]);
    }
    else{
    	arr3.push(arr2[j++]);
    }
  }
  while(i < n1) arr3.push(arr1[i++]);
  while(j < n2) arr3.push(arr2[j++]);
  
  let n = n1 + n2;
  if(n % 2 == 1){
  	return arr3[n/2];
  }
  else{
  	return (arr3[n/2] + arr3[n/2 - 1]) / 2;
  }
}

let res = medArr([1,4,6], [2,3,5]);
console.log(res);


// IIFE Function:

let arr3 = [];

let medArr = (function(arr1, arr2){
	let n1 = arr1.length;
  let n2 = arr2.length;
  let i = 0, j = 0;
  
  while(i < n1 && j < n2){
  	if(arr1[i] < arr2[j]){
    	arr3.push(arr1[i++]);
    }
    else{
    	arr3.push(arr2[j++]);
    }
  }
  
  while(i < n1) arr3.push(arr1[i++]);
  while(j < n2) arr3.push(arr2[j++]);
  
  let n = n1 + n2;
  if(n % 2 == 1){
  	return arr3[n/2];
  }
  else{
  	return (arr3[n/2] + arr3[n/2 - 1]) / 2;
  }
  
})([1,4,6], [2,3,5]);

let res = medArr;
console.log(res);