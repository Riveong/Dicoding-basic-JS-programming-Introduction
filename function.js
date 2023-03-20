function greeting() {
    console.log("Good Morning!")
  }
  
  greeting();



  function greeting(name, language) {
    if(language === "English") {
      console.log(`Good Morning ${name}!`);
    } else if (language === "French") {
      console.log(`Bonjour ${name}!`);
    } else {
      console.log(`Selamat Pagi ${name}!`);
    }
  }
  
  greeting("Harry", "French");
  
  /* output
  Bonjour Harry!
  */

  const user = {
    id: 24,
    displayName: 'kren',
    fullName: 'Kylo Ren',
  };
  
  function introduce({displayName, fullName}) {
    console.log(`${displayName} is ${fullName}`);
  }
  
  introduce(user);
  
  /* output
  kren is Kylo Ren
  */


  function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
      result += number;
    }
    return result;
  }
  
  console.log(sum(1, 2, 3, 4, 5));
  
  /* output
  15
  */



  const sayName = name => {
    console.log(`Nama saya ${name}`)
  }
  
  sayName("Leia");
  
  /* output
  Nama saya Leia
   */



  const sayHello = () => {
    console.log("Selamat pagi semuanya!")
  };
  
  sayHello();
  
  /* output
  Selamat pagi semuanya!
   */


 /* const sayName = name => console.log(`Nama saya ${name}`);
sayName("Leia");

const sayHello = () => console.log("Selamat pagi semuanya!");
sayHello();*/

/* output
Nama saya Leia
Selamat pagi semuanya!
 */



const multiply = (a, b) => a * b;
console.log(multiply(3, 4));

/* output
12
 */






//variable scope
// global variable, dapat diakses pada parent() dan child()
const a = 'a'; 
 
function parent() {
  // local variable, dapat diakses pada parent() dan child(), tetapi tidak dapat diakses di luar dari fungsi tersebut.
  const b = 'b'; 
    
  function child() {
    // local variable, dapat diakses hanya pada fungsi child().
    const c = 'c';
  }
}



//closure
function init() {
    const name = 'Obi Wan';   // Variabel lokal di dalam scope fungsi init
      
    function greet() {      // Inner function, merupakan contoh closure
      console.log(`Halo, ${name}`);   // Memanggil variabel yang dideklarasikan di parent function
    }
  
    greet();
  }
  
  init();
  
  /* output
  Halo, Obi Wan
   */