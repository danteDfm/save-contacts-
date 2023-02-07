const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bparser = require('body-parser');
const hbs = require('express-handlebars');
const methodOverride = require('method-override');
require('dotenv').config();
require('./database');

//initialze
const app = express();


//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '/views'));
app.set('static', path.join(__dirname, '/public'));
app.engine('.hbs', hbs.engine({

    defaultLayout :'main.hbs',
    layoutsDir: path.join(app.get('views')+'/layouts'),
    partialsDir:path.join(app.get('views')+'/partials'),
    extname: '.hbs'

}));
app.set('view engine', '.hbs');

//middlewares
app.use(morgan('dev'));
app.use(bparser.urlencoded({extended: false}));
app.use(bparser.json());
app.use(methodOverride('_method'));



//routes
app.use(require('./routes/contactsRouter'));


//static 
app.use(express.static(path.join(app.get('static'), '/css')));
app.use(express.static(path.join(app.get('static'), '/js')));


//server
app.listen(app.get('port'), ()=>{

    console.log("server up");

});