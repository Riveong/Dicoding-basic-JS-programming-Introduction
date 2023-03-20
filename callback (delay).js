function getUsers(callback) {
    // simulate network delay
    setTimeout(() => {
      const users = ['John', 'Jack', 'Abigail'];
   
      callback(users);
    }, 300000); 
  }
   
  function usersCallback(users) {
    console.log(users);
  }
   
  getUsers(usersCallback);


  //callback di gunakan untuk membuat delay