const randomUserGenerator=()=>{
    fetch('https://randomuser.me/api').then((response) => {
        return response.json()}).then((data)=>{
            console.log(data)
        })
}

window.onload=()=>{
    randomUserGenerator()
    
}
