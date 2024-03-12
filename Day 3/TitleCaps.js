// Anonymous Function:

let titleCaps = function(str){
	let words = str.toLowerCase().split(' ');
  
  for(let i = 0; i < words.length; i++){
  	words[i] = words[i][0].toUpperCase() + words[i].slice(1); 
  }
  return words.join(' ');
}

let res = titleCaps('iAm gOwtHaM')
console.log(res);


// IIFE Function:

let titleCaps = (function(str){
	let words = str.toLowerCase().split(' ');
  for(let i = 0; i < words.length; i++){
  	words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(' ');
})('iAm gOwTHaM');

let res = titleCaps;
console.log(res);


// Arrow Function:

 let titleCaps = (str) =>{
 	let words = str.toLowerCase().split(" ");
  for(let i = 0; i < words.length; i++){
  	words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(' ');
 };
 
 let res = titleCaps("iAm gOwtHaM");
 console.log(res);