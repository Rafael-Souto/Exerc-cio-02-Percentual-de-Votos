//Um município deseja	saber	a	porcentagem de votos de	três candidatos, além da	porcentagem	de votos	brancos	e	nulos. Monte	um	programa	que	receba	como	entrada	o	número	de	votos	de	cada	um	dos	três	candidatos	e	também	os	votos	nulos	e	brancos.	Ao final,	o	programa	deve	apresentar	o	total	de	votos	e	a	porcentagem,	em	relação	a	todos	os	eleitores	que	votaram,	de	votos	de	cada	candidato,	votos	nulos	e	votos	em	branco.

var cand = [ ], total_vot, porc_vot

  alert ("PORCENTUAL DE VOTOS\n");

// Estrutura de entrada da quantidade de votos dos candidatos
for (var i = 0; i < 3; i++){
  cand[i] = parseInt(prompt("Quantos votos o " + (i+1) +"° candidato recebeu: ")); 
}
  vot_nul = parseInt(prompt("Votos nulos: "));
  vot_bra = parseInt(prompt("Votos em branco: ")); 
  
// Soma do total de votos
  total_vot = cand[0] + cand[1] + cand[2] + vot_nul + vot_bra
    alert ("\nSomando todos os votos foram: " + total_vot + " votos");
    alert("----------------------------------------------------------");

// Cálculo da porcentagem de votos de cada candidato e votos brancos e nulos
porc_vot = (cand[0] / total_vot) * 100
  alert ("\nO 1° candidato teve " + porc_vot.toFixed(1) + "% dos votos");
porc_vot = (cand[1] / total_vot) * 100
  alert ("O 2° candidato teve " + porc_vot.toFixed(1) + "% dos votos");
porc_vot = (cand[2] / total_vot) * 100
  alert ("O 3° candidato teve " + porc_vot.toFixed(1) + "% dos votos");
porc_vot = (vot_nul / total_vot) * 100
  alert ("Votos nulos " + porc_vot.toFixed(1) + "% dos votos");
porc_vot = (vot_bra / total_vot) * 100
  alert ("Votos em branco " + porc_vot.toFixed(1) + "% dos votos");
  alert("----------------------------------------------------------");

// Estrutura de condição para saber qual candidato teve o maior percentual de votos
if (cand[0] > cand[1] && cand[0] > cand[2]) {
  alert ("\nO 1° candidato foi eleito com o maior percentual de votos! ");
} 
  else if (cand[1] > cand[0] && cand[1] > cand[2]) {
    alert ("\nO 2° candidato foi eleito com o maior percentual de votos! ");
} 
    else {
      alert ("\nO 3° candidato foi eleito com o maior percentual de votos! ");
} 
    alert("----------------------------------------------------------");