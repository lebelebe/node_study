var express = require('express');
var intro = express.Router();
var mysql = require('mysql')
var dbconfig = require('../db/config.js')
var connection = mysql.createConnection(dbconfig)


intro.get('/', (req, res) =>{
    connection.query(
        'SELECT * FROM interview;',
        (error, result) => {
            if(error) throw error;
            res.send(result)
        }
    )
})

module.exports = intro;