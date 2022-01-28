// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
    
function Teacher(age,gender){
    this.age=age;
    this.gender=gender
}

function Person(age,gender,name,subject){
    Teacher.call(this,age,gender)
    this.name=name;
    this.subject=subject;
}

function Person1(age,gender,name,subject){
    Teacher.apply(this,[age,gender])
    this.name=name;
    this.subject=subject;
}

function Person2(age,gender,name,subject){
   var t=Teacher.bind(this);
   t(age,gender);
   this.name=name;
   this.subject=subject
}


let p1=new Person(23,"m","ravi","hindi");
console.log(p1)
let p2=new Person1(56,"f","joy","eng");
console.log(p2);
let p3=new Person2(12,"m","cat","math");
console.log(p3)



