import React from 'react';
import {connect} from 'react-redux';


const Contactos = ({contactos}) => (
  <section>
      <h2>My contacts!!!</h2>
      {
          contactos.map(contacto => (
              <article>
                  <h3>Nombre: {contacto.nombre}</h3>
                  <button>DesConect me!</button>
              </article>

          ))

                      
      }
  </section> 
)
const mapDispatchToProps = dispatch => {}

  
const mapStateTOProps = state => ({contactos: state.contactos})  

export default connect(mapStateTOProps, mapDispatchToProps)(Contactos);