var divCarte = document.getElementsByClassName("divCarteClass");
var text = divCarte[0].innerText;
console.log(divCarte[0].innerHTML);

divCarte.innerHTML = $.parseHTML(divCarte[0].innerHTML);
