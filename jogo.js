var tempo_id=null;// variavel que armazena o tempo

function iniciar_jogo(){
		
	var nivel_jogo = document.getElementById('nivel_jogo').value;
	if(nivel_jogo!=0)
		window.location.href='jogo.html?'+nivel_jogo;
	
	else
		alert("Defina um nível para jogar")

}
function iniciaJogo(){
	var url = window.location.search;
	var nivel_jogo = url.replace('?',"");
	var tempo_segundos=0;
	//facil - 120s
	if(nivel_jogo==1){
		tempo_segundos=120;

	}
	//moderado -60s
	else if(nivel_jogo==2){
		tempo_segundos=60;

	}
	//dificil -30s
	else{
		tempo_segundos=30;

	}
	//inserindo segundos na span
	document.getElementById('tempo').innerHTML =tempo_segundos;

	var qtd_baloes=30;
	criarBaloes(qtd_baloes);

	document.getElementById('baloes_inteiros').innerHTML = qtd_baloes;
	document.getElementById('baloes_estourados').innerHTML = 0;
	cronometro(tempo_segundos);
}

function criarBaloes(qtd_baloes){
	for(var i=0;i<qtd_baloes;i++){
		var balao = document.createElement("img");
		balao.src = 'imagens/balao_azul_pequeno.png';
		balao.style.margin='8px';
		document.getElementById('cenario-jogo').appendChild(balao);
	}



}

function cronometro(segundos){
	segundos=segundos-1;
	if(segundos==-1){
		clearTimeout(time_id); // para a execução da funcao do settimeout
		return false
	}
	document.getElementById('tempo').innerHTML=segundos;
	tempo_id= setTimeout("cronometro("+segundos+")",1000);



}