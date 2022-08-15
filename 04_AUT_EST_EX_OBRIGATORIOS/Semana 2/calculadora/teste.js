var velocidade = 0;
var subida = 0;
var altura = 0;

const gravidade = 10;

function calculate()
{
    vel=document.getElementById('velocidade').value;
    subida = (velocidade**2) / (2*gravidade);
    altura = velocidade / gravidade;
    document.getElementById("alt").innerHTML = subida + ' // ' + altura;
}