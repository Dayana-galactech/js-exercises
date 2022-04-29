
class Person {
    
    constructor(firstName,lastName,skills){
        this.firstName = firstName;
        this.lastName = lastName;
        this.skills = skills;
       
        
    }
    setFirstName(firstName){
        this.firstName = firstName;
    }
    setLastName(lastName){
        this.lastName = lastName;
    }
    learnSkill=(skill)=>{
        let timeToWait = 5000;
        if (mapSkills[skill]) {
            timeToWait = mapSkills[skill]
        }
               
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.skills.push(skill)
                resolve(this);
            }, timeToWait);
        });
    }
}
// var person = new Person("john","doe");
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.skills);
// person.setFirstName("Dayana");
// person.setLastName("Azzam");
// console.log(person.firstName);
// console.log(person.lastName);

var person = new Person("John", "Doe", ["java"]);
var skill=person.skills;

var mapSkills = {
    "js": 3000,
    "php": 1000
};

console.log(person.skills);

person.learnSkill("js").then( person => {
    console.log("Finished Promise")
    console.log(person.skills)
});

console.log(person.skills);

