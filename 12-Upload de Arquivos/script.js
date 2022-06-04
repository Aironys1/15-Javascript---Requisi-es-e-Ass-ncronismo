async function enviar(){
    let arquivo = document.getElementById('arquivo').files[0];

    let body = new FormData();
    body.append('title', 'Sou um novo Arquivo, enviado no ano de 2022');
    body.append('arquivo',arquivo);

    let req = await fetch('http://www.google.com.br/upload',{
        method: 'POST',
        body: body,
        headers:{
            'Content-Type': 'multipart/form-data'
        }
    });

}