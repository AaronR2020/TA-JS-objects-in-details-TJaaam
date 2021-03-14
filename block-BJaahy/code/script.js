class Square{
    constructor(side){
        this.height=side;
        this.width=side;
        this.numberOfTimes=0;
    }
    description(){
        
        return this.numberOfTimes<4?'The square is ${width} x ${height}':'Upper Limit reached';
    }
    calcArea(){

        return this.height*this.width;
    }
    set area(areaS){
        return typeof areaS==Number?'The square is ${side/2} x ${side/2}':`Not a valid input`;
    }
    static isEqual(){
        //did not understand>recheck video;
    }
}
let sq1=new Square(12);
let sq1=new Square(22);
sq1.area=54;

//user class
class User{
    constructor(firstname,lastname){
        this.fname=firstname;
        this.lname=lastname;
    }
    get fullname(){
        return this.fname+" "+this.lname;
    }
    set fullname(name){
        if(name.length<5){
            alert("Full name should be more than 5 characters")
        }
        nae=name.split(" ")
        this.fname=nae[0]
        this.lname=nae[1]
    }
    nameContains(str){
        if(this.fname.includes(str)){return true}
        else if(this.fname.includes(str)){return true}
        else{
            return false;
        }
    }
}
let user1=new User("aaron","Rebelo")
let user2=new User("Charlene","vas")
console.log(user2.fullname="Charmain vas",
user1.fullname="Aron",
user2.fullname);

console.log(user2.nameContains("vas"));


