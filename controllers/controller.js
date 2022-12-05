const conexion = require('../database/db');
const bcryptjs = require('bcryptjs');
const { NULL } = require('mysql/lib/protocol/constants/types');

module.exports = {
    obtener(){
        return new Promise((resolve, reject) => {
            conexion.query(`SELECT idp, fechap, palabra FROM palabras`,
                (err, resultados) => {
                if(err) reject(err);
                else resolve(resultados);
            });
        });
    },
    insertar(user, pass){
        return new Promise((resolve, reject) => {
            const passHash = bcryptjs.hashSync(pass, 2);
            const n = NULL;
            conexion.query(`INSERT INTO usuarios (Username, contrasena) VALUES (?, ?)`,
                [user, passHash],
                (err, resultados) => {
                if(err) reject(err);
                else resolve(resultados);
            });
        });
    },
    login(user){
        return new Promise((resolve, reject) => {
            conexion.query(`SELECT * FROM usuarios WHERE Username = ?`,
                [user],
                (err, resultados) => {
                if(err) console.log(resultados);
                else resolve(resultados);
            });
        });
    },
    definiciones(){
        return new Promise((resolve, reject) => {
            conexion.query(`SELECT * FROM definiciones`, [frase],
                (err, resultados) => {
                if(err) console.log(resultados);
                else resolve(resultados);
            });
        });
    },
    definicion(frase){
        return new Promise((resolve, reject) => {
            conexion.query(`SELECT * FROM definiciones WHERE frase = ?`, [frase],
                (err, resultados) => {
                if(err) console.log(resultados);
                else resolve(resultados);
            });
        });
    },
    preguntas(){
        return new Promise((resolve, reject) => {
            conexion.query(`SELECT * FROM preguntas`,
                (err, resultados) => {
                if(err) console.log("Sin respuesta");
                else resolve(resultados);
            });
        });
    },
    pregunta(mensaje){
        return new Promise((resolve, reject) => {
            conexion.query(`SELECT * FROM preguntas WHERE pregunta = ?`, [mensaje],
                (err, resultados) => {
                if(err) console.log(resultados);
                else resolve(resultados);
            });
        });
    }
}
