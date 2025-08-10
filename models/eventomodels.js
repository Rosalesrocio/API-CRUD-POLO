import { Schema, model } from 'mongoose';// Importar mongoose y sus métodos Schema y model

//definir el esquema del evento
const eventoSchema = new Schema({
    nombre: {type: String, required: true},
    fecha: {type: Date, required: true},
    ubicacion: {type: String, required: true},
    descripcion: {type: String}
}, {
    timestamps: true //añadir fechas de creación y actualización automáticamente

});
const ModelEvento= model('Evento', eventoSchema);
export default ModelEvento;