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
	var qtd_baloes;
	//facil - 120s
	if(nivel_jogo==1){
		tempo_segundos=120;
		qtd_baloes =30;
	}
	//moderado -60s
	else if(nivel_jogo==2){
		tempo_segundos=60;
		qtd_baloes =40;
	}
	//dificil -30s
	else{
		tempo_segundos=30;
		qtd_baloes =50;
	}
	//inserindo segundos na span
	document.getElementById('tempo').innerHTML =tempo_segundos;

	
	criarBaloes(qtd_baloes);

	document.getElementById('baloes_inteiros').innerHTML = qtd_baloes;
	document.getElementById('baloes_estourados').innerHTML = 0;
	cronometro(tempo_segundos+1);
}

function estourar(balao){
	var id_balao =  balao.id;
	document.getElementById(id_balao).src = 'imagens/balao_azul_pequeno_estourado.png';
	document.getElementById(id_balao).setAttribute("onclick","");
	pontuacao();

}
function remove_evento_baloes(){
	var i=0;
	while(document.getElementById('b'+i)){
		document.getElementById('b'+i).onclick='';
		i++;
	}
}
function pontuacao(){
	var balao_inteiro =  document.getElementById('baloes_inteiros').innerHTML;
	var balao_estourado = document.getElementById('baloes_estourados').innerHTML;
	
	balao_inteiro =  parseInt(balao_inteiro);
	balao_estourado =  parseInt(balao_estourado);

	balao_inteiro--;
	balao_estourado++;
	
	document.getElementById('baloes_inteiros').innerHTML = balao_inteiro;

	document.getElementById('baloes_estourados').innerHTML = balao_estourado;

	status_jogo(balao_inteiro);

}
function status_jogo(balao_inteiro){
		if(balao_inteiro==0){
			alert('Parabéns, você conseguiu estourar todos os balões!!');
			parar_jogo();
		}

}
function para_jogo(){
	clearTimeout(tempo_id);
}
function criarBaloes(qtd_baloes){
	for(var i=0;i<qtd_baloes;i++){
		var balao = document.createElement("img");
		balao.src = 'imagens/balao_azul_pequeno.png';
		balao.style.margin='8px';
		balao.id="b"+i;
		balao.onclick = function(){estourar(this);};
		document.getElementById('cenario-jogo').appendChild(balao);
	}



}

function cronometro(segundos){
	segundos=segundos-1;
	if(segundos == -1){
		clearTimeout(tempo_id); // para a execução da funcao do settimeout
		gameOver();
		return false;
	}
	document.getElementById('tempo').innerHTML=segundos;
	tempo_id= setTimeout("cronometro("+segundos+")",1000);



}

function gameOver(){
	remove_evento_baloes();
	alert("Fim do jogo! Você não conseguiu estourar todos os balões no tempo!");
}