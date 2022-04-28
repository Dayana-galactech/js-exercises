class Person {
   
    constructor(firstName,lastName,skills){
        this.firstName = firstName;
        this.lastName = lastName;
        this.skills=[skills];
       
        
    }
    setFirstName(firstName){
        this.firstName = firstName;
    }
    setLastName(lastName){
        this.lastName = lastName;
    }
    learnSkill(skills){      
        this.skills=[skills];
    }
}
var person = new Person("john","doe");
console.log(person.firstName);
console.log(person.lastName);
console.log(person.skills);
person.setFirstName("Dayana");
person.setLastName("Azzam");
console.log(person.firstName);
console.log(person.lastName);
person.learnSkill("JS");
console.log(person.skills);


