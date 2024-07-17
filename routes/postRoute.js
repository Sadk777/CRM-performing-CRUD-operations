const express = require('express');
const postroute = express();

const bodyParser = require('body-parser')
postroute.use(bodyParser.json());
postroute.use(bodyParser.urlencoded({extended:true}));

const multer = require('multer')
const path = require('path');
