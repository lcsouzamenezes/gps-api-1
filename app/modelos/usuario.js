const mongoose = require('mongoose')

const SchemaUsuario = new mongoose.Schema({
    nome: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    nascimento: {
        type: Date,
        required: true
    },
    telefone: {
        type: String,
        trim: true,
        required: true
    },
    sexo: {
        type: String,
        enum: ['Masculino', 'Feminino'],
        required: true
    },
    orientacao: {
        type: String,
        trim: true,
        required: true
    },
    gps: [{
        id: String,
        nome: String
    }]
}, 
{
    timestamps: true
})