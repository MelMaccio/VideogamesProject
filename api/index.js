//run the server imported from app.js
const server = require('./src/app'); 
const { sequelize } = require('./src/db')

server.listen(3001, ()=>{
    sequelize.sync({force:true});                        //this makes db drop and re-create every time there is a change in model
    console.log('Listening on port 3001');               //after definig structure change for {alter:true}
})