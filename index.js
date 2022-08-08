import express from 'express' //importamos express

const app = express() //iniciamos express

//iniciamos el servidor
app.listen('8000', function(){
    console.log('aplicacion iniciada en el puerto 8000')
})
//configuracion de pug
app.set('views', './vistas')
app.set('view engine', 'pug')

//configuracion de archivos estaticos
app.use(express.static('./vistas'))
app.use(express.static('./src'))
app.use(express.static('./css'))


app.get('/', function(req, res){
    res.render('index', {titulo:'App de contactos', dato:'cualquiertexto'})
   
})