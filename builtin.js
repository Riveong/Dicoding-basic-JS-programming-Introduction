//built in class date
const date = new Date();
 
const timeInJakarta = date.toLocaleString('id-ID', {
  timeZone: 'Asia/Jakarta',
});
 
const timeInTokyo = date.toLocaleString('ja-JP', {
  timeZone: 'Asia/Tokyo',
});
 
const timeInMakassar = date.toLocaleString('id-ID', {
  timeZone: 'Asia/Makassar',
});
 
console.log(timeInJakarta);
console.log(timeInTokyo);
console.log(timeInMakassar);
 
/**
* Output:
* 22/12/2022 10.37.14
* 2022/12/22 12:37:14
* 22/12/2022 11.37.14
*/



//array
const myArray = new Array('a', 'b', 'c', 'a', 'b', 'c');
console.log(myArray); // ['a', 'b', 'c', 'a', 'b', 'c']


//array but with streroids
class UniqueArray extends Array {
    constructor(...args) {
      // make sure args is unique before passing it to super
      const uniqueValue = args.filter((item, index) => args.indexOf(item) === index);
   
      super(...uniqueValue);
    }
   
    push(item) {
      // make sure only unique item is added
      if (!this.includes(item)) {
        super.push(item);
      }
    }
  }
   
  const someArray = new UniqueArray('a', 'b', 'c', 'a', 'b', 'c');
  console.log(someArray); // ['a', 'b', 'c']
  someArray.push('d');
  console.log(someArray); // ['a', 'b', 'c', 'd']
  someArray.push('a');
  console.log(someArray); // ['a', 'b', 'c', 'd']


