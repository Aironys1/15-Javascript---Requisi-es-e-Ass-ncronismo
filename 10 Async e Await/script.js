
async function loadPOsts(){
    document.getElementById("posts").innerHTML = 'Carregando...';


    let req  = await fetch('https://jsonplaceholder.typicode.com/posts')   // Retorna uma promessa 

    let json = await req.json();
    montarBlog(json);

   }  

   function montarBlog(lista){
       let html = '';
       for(let i=0; i<lista.length; i++){
           html += '<h1>'+lista[i].title+'</h1>';
           html += lista[i].body+'<br/>';
           html += '<hr/>';

       }
       document.getElementById('posts').innerHTML = html;
   }









   // Exercicio

   
   function coments(){
    document.getElementById('comentarios').innerHTML = "Carregando comentarios...";
   

   fetch('https://jsonplaceholder.typicode.com/comments')
        .then(function(resultado){
            return resultado.json();
        })

        .then(function(json){
            document.getElementById('comentarios').innerHTML = json.length+' comentarios';
        })

        .catch(function(error){
            console.log("Erroooo!!!");
        })
    }
