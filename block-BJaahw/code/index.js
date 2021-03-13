// 1. Create a function `createUser` that accepts `name` and `age` and returns a new object with those properties.
function createUser(name,age){
    let obj=Object.create(createUser.prototype)
    obj.name=name;
    obj.age=age;
    return obj;
}

// 2. Add a method named `sayHello` inside the object created above. When called it should alert `Welcome {user}`. Replace `{user}` with the name of the user.
createUser.prototype={
    sayHello: function(){
        alert('Welcome {this.user}')
    }
}
// 3. Use the data (name, age) of two different person to create the object using `createUser`. Store the returned value in `personOne` and `personTwo`.
let user1=createUser("Aaron",24);
// 4. Change the code inside `createUser` in such a way that the methods `sayHello` doesn't have to be in all object. Use the prototypal nature. (Hint Object.create())
//done
// 5. Convert the `createUser` function into Pseudoclassical pattern of object creation. Use `F.prototype` to store the methods. `F.prototype` means storing the methods in prototype property of the function.
//done
// 6. Use `new` to create two new objects with the data of two different person and re-assign the value of `personOne` and `personTwo`.
function CreateUser(name,age){
    obj.name=name;
    obj.age=age;
    return obj;
}
CreateUser.prototype={
    sayHello: function(){
        alert('Welcome {this.user}')
    }
}
let personOne=new CreateUser("Larry",24);
// 7. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.
personOne.sayHello();
// 8. Convert the `createUser` function into `User` class.
class User{
    constructor(name,age){
        obj.name=name;
        obj.age=age; 
        return obj;
    }
    sayHello(){
        alert('Welcome {this.user}')
    }
}
// 9. Check by creating two instance of the class using data of two different persons and re-assign the value of `personOne` and `personTwo`
let personOne=User("aaron",21);
let personTwo=User("Baron",21);
// 10. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.
personOne.sayHello();
personTwo.sayHello();