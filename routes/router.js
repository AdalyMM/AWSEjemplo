const bcrypt = require('bcryptjs');
const express = require('express');
const router = express.Router();
const http = require('http');

const controller = require('../controllers/controller');

//Conexion a la base de datos
var conexion = require('../database/db');

//Enrutamiento de vistas
router.get('/', function(req, res, next) {
    controller.obtener().then(palabras => {
        res.render('inicio_sesion', {
            palabras: palabras,
        });
    }).catch(err => {
        return res.status(500).send("Error en el servidor");
    })
})

router.get('/registro', function(req, res, next) {
    controller.obtener().then(palabras => {
        res.render('registro', {
            palabras: palabras,
        });
    }).catch(err => {
        return res.status(500).send("Error en el servidor");
    })
})

/*router.get('/principal', function(req, res, next) {
    controller.obtener().then(palabras => {
        res.render('principal', {
            palabras: palabras,
        });
    }).catch(err => {
        return res.status(500).send("Error en el servidor");
    })
})*/

router.get('/principal', function(req, res, next) {
    controller.preguntas().then(preguntas => {
        res.render('principal', {
            preguntas: preguntas,
        });
    }).catch(err => {
        return res.status(500).send("Error en el servidor");
    })
})

//Esta petición recoge los datos de la vista de registro y los guarda en la base de datos.
router.post('/insertar', function(req, res, next){
    const {user, pass} = req.body;
    if(!user || !pass){
        return res.status(400).send("Faltan datos");
    }
    controller.insertar(user, pass).then(result => {
        res.redirect('/');
    })
    .catch(err => {
        return res.status(500).send("Error en el servidor");
    });
});

router.post('/login', function(req, res, next){
    const {user, pass} = req.body;
    if(!user || !pass){
        return res.status(400).send("Faltan datos");
    }
    controller.login(user).then(result => {
        if(result.length > 0){
            if(bcrypt.compareSync(pass, result[0].contrasena)){
                res.redirect('/principal');            
            }
            else{
                //res.json({error: 'true'});
                res.redirect('/');
            }
        }
        else{
            res.redirect('/');
        }
    }
    ).catch(err => {
        return res.status(500).send("Error en el servidor");
    });
});

router.post('/preguntas', function(req, res, next){
    let result2 = '';
    const mensaje = req.body.chat_message;
    console.log(mensaje);
    controller.pregunta(mensaje).then(result => {
        res.send(result);
        
    }).catch(err => {
        return res.status(500).send("Error en el servidor");
    });
});

router.post('/definicion', function(req, res, next){
    let result2 = '';
    const mensaje = req.body.chat_message;
    console.log(mensaje);
    controller.definicion(mensaje).then(result => {
        res.send(result);
        
    }).catch(err => {
        return res.status(500).send("Error en el servidor");
    });
});

module.exports = router;