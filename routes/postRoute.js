const express = require('express');
const postroute = express();

const bodyParser = require('body-parser')
postroute.use(bodyParser.json());
postroute.use(bodyParser.urlencoded({extended:true}));

const multer = require('multer')
const path = require('path');

postroute.use(express.static('public'));
multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname, '../public/postImages'),function(error,success){
            if (error){
                console.log(error);
            }
        });
    },
    filename: function(req, file, cb){
        const name = Date.now()+'-'+file.originalname;
        cb(null,name,function(error,success){
            if (error){
                console.log(error);
            }

        })

    }
})