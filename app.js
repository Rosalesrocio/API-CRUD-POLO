const express= require('express');
const app= express();
const connectDB = require('./config/db');
const eventosRoutes = require('./routes/eventos');

app.use(express.json());
app.use('/api/eventos', require('./routes/eventos')); // Rutas para manejar eventos

connectDB().then(() => {
    app.listen(3000,()=>{ 
        console.log('Servidor escuchando en el puerto 3000');
    });
}).catch((error) => {
    console.error('No se pudo iniciar el servidor debido a un error de conexión a la base de datos:', error);
}); 