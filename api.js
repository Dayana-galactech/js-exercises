

const getRandomPeople=(n)=>{
   
    fetch('https://randomuser.me/api/?results='+n).then((response) => {
        return response.json()
    }).then((data)=>{
        console.log(data)
    })

}
var people = getRandomPeople(3);
console.log(people);