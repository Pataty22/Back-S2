const axios = require('axios');

function getArticles(req,res){
    
    axios.get('https://gist.githubusercontent.com/SuecoMarcus/440d8206cbf0e3e9491d0c431c0e19b6/raw/ea9e085015ae662949ec502389aee17b554a3868/posts.json')
    .then(function (response){
        const articulos = response.data;    
        res.render("home", {articulos});
    })
    .catch(error => {
        console.log(error);
    });
    
};


function art(req,res){
    let articleId= req.params.id;
    
        axios.get('https://gist.githubusercontent.com/SuecoMarcus/440d8206cbf0e3e9491d0c431c0e19b6/raw/ea9e085015ae662949ec502389aee17b554a3868/posts.json')
        .then(function (response){
            const articulos = response.data;
            const articulo = articulos.find(item=> item.id === Number(articleId));
            res.render("articulo", {articulo});
        })
        .catch(error => {
            console.log(error);
        });
};


/* function articleTitle(req,res){
        let artTitle = req.params.title;
        axios.get('https://gist.githubusercontent.com/SuecoMarcus/440d8206cbf0e3e9491d0c431c0e19b6/raw/ea9e085015ae662949ec502389aee17b554a3868/posts.json')
        .then(function (response){
            const titles = response.data;
            const  title = artTitle
            res.render("articulo", {artTitle});
        })
        .catch(error => {
            console.log(error);
        });
};*/

module.exports = {
    getArticles,
    art,
}