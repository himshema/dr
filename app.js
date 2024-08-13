const express = require('express');
const ejs = require('ejs');
const multer = require('multer');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;
const {log} = require('console');

