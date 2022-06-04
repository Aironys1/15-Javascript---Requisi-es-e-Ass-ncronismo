function loadPOsts(){
    document.getElementById("posts").innerHTML = 'Carregando...';
   fetch('https://jsonplaceholder.typicode.com/posts')   // Retorna uma promessa 
       .then(function(resultado){
        return resultado.json();           
       })
       .then(function(json){
           document.getElementById('posts').innerHTML = json.length+' posts';
       })
       .catch(function(error){
           console.log("Deu Erro!!!");
       });
   }  


   
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
