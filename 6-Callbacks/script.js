function alertar(){
    alert("Olá pessoal, tudo bem ???");
}
setTimeout(alertar,3000); // CALLBACK é uma função que vc criar para ela se chamada na hora que vc especificou.
// Depois te chamo = CALLBACK


alert("Agora Vamos Informas as Suas Notas:")
let nome = "Aironys Garrido";
let n1 = 10;
let n2 = 7;
let n3 = 2;
let media = ((n1 + n2 +n3)/3);


function notas(){
    alert("Suas notas são:"+media);

}
notas();
