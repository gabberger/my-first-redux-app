import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Usuarios from './components/Usuarios';
import Contactos from './components/Contactos';


class App extends Component{
  render(){
    return <Provider store={store}>
        <main>
          <h1>Red Social de Profesionales en Informatica</h1>
          <Usuarios />
          <Contactos />
        
        </main>
    </Provider>  
  }
}


export default App;
