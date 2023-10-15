const form = document.querySelector("form")
console.log(form)

form.addEventListener("submit", (event) =>  {
    event.preventDefault()
    let balisenom = document.getElementById("nom")
    let nom = balisenom.value
    let baliseprenom = document.getElementById("prenom")
    let prenom = baliseprenom.value
    let balisemail = document.getElementById("mail")
    let mail = balisemail.value
    let balisemessage = document.getElementById("message")
    let message = balisemessage.value
    afficherEmail(nom, prenom, mail, message)
})

function afficherEmail(nom, prenom, mail, message) {
let mailto = `mailto:${mail}?subject=contact&body=Hello bébou, voici un message de ${prenom} ${nom} ! ${message}`
location.href = mailto
}