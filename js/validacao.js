function Enviar() {

    var nome = document.getElementById("nomeid");
    var casa = document.getElementById("casaid");

    if (nome.value != "") {
        alert('Obrigado por se escrever sr(a) ' + nome.value + ' Bem Vindo Hogwarts, sua casa e '+ casaid.value);
    }
}

function Limite(){
	var max = 10;
	var nome = document.getElementById("nomeid");

	if(nome.length > max)
	{
		alert('Tamanho maior que 10');
	}

}