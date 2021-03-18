class animal{
    constructor(location,numberOfLegs){
        this.location=location;
        this.numberOfLegs=numberOfLegs;
    }
    eat(){
       return `I live in ${this.location} and I can eat`
    }
    changeLocation(){
        this.location=location;
        return this.location;
    }
    summary(){
       return `I live in ${this.location} and I have ${this.numberOfLegs}`
    }
    
}
class Dog extends animal{
    constructor(location,numberOfLegs,name,color){
        super(location,numberOfLegs);
        this.name=name;
        this.color=color;
    }
    bark(){
        return `I am ${this.name} and I can bark 🐶`;
    }
    changeName(newName){
        this.name=newName;
        return this.name;
    }
    changeColor(newColor){
        this.color=newColor;
        return this.color;
    }
    summary(){
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }
}
class Cat extends animal{
    constructor(location,numberOfLegs,name,colorOfEyes){
        super(location,numberOfLegs);
        this.name=name;
        this.colorOfEyes=colorOfEyes;
    }
    meow(){
        return `I am ${name} and I can mewo meow 😹`;
    }
    changeName(newName){
        this.name=newName;
        return this.name;
    }
    changeColorOfEyes(newColor){
        this.colorOfEyes=newColor;
        return this.colorOfEyes;
    }
    summary(){
        return `I am ${this.name} and my eyes are of ${this.colorOfEyes} color. I can also meow!!`
    }
}