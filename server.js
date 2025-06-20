const app = require('./app/app');
const config = require('./app/config/config').port;
const conexion = require('./app/config/conexion');

conexion.connect();

app.listen(config,()=>{
    console.log("Aplicacion corriendo en puerto",config);
})