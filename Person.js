
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
// var person = new Person();

// console.log(person.skills);
// const mapSkills = new Map([
//     ["JS", 5]
//   ]);
//   mapSkills.set("PYTHON",10);
// console.log(mapSkills);
 
 
var person = new Person("John", "Doe", ["java"]);
var skill=person.skills;

var mapSkills = {
    "js": 3000,
    "php": 1000
};

console.log(person.skills);
// console.log(mapSkills);
person.learnSkill("js").then( person => {
    console.log("Finished Promise")
    console.log(person.skills)
});

console.log(person.skills);

// console.log(mapSkills);

// let text = "";
// mapSkills.forEach (function(value, key) {
//   text += key + ' = ' + value +'\n';
// })
// console.log(text);
// let veggies = "";
// for (const x of mapSkills.keys()) {
//   veggies += x+'\n';
// }
// console.log(veggies);

// let total = 0;
// for (const x of mapSkills.values()) {
//   total += x;
// }
// console.log(total);

// let text2 = "";
// for (const x of mapSkills.entries()) {
//   text2 += x+'\n';
// }
// console.log(text2);



