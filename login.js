var objPeople = [
    {
        login: "SMILE",
        password: "449"
    },
    {
        login: "admin",
        password: "elytroo"
    }
]

function getInfo(){
    var login = document.getElementById("login").value;
    var password = document.getElementById("password").value;

    for(var i = 0; i < objPeople.length; i++){
        if(login == objPeople[i].login
            && password == objPeople[i].password){
                console.log(login + " jest zalogowany!");
                return true;
            }
    }
    console.log("Nieprawidłowy użytkownik lub hasło");
    return false;
}