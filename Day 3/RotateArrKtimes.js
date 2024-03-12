// Anoymous Function:

let reverse = function(arr, start, end){
	while(start < end){
  	let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
   	start++;
    end--;
  }
  return arr;
}

let rotate = function(arr, k){
	n = arr.length;
  
  reverse(arr, 0, n - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, n - 1);
  
  return arr;
}

let res = rotate([3,2,5,4,7,6], 3);
console.log(res);


// IIFE Function:

(function(){
	let reverse = function(arr, start, end){
  	while(start < end){
    	let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
    return arr;
  }
  
  let rotate =  function(arr, k){
  	let n = arr.length;
    
    reverse(arr, 0, n - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, n - 1);
    
    return arr;
  }
  
  let res = rotate([3,2,5,4,7,6], 3);
  console.log(res);
})();
