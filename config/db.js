const mongoose = require('mongoose');

const connectDB = async () => {
try {
    await mongoose.connect("mongodb://localhost:27017/dbGestióndeEventos");
    console.log('Conexión a la base de datos exitosa'); 
}catch (error) {
    console.error('Error al conectar a la base de datos:', error.message);
    process.exit(1); // Termina el proceso si no se puede conectar
}
};
module.exports = connectDB;