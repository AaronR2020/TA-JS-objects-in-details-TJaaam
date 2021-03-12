//using object.create
function Projects(name,id,noOfProjects){
let user=Object.create(Projects.prototype)
user.name=name;
user.id=id;
user.noOfProjects=noOfProjects;
return user;
}
Projects.prototype={
    getProjects:function (){
        return this.noOfProjects;
    },
    changeName:function(name){
        this.name=name;
        return this.name;
    }
}


//class
class project{
    constructor(name,id,noOfProjects){
        user.name=name;
        user.id=id;
        user.noOfProjects=noOfProjects;
    }
    getProjects(){
        return this.noOfProjects;
    }
    changeName(name){
        this.name=name;
        return this.name;
    }
}


////psudoclassical way
function Projects(name,id,noOfProjects){
    user.name=name;
    user.id=id;
    user.noOfProjects=noOfProjects;
    }

Projects.prototype={
    getProjects:function (){
        return this.noOfProjects;
    },
    changeName:function(name){
        this.name=name;
        return this.name;
    }
}

let user1=new Projects();