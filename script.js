let name = prompt("Qual è il tuo nome?");
let lastName = prompt("Qual è il tuo cognome?");
let favouriteColor = prompt("Qual è il tuo colore preferito?")
let password = `${name}${lastName}${favouriteColor}23`

document.getElementById('password').innerHTML = password;