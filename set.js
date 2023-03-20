//unduplicateable array
const numberSet = new Set([1, 4, 6, 4, 1]);

console.log(numberSet);

/* output
Set(3) { 1, 4, 6 }
*/

const numberSet1 = new Set([1, 4, 6, 4, 1]);
numberSet1.add(5);
numberSet1.add(10);
numberSet1.add(6);

console.log(numberSet1);

/* output
Set(5) { 1, 4, 6, 5, 10 }
*/


numberSet.delete(4); //delete NUMBER 4 NOT INDEX NUMBER 4
/* output
Set(4) { 1, 6, 5, 10 }
*/