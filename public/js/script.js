var divCarte = document.getElementsByClassName("divCarteClass");


for (let i = 0; i < divCarte.length; i++)
{
    var texte = divCarte[i].innerHTML;
    texte[0] = " ";

    divCarte[i].innerHTML = texte
}
