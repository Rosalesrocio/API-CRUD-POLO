const express = require('express');
const router = express.Router();
const ModelEvento = require('../models/eventomodels').default;

//obtener todos los eventos,ruta get
router.get('/', async (req, res) => {
    try {
            const eventos = await ModelEvento.find();
            res.status(200).send(eventos);
        } catch (error) {
            console.error('Error al obtener eventos:', error);
            res.status(500).json({ message: 'Error al obtener eventos' });
        }
    });

    //ruta post para crear un nuevo evento
router.post('/', async (req, res) => {
      try {
        const nuevoEvento = new ModelEvento(req.body);
        const eventoGuardado = await nuevoEvento.save();
        res.status(201).json(eventoGuardado); // Devuelve el evento creado con id y timestamps
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al crear el evento', error });
    }
});

//obtener un evento por id
router.get('/:id', async (req, res) => {
    try {
        const evento = await ModelEvento.findById(req.params.id);
        if (!evento) {
            return res.status(404).json({ message: 'Evento no encontrado' });
        }   
        res.status(200).json(evento);

        }catch (error) {
            console.error('Error al obtener el evento:', error);
            res.status(500).json({ message: 'Error al obtener el evento' });
        }
    });

//crear un nuevo evento
router.post('/eventos', async (req, res) => {
    const body = req.body; 

    try {
        const nuevoEvento = await ModelEvento.create(body);
        res.status(201).json(nuevoEvento);
    } catch (error) {
        console.error('Error al crear el evento:', error);
        res.status(500).json({ message: 'Error al crear el evento' });
    }
});   

//actualizar un evento por id
router.put('/:id', async (req, res) => {
    
    try {
        const eventoActualizado = await ModelEvento.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true});
                if (!eventoActualizado) {
                    return res.status(404).json({ message: 'Evento no encontrado' });
                }
                res.status(200).json(eventoActualizado);
            } catch (error) {
                console.error('Error al actualizar el evento:', error);
                res.status(500).json({ message: 'Error al actualizar el evento' });
            }
        });

//eliminar un evento por id
router.delete('/:id', async (req, res) => {
    try {
        const eventoEliminado = await ModelEvento.findByIdAndDelete(req.params.id);
        if (!eventoEliminado) {
            return res.status(404).json({ message: 'Evento no encontrado' });
        }
        res.status(200).json({ message: 'Evento eliminado correctamente', evento: eventoEliminado });
    } catch (error) {
        console.error('Error al eliminar el evento:', error);
        res.status(500).json({ message: 'Error al eliminar el evento' });
    }
});
module.exports = router;