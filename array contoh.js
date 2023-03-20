let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);
console.log(myArray[5]);
console.log("Panjang nilai myArray adalah " + myArray.length + ".");


myArray.push('JavaScript'); //PUSH
console.log(myArray);

myArray.pop();//POP
console.log(myArray);

myArray.shift();//POP FRONT
myArray.unshift("Apple");//PUSH FRONT



myArray.splice(2, 1);   // slice from index 2 for 1 element
delete myArray[1]; //delete element 1 from myArray