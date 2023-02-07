const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const database = process.env.db;
const host = process.env.host;
const dbname = process.env.dbname;

const url = database+host+dbname;

mongoose.connect(url, {})
.then(()=>{

    console.log("database is connect ");

})
.catch(err=>{

    console.log("failed connect "+err);
});
