var imagens = []

function procurar () {
        loading('Carregando...')
    var valor = document.getElementById ('campo_procura').value

    MobileUI
        .ajax
        .get('https://api.giphy.com/v1/gifs/search')
        .query({ api_key: 'kbKkEUe30P3JMiejaIKFEU5UE60aLexx'})
        .query({ q: valor})
        .end(resultado)
    }
    
    function resultado (erro,data) {
        closeLoading()
        if (erro) return alert ('ERRO!!!')
        
        imagens = data.body.data
        console.log(data.body.data)
    }