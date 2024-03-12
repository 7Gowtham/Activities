// Anonymous Function:

let oddNum = function(arr){
	for(let i = 0; i < arr.length; i++){
  	if(arr[i] % 2 != 0){
    	console.log(arr[i]);
    }
  }
}

oddNum([1,2,4,5,6,7,9]);


// IIFE Function:

let oddNum = (function(arr){
	for(let i = 0; i < arr.length; i++){
  	if(arr[i] % 2 != 0){
    	console.log(arr[i]);
    }
  }
})([3,2,5,7,6,9]);


// Arrow Function:

let oddNum = (arr) =>{
	for (let i = 0; i < arr.length; i++){
  	if(arr[i] % 2 != 0){
    	console.log(arr[i]);
    }
  }
};

oddNum([3,2,5,6,8,9]);
