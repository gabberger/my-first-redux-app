import React from 'react';
import {connect} from 'react-redux';


const Usuarios = ({usuarios}) => (
    <section>
        <h2>Usuarios de la red social</h2>
        {
            usuarios.map(usuario => (
                <article>
                    <h3>Nombre: {usuario.nombre}</h3>
                    <button>Contactar</button>
                </article>

            ))

                        
        }
    </section> 
)

const mapDispatchToProps = dispatch => {}
    
const mapStateTOProps = state => ({usuarios: state.usuarios})  

export default connect(mapStateTOProps, mapDispatchToProps)(Usuarios);