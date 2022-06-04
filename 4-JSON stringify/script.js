let pessoa1 = JSON.stringify({nome:"Aironys",idade:31,cargo:"Web Developer"});


let pessoa2 = JSON.parse('{"nome":"Aironys","idade":31,"cargo":"Web Developer"}'
);




console.log(pessoa1);
console.log(pessoa2);


let busca  = {input: 'Palmeiras'};
console.log(busca);


buscaString = JSON.stringify(busca);

let resultado = {
    lista: [
        'Viviane',
        'Aparecida',
        'Bruno',
        'Camila',
        'Amanda'
    ]
};
    
JSON.stringify(resultado);
let res = '{"lista":["Viviane","Aparecida","Bruno","Camila","Amanda"]}';

console.log(resultado);

let resJson = JSON.parse(res)
