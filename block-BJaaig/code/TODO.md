## Find the output

For the give code below write the output/error along with the reason!

```js
let user = {
  username: 'John',
  sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  },
};

let user2 = {
  username: 'Arya',
  sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  },
};
let user3 = {
  username: 'Bran',
};

function MainUser() {
  this.username = 'Tyrion';
  this.sayHello = function sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  };
}

let userSayHello = user.sayHello;

console.log(user.sayHello()); // Hello John.
console.log(user2.sayHello()); // Hello Arya.
console.log(user.sayHello.call(user2)); // Hello Arya.
console.log(user.sayHello.call(user2, 'Hey')); //hey Arya.
console.log(user.sayHello.apply(user2, ['Hey'])); // Hey Arya.
console.log(typeof user.sayHello.bind(user2)); // Hello Arya

console.log(user.sayHello.bind(user2)()); // error
console.log(userSayHello()); // hello john.
console.log(typeof userSayHello.bind(user2)); // object
console.log(userSayHello.bind(user2)()); // error
console.log(user3.sayHello()); // error

console.log(userSayHello.apply(user3)); //  hello Bran
console.log(userSayHello.call(user3)); // hello Bran
console.log(typeof new MainUser()); // object
console.log(typeof new MainUser()); // bject

console.log(new MainUser().sayHello()); //hello undefined
console.log(new MainUser().sayHello.call(user2)); //hello arya
console.log(new MainUser().sayHello.call(user)); //hello john

console.log(
  new MainUser().sayHello.apply(user, ['Welcome!'])
); // welcome! john. 
```
