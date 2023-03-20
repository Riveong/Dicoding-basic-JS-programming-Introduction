//polymorphism?
class WhatsAppService {
    constructor(sender) {
      this.sender = sender;
    }
   
    sendMessage(message, receiver) {
      console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
   
    sendBroadcastMessage(message, receivers) {
      for (const receiver of receivers) {
        this.sendMessage(message, receiver);
      }
    }
  }

  class EmailService {
    constructor(sender) {
      this.sender = sender;
    }
   
    sendMessage(message, receiver) {
      console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
   
    sendDelayedMessage(message, receiver, delay) {
      setTimeout(() => {
        this.sendMessage(message, receiver);
      }, delay);
    }
  }





  class MailService {
    constructor(sender) {
      this.sender = sender;
    }
   
    sendMessage(message, receiver) {
      console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
   
    sendDelayedMessage(message, receiver, delay) {
      setTimeout(() => {
        this.sendMessage(message, receiver);
      }, delay);
    }
   
    sendBroadcastMessage(message, receivers) {
      for (const receiver of receivers) {
        this.sendMessage(message, receiver);
      }
    }
  }
   
  const whatsapp = new MailService('+6281234567890');
  const email = new MailService('dimas@dicoding.com');

  whatsapp.sendDelayedMessage(); // ???
  email.sendBroadcastMessage(); // ???
  //whats app menuruni dari mail service
  //begitu juga dengan email







  // Superclass
class MailService {
    constructor(sender) {
      this.sender = sender;
    }
   
    sendMessage(message, receiver) {
      console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
  }
  //diatas merupakan kelas superclassnya sedangkan whatsapp dan lainnya nanti akan jadi kelas subnya



  // Superclass
class MailService {
    constructor(sender) {
      this.sender = sender;
    }
   
    sendMessage(message, receiver) {
      console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
  }
   
  // Subclass
  class WhatsAppService extends MailService {
   
  }
   
  // Subclass
  class EmailService extends MailService {
   
  }

  //mereka merupakan subclass karena menurunkan sifat dari mail service dengan kode extends






  // Subclass
class WhatsAppService extends MailService {
    sendBroadcastMessage(message, receivers) {
      for (const receiver of receivers) {
        this.sendMessage(message, receiver);
      }
    }
  }
   
  // Subclass
  class EmailService extends MailService {
    sendDelayedMessage(message, receiver, delay) {
      setTimeout(() => {
        this.sendMessage(message, receiver);
      }, delay);
    }
  }


  /*const whatsapp = new WhatsAppService('+6281234567890');
const email = new EmailService('dimas@dicoding.com');
 
whatsapp.sendMessage('Hello', '+6289876543210');
whatsapp.sendBroadcastMessage('Hello', ['+6289876543210', '+6282234567890']);
whatsapp.sendDelayedMessage(); // Error
 
email.sendMessage('Hello', 'john@doe.com');
email.sendDelayedMessage('Hello', 'john@doe.com', 3000);
email.sendBroadcastMessage(); // Error*/


//const whatsapp = new WhatsAppService('+6281234567890');
 
console.log(whatsapp instanceof WhatsAppService); // true
console.log(whatsapp instanceof EmailService); // false
//cek apakah whats app adalah turunan dari.... jika ya maka true jika tidak maka false
