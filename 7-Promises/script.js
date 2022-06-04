function pegarTemperatura(){
    return new Promise(function(resolve,reject){
        console.log("pegando temperatura...");setTimeout(function(){
            resolve('40 graus na Sombra');
        }, 2000);
    });
}


// Usando a promisse
console.log("Código antes !!!");
let temp = pegarTemperatura();

console.log("Código durante !!!");
temp.then(function(resultado){
    console.log(" Temperatura "+resultado);
});
console.log(temp);

temp.catch(function(error){
    console.log("Eita, deu erro!!!");
})
console.log("Código depois !!!")