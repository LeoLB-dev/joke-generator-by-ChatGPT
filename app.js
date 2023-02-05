const bouton = document.getElementById("bouton");
const blague = document.getElementById("blague-text");

bouton.addEventListener("click", () => {
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://official-joke-api.appspot.com/jokes/random", true);
xhr.onload = function () {
if (this.status === 200) {
const response = JSON.parse(this.responseText);
blague.innerHTML = response.setup + ' ' + response.punchline;
} else {
console.error("Il y a eu une erreur lors de la requête API.");
}
};
xhr.send();
});

document.getElementById("bouton").addEventListener("click", function(){
    document.getElementById("consigne").innerHTML = "⇓";
  });
