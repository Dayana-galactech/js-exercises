
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
    learnSkill=(skills)=>{ 
        // console.log(this.skills=skills);
        // const myExecutor=(resolve, reject) => {
            
                if (mapSkills.has(this.skills=skills)) {

                    console.log(mapSkills.get(this.skills=skills));
                } else {
                // setTimeout(()=>{
                    mapSkills.set(this.skills=skills,5000); 
                }
               
            // },mapSkills.get(this.skills=skills))
        // const skillTime = () => {
            // const promise1 = Promise.resolve(this.skills=skills);
            const promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                //     person.skills=mapSkills.keys();
                // console.log(person.skills);

                 resolve(person => console.log(person.skills));
                },mapSkills.get(this.skills=skills) );
            });
            // const promise=new Promise(myExecutor);
            return promise;
        // };
        
        // const orderPromise = skillTime();
        
        // console.log(orderPromise);   
        // function wait(ms) { 
        //     return new Promise((resolve, reject) => setTimeout(resolve, ms));
        //   }
        //   async function DoLoop() {
        //     for (let count = 25; count >= 0; --count) {
        //       console.log(count);
        //       await wait(7000);
        //     }
        //   }
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
 
 
var person = new Person("John", "Doe"); 
var skill=person.skills;

var mapSkills=new Map([
    // ["JS", 5000],
    // ["PYTHON",10000]
    
  ]);
console.log(person.skills);
// console.log(mapSkills);
person.learnSkill("JS").then(person => {console.log(person.skills)});

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



