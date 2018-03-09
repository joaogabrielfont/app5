import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Navigator } from 'react-native-deprecated-custom-components';

//importar o componente barra de navegação

import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';
import CenaContatos from './src/components/CenaContatos';
import CenaEmpresa from './src/components/CenaEmpresa';
import CenaServicos from './src/components/CenaServicos';

export default class app5 extends Component {
  render() {
    return (
      <Navigator

	      initialRoute = {{id: 'principal'}}
	      renderScene = {(route, navigator) => {
	      	//definir a cena com base na rota

	      	if(route.id == 'principal') {
	      		return(<CenaPrincipal navigator = {navigator} />);
	      	}
	      	else if (route.id == 'cliente') {
	      		return(<CenaClientes navigator = {navigator}/>)
	      	}
	      	else if (route.id == 'contato') {
	      		return(<CenaContatos navigator = {navigator}/>)
	      	}
	      	else if (route.id == 'empresa') {
	      		return(<CenaEmpresa navigator = {navigator}/>)
	      	}
	      	else if (route.id == 'servico') {
	      		return(<CenaServicos navigator = {navigator}/>)
	      	}
	      }
	  		}

       />
    );
  }
}

const styles = StyleSheet.create({
  

});

AppRegistry.registerComponent('app5', () => app5);
