// ELOQUENT CHAPTER 3 - FUNCTIONS EXERCISES

// MINIMUM
function min(a,b) {
	if(a < b) return a;
  	else return b;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

// RECURSION
function isEven(num) {
    if(num < 0) return isEven(num -2);
    else if(num % 2 === 0) return true;
    else if(!num % 2 === 0) return false;
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

// BEAN COUNTING
function countBs(str) {
	let strArr = str.split('');
  	let counter = 0;
  	strArr.forEach(function(l){
    	if(l === "B") counter ++;
    }); 
  	return counter;
}

function countChar(str, char) {
	let strArr = str.split('');
  	let counter = 0;
  	strArr.forEach(function(l) {
    	if(l === char) counter ++;
    });
  	return counter;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4