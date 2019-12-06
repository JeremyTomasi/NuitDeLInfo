var divCarte = document.getElementsByClassName("divCarteClass");
var text = divCarte.innerText;
console.log(divCarte.innerHTML);

divCarte.innerHTML = $.parseHTML(divCarte[0].innerText);
