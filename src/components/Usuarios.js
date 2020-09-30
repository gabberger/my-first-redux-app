import React from 'react';
import {connect} from 'react-redux';


const Usuarios = ({usuarios,conectme}) => (
    <section>
        <h2>Usuarios de la red social</h2>
        {
            usuarios.map(usuario => (
                <article>
                    <h3>Nombre: {usuario.nombre}</h3>
                    <button onClick={() => conectme(usuario)}>Conect me!</button>
                </article>

            ))

                        
        }
    </section> 
)

const mapDispatchToProps = dispatch => ({
    conectme(usuario){
        dispatch({
            type: "AGREGAR_USUARIO",
            usuario
        })
    }
})

    
const mapStateTOProps = state => (
        {
            usuarios: state.usuarios
        }
    )  

export default connect(mapStateTOProps, mapDispatchToProps)(Usuarios);