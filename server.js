const app = require('./app/app')
const config = require('./app/config/config').port

app.listen(config,()=>{
    console.log("Aplicacion corriendo en puerto",config );
})