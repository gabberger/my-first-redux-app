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

const reducerUsuarios = (state = initialState, action) => {
    
    if(action.type === "AGREGAR_USUARIO"){
        alert(action.usuario.nombre);
        return {
            ...state,
            contactos: state.contactos.concat(action.usuario),
            usuarios: state.usuarios.filter(user => user.nombre !== action.usuario.nombre),
        }

    }
    
    return state;
};


export default createStore(reducerUsuarios);