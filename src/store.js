import {createStore} from 'redux';



const initialState = {
    usuarios: [
        {
            nombre: "Gabriel Berger"
        },
        {
            nombre: "Sergio Lorenzo"
        },
        {
            nombre: "Josefina Lopez"
        },
        {
            nombre: "Emanuel Lanzinni"
        }
    ],
    contactos: []
};

const reducerUsuarios = (state = initialState, action) => state;


export default createStore(reducerUsuarios);