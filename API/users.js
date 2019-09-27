const users = [
    {id: 1, name: "Adam"},
    {id: 2, name: "Marysia"},
    {id: 3, name: "Jagienka"}
]

module.exports = {
    showUsers(){
        const names = users.map(a => a.name);
        console.log('Nasi użytkownicy to:');
        names.forEach(name => console.log(name))
    },
    showUserObj(id){
        console.log("Szukany użytkownik to:");
        const userObj = users.find(user => user.id === id);
        console.log(userObj)
    }
}