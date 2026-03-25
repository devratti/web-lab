const user = document.querySelector("#username")
const password = document.querySelector("#password")
const button = document.querySelector("#btn")

button.addEventListener("click", 
 function(){
 	if (user.value === "" || password.value === "") {
 		alert("Preencha os dois campos")
 	}

else if (user.value === "admin" && password.value === "123") {
	window.location.href = "index.html"
}
else {
	alert("Usuário ou senha incorreta")
}
})