import React from 'react';
import { Button, ThemeProvider ,Row, Header} from 'react-native-elements';
import logo from './Imagenes/marcapais.png';
import imagen from './Imagenes/imagen.jpeg';
import imagen2 from './Imagenes/imagen2.jpeg';
import imagen3 from './Imagenes/imagen3.jpeg';
import * as firebase from 'firebase';
import { List, ListItem } from 'react-native-elements'
import sideMenu from '../components/sideMenu';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  ImageBackground,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Alert,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';


console.log('antes de cargar islas')


//<DrawerScreen></DrawerScreen>
var config = {
  apiKey: "AIzaSyCjRTc0APXlis-Lh8Vs3qlJH69Uea8StaA",
  authDomain: "honduras-travel.firebaseapp.com",
  databaseURL: "https://honduras-travel.firebaseio.com",
  projectId: "honduras-travel",
  storageBucket: "honduras-travel.appspot.com",
  messagingSenderId: "145169365776"
};

if (!firebase.apps.length){
  firebase.initializeApp(config);
}


 //firebase.initializeApp(config);
database = firebase.database();

//var prueba = "hola mundo";

firebase.database().ref('atractivos').once('value', (data) => {
  var datos = data.val();
  var keys = Object.keys(datos);
  //console.log(keys);
  for (var i =0; i< keys.length; i++){
    var k = keys[5];
    var lugares = datos[k].lugares;
    global.apartado_naturaleza = [datos[k].name];
    var subkeys= Object.keys(lugares);
    global.f_naturaleza =[];
    //global.myVar = apartado_naturaleza;
    for(var m=0; m< subkeys.length; m++){
      f_naturaleza.push(subkeys[m].toString()); 
    }
    //global.f = [subkeys[0],subkeys[1],subkeys[2],subkeys[3],subkeys[4]];
    
    global.desc_naturaleza =[];
    global.link_imagen_naturaleza=[];
    for(var k=0; k< subkeys.length; k++){
      var fotos = lugares[f_naturaleza[k]].fotos;
      desc_naturaleza.push(lugares[f_naturaleza[k]].desc);
      //global.desc_naturaleza = lugares[f[k]].desc_naturaleza;
      var keylinks = Object.keys(fotos);
      var links = keylinks[0];
      link_imagen_naturaleza.push(fotos[links])
      //global.link_imagen_naturaleza =fotos[links];
    }


    //for (var j =0; j< subkeys.length; j++){
      
      //var sk = subkeys[j];
      
      //} 
      //var dato = datos[k].dato;
      //console.log('-----',subkeys);
    }

    console.log('-----',link_imagen_naturaleza);
    console.log('-----',apartado_naturaleza);
    console.log('-----',f_naturaleza);
    console.log('-----',desc_naturaleza);
    //------------------->console.log('-----',subkeys[0]);

  // <sideD></sideD>
  //console.log(data.val());
})

//console.log('----->>>',prueba);

//var ref = database.ref('atractivos');
//ref.on('values', gotData, errData);



//------------------
console.log('Cargo buceo')

//------------------

function gotData(data){
  
console.log('entro');
console.log(data.val());
  
// firebase.database().ref('honduras-travel/').on('atractivos', function (snapshot){
//   console.log(snapshot.val())
// });
/*
  state = {
    items: []
  }

  componentDidMount(){
    itemsRef.on('value', (snapshot) => {
      let data = snapshot.val();
      let items = Object.values(data);
      this.setState({items});
    });
  }

  */
}

function errData(data){
  console.log('La cago papi!');
 
}


function prueba1(){
  console.log('HOLA PERRO');
  //alert('HOLA PERRO');
 
}

import MenuButton from '../app/components/MenuButton'


export default class Buceo extends React.Component {

  constructor(props) {
    super(props);
    this.state ={showAlert: false};
  }

  static navigationOptions = {
    header: null,
  };

  // _threeOptionAlertHandler = () => {
  //   //function to make three option alert
  //   Alert.alert(
  //     //title
  //     'Hello',
  //     //body
  //     'I am three option alert. Do you want to cancel me ?',
  //     [
  //       { text: 'May be', onPress: () => console.log('May be Pressed') },
  //       { text: 'Yes', onPress: () => console.log('Yes Pressed') },
  //       { text: 'OK', onPress: () => console.log('OK Pressed') },
  //     ],
  //     { cancelable: true }
  //   );
  // };

  showAlert=(indice) => {
    this.setState({
      showAlert: true,
    });
    //alert(desc_naturaleza);
    console.log('cabeza de naranja');
    Alert.alert(
      //title
      //'Informacion',
      f_naturaleza[indice].toUpperCase(),
      //body
      'Descripcion: '+desc_naturaleza[indice],
      [
        //{ text: '', onPress: () => console.log('May be Pressed') },
        { text: 'Agregar a favoritos ★', onPress: () => console.log('Favoritos') },
        { text: 'OK', onPress: () => console.log('OK') },
      ],
      { cancelable: true }
    );

  };

  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };

  
  render() {
    const {showAlert}= this.state;
    global.indicador=0;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
          
      <MenuButton/>
            <Image
              source={logo}
              style={styles.welcomeImage}
            />
      <Text
       style={{
        fontSize: 30,
        fontWeight: 'bold',
       }}
      >
        {apartado_naturaleza.toString().toUpperCase()}
      </Text>

            </View>

              {/* <Header
                leftComponent={{ 
                  icon: 'menu', 
                  color: '#fff',
                  
                  onPress:() => retrieveData(),
                  
                 
                }}
                
                centerComponent={{ text: 'Honduras Travel', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
                containerStyle={{
                  backgroundColor: '#3D6DCC',
                  justifyContent: 'space-around',
                }}
              /> */}

        {/* <Image
          style={{flexGrow: 1, width: 'auto', height: 350, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
          source={{uri: 'http://www.honduras.travel/images/carousel/islas/carousel-amapala-1.jpg'}}
        />
       
         <Image
          style={{flexGrow: 1, width: 'auto', height: 350, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
          source={{uri: 'http://www.honduras.travel/images/carousel/islas/carousel-amapala-2.jpg'}}
        /> */}

        <TouchableOpacity onPress={() => {this.showAlert(0)}}>

<ImageBackground 
  source={{ uri: link_imagen_naturaleza[0] }}
  style={{flexGrow: 1, width: 'auto', height: 350, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}
>
  <Text 
    style={{
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
      position: 'absolute', // child
      justifyContent: 'center', 
      alignItems: 'center'
      // bottom: 0, // position where you want
      // left: 0
    }}
    >
    Bioparque Paradise, Lago de Yojoa
  </Text>


  
</ImageBackground>

    </TouchableOpacity>

    {/* ----------------- */}


        <TouchableOpacity onPress={() => {this.showAlert(1)}}>

<ImageBackground 
  source={{ uri: link_imagen_naturaleza[1] }}
  style={{flexGrow: 1, width: 'auto', height: 350, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}
>
  <Text 
    style={{
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
      position: 'absolute', // child
      justifyContent: 'center', 
      alignItems: 'center'
      // bottom: 0, // position where you want
      // left: 0
    }}
    >
    Cataratas Pulhapanzak, Lago de Yojoa
  </Text>


  
</ImageBackground>

    </TouchableOpacity>
    {/* ----------------- */}

        <TouchableOpacity onPress={() => {this.showAlert(2)}}>

<ImageBackground 
  source={{ uri: link_imagen_naturaleza[2] }}
  style={{flexGrow: 1, width: 'auto', height: 350, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}
>
  <Text 
    style={{
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
      position: 'absolute', // child
      justifyContent: 'center', 
      alignItems: 'center'
      // bottom: 0, // position where you want
      // left: 0
    }}
    >
    Cópan Ruinas, Cópan
  </Text>


  
</ImageBackground>

    </TouchableOpacity>
    {/* ----------------- */}

        <TouchableOpacity onPress={() => {this.showAlert(3)}}>

<ImageBackground 
  source={{ uri: link_imagen_naturaleza[3] }}
  style={{flexGrow: 1, width: 'auto', height: 350, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}
>
  <Text 
    style={{
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
      position: 'absolute', // child
      justifyContent: 'center', 
      alignItems: 'center'
      // bottom: 0, // position where you want
      // left: 0
    }}
    >
    Cuevas de Taulabé, Comayagua 
  </Text>


  
</ImageBackground>

    </TouchableOpacity>
    {/* ----------------- */}

        <TouchableOpacity onPress={() => {this.showAlert(4)}}>

<ImageBackground 
  source={{ uri: link_imagen_naturaleza[4] }}
  style={{flexGrow: 1, width: 'auto', height: 350, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}
>
  <Text 
    style={{
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
      position: 'absolute', // child
      justifyContent: 'center', 
      alignItems: 'center'
      // bottom: 0, // position where you want
      // left: 0
    }}
    >
    Fuerte de Cabañas y Casa de K'inich
  </Text>


  
</ImageBackground>

    </TouchableOpacity>
    {/* ----------------- */}

        <TouchableOpacity onPress={() => {this.showAlert(5)}}>

<ImageBackground 
  source={{ uri: link_imagen_naturaleza[5] }}
  style={{flexGrow: 1, width: 'auto', height: 350, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}
>
  <Text 
    style={{
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
      position: 'absolute', // child
      justifyContent: 'center', 
      alignItems: 'center'
      // bottom: 0, // position where you want
      // left: 0
    }}
    >
    Jardín Botánico Lancetilla, Tela, Atlántida
  </Text>


  
</ImageBackground>

    </TouchableOpacity>
    {/* ----------------- */}

        <TouchableOpacity onPress={() => {this.showAlert(6)}}>

<ImageBackground 
  source={{ uri: link_imagen_naturaleza[6] }}
  style={{flexGrow: 1, width: 'auto', height: 350, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}
>
  <Text 
    style={{
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
      position: 'absolute', // child
      justifyContent: 'center', 
      alignItems: 'center'
      // bottom: 0, // position where you want
      // left: 0
    }}
    >
    La Ceiba, Atlántida
  </Text>


  
</ImageBackground>

    </TouchableOpacity>
    {/* ----------------- */}

        <TouchableOpacity onPress={() => {this.showAlert(7)}}>

<ImageBackground 
  source={{ uri: link_imagen_naturaleza[7] }}
  style={{flexGrow: 1, width: 'auto', height: 350, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}
>
  <Text 
    style={{
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
      position: 'absolute', // child
      justifyContent: 'center', 
      alignItems: 'center'
      // bottom: 0, // position where you want
      // left: 0
    }}
    >
    Lago de Yojoa
  </Text>


  
</ImageBackground>

    </TouchableOpacity>
    {/* ----------------- */}

        <TouchableOpacity onPress={() => {this.showAlert(8)}}>

<ImageBackground 
  source={{ uri: link_imagen_naturaleza[8] }}
  style={{flexGrow: 1, width: 'auto', height: 350, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}
>
  <Text 
    style={{
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
      position: 'absolute', // child
      justifyContent: 'center', 
      alignItems: 'center'
      // bottom: 0, // position where you want
      // left: 0
    }}
    >
    La Mosquitia 
  </Text>


  
</ImageBackground>

    </TouchableOpacity>
    {/* ----------------- */}

        <TouchableOpacity onPress={() => {this.showAlert(9)}}>

<ImageBackground 
  source={{ uri: link_imagen_naturaleza[9] }}
  style={{flexGrow: 1, width: 'auto', height: 350, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}
>
  <Text 
    style={{
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
      position: 'absolute', // child
      justifyContent: 'center', 
      alignItems: 'center'
      // bottom: 0, // position where you want
      // left: 0
    }}
    >
    Parque Arqueológico Los Naranjos, Lago de Yojoa
  </Text>


  
</ImageBackground>

    </TouchableOpacity>
    {/* ----------------- */}

        <TouchableOpacity onPress={() => {this.showAlert(10)}}>

<ImageBackground 
  source={{ uri: link_imagen_naturaleza[10] }}
  style={{flexGrow: 1, width: 'auto', height: 350, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}
>
  <Text 
    style={{
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
      position: 'absolute', // child
      justifyContent: 'center', 
      alignItems: 'center'
      // bottom: 0, // position where you want
      // left: 0
    }}
    >
    Mariposario, Lago de Yojoa
  </Text>


  
</ImageBackground>

    </TouchableOpacity>
    {/* ----------------- */}

        <TouchableOpacity onPress={() => {this.showAlert(11)}}>

<ImageBackground 
  source={{ uri: link_imagen_naturaleza[11] }}
  style={{flexGrow: 1, width: 'auto', height: 350, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}
>
  <Text 
    style={{
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
      position: 'absolute', // child
      justifyContent: 'center', 
      alignItems: 'center'
      // bottom: 0, // position where you want
      // left: 0
    }}
    >
    Parque Nacional Cerro Azul Meámbar - PANCAM, Lago de Yojoa
  </Text>


  
</ImageBackground>

    </TouchableOpacity>
    {/* ----------------- */}

        <TouchableOpacity onPress={() => {this.showAlert(12)}}>

<ImageBackground 
  source={{ uri: link_imagen_naturaleza[12] }}
  style={{flexGrow: 1, width: 'auto', height: 350, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}
>
  <Text 
    style={{
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
      position: 'absolute', // child
      justifyContent: 'center', 
      alignItems: 'center'
      // bottom: 0, // position where you want
      // left: 0
    }}
    >
    Parque Acuático San Fernando de Omoa 
  </Text>


  
</ImageBackground>

    </TouchableOpacity>
    {/* ----------------- */}

        <TouchableOpacity onPress={() => {this.showAlert(13)}}>

<ImageBackground 
  source={{ uri: link_imagen_naturaleza[13] }}
  style={{flexGrow: 1, width: 'auto', height: 350, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}
>
  <Text 
    style={{
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
      position: 'absolute', // child
      justifyContent: 'center', 
      alignItems: 'center'
      // bottom: 0, // position where you want
      // left: 0
    }}
    >
    Parque de Aves Montaña Guacamaya
  </Text>


  
</ImageBackground>

    </TouchableOpacity>
    {/* ----------------- */}

        <TouchableOpacity onPress={() => {this.showAlert(14)}}>

<ImageBackground 
  source={{ uri: link_imagen_naturaleza[14] }}
  style={{flexGrow: 1, width: 'auto', height: 350, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}
>
  <Text 
    style={{
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
      position: 'absolute', // child
      justifyContent: 'center', 
      alignItems: 'center'
      // bottom: 0, // position where you want
      // left: 0
    }}
    >
    Parque Nacional Capiro y Calentura 
  </Text>


  
</ImageBackground>

    </TouchableOpacity>
    {/* ----------------- */}

        <TouchableOpacity onPress={() => {this.showAlert(15)}}>

<ImageBackground 
  source={{ uri: link_imagen_naturaleza[15] }}
  style={{flexGrow: 1, width: 'auto', height: 350, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}
>
  <Text 
    style={{
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
      position: 'absolute', // child
      justifyContent: 'center', 
      alignItems: 'center'
      // bottom: 0, // position where you want
      // left: 0
    }}
    >
    Parque Nacional El Cusuco
  </Text>


  
</ImageBackground>

    </TouchableOpacity>
    {/* ----------------- */}

        <TouchableOpacity onPress={() => {this.showAlert(16)}}>

<ImageBackground 
  source={{ uri: link_imagen_naturaleza[16] }}
  style={{flexGrow: 1, width: 'auto', height: 350, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}
>
  <Text 
    style={{
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
      position: 'absolute', // child
      justifyContent: 'center', 
      alignItems: 'center'
      // bottom: 0, // position where you want
      // left: 0
    }}
    >
    Parque Nacional Jeannette Kawas, Atlántida
  </Text>


  
</ImageBackground>

    </TouchableOpacity>
    {/* ----------------- */}

        <TouchableOpacity onPress={() => {this.showAlert(17)}}>

<ImageBackground 
  source={{ uri: link_imagen_naturaleza[17] }}
  style={{flexGrow: 1, width: 'auto', height: 350, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}
>
  <Text 
    style={{
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
      position: 'absolute', // child
      justifyContent: 'center', 
      alignItems: 'center'
      // bottom: 0, // position where you want
      // left: 0
    }}
    >
    Parque Nacional La Tigra 
  </Text>


  
</ImageBackground>

    </TouchableOpacity>
    {/* ----------------- */}

        <TouchableOpacity onPress={() => {this.showAlert(18)}}>

<ImageBackground 
  source={{ uri: link_imagen_naturaleza[18] }}
  style={{flexGrow: 1, width: 'auto', height: 350, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}
>
  <Text 
    style={{
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
      position: 'absolute', // child
      justifyContent: 'center', 
      alignItems: 'center'
      // bottom: 0, // position where you want
      // left: 0
    }}
    >
    Parque Swinford, Atlántida
  </Text>


  
</ImageBackground>

    </TouchableOpacity>
    {/* ----------------- */}

        <TouchableOpacity onPress={() => {this.showAlert(19)}}>

<ImageBackground 
  source={{ uri: link_imagen_naturaleza[19] }}
  style={{flexGrow: 1, width: 'auto', height: 350, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}
>
  <Text 
    style={{
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
      position: 'absolute', // child
      justifyContent: 'center', 
      alignItems: 'center'
      // bottom: 0, // position where you want
      // left: 0
    }}
    >
    Parque Turístico de Valle de Ángeles
  </Text>


  
</ImageBackground>

    </TouchableOpacity>
    {/* ----------------- */}

        <TouchableOpacity onPress={() => {this.showAlert(20)}}>

<ImageBackground 
  source={{ uri: link_imagen_naturaleza[20] }}
  style={{flexGrow: 1, width: 'auto', height: 350, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}
>
  <Text 
    style={{
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
      position: 'absolute', // child
      justifyContent: 'center', 
      alignItems: 'center'
      // bottom: 0, // position where you want
      // left: 0
    }}
    >
    Parque Nacional Pico Bonito, La Ceiba, Atlántida
  </Text>


  
</ImageBackground>

    </TouchableOpacity>
    {/* ----------------- */}

        <TouchableOpacity onPress={() => {this.showAlert(21)}}>

<ImageBackground 
  source={{ uri: link_imagen_naturaleza[21] }}
  style={{flexGrow: 1, width: 'auto', height: 350, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}
>
  <Text 
    style={{
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
      position: 'absolute', // child
      justifyContent: 'center', 
      alignItems: 'center'
      // bottom: 0, // position where you want
      // left: 0
    }}
    >
    Rawacala Ecotour
  </Text>


  
</ImageBackground>

    </TouchableOpacity>
    {/* ----------------- */}

        <TouchableOpacity onPress={() => {this.showAlert(22)}}>

<ImageBackground 
  source={{ uri: link_imagen_naturaleza[22] }}
  style={{flexGrow: 1, width: 'auto', height: 350, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}
>
  <Text 
    style={{
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
      position: 'absolute', // child
      justifyContent: 'center', 
      alignItems: 'center'
      // bottom: 0, // position where you want
      // left: 0
    }}
    >
    Refugio fr Vida Silvestre Cuero y Salado, Atlántida
  </Text>


  
</ImageBackground>

    </TouchableOpacity>
    {/* ----------------- */}

        <TouchableOpacity onPress={() => {this.showAlert(23)}}>

<ImageBackground 
  source={{ uri: link_imagen_naturaleza[23] }}
  style={{flexGrow: 1, width: 'auto', height: 350, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}
>
  <Text 
    style={{
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
      position: 'absolute', // child
      justifyContent: 'center', 
      alignItems: 'center'
      // bottom: 0, // position where you want
      // left: 0
    }}
    >
    Refugio de Vida Silvestre Laguna de Guaimoreto 
  </Text>


  
</ImageBackground>

    </TouchableOpacity>
              {/* <View style={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>      
                <Image source={{uri: 'http://www.honduras.travel/images/carousel/islas/carousel-amapala-1.jpg'}}/>
                <Image source={{uri: 'http://www.honduras.travel/images/carousel/islas/carousel-amapala-2.jpg'}}/>
              </View> */}

              
              



            {/*}
          <View style={styles.getStartedContainer}>
            {this._maybeRenderDevelopmentModeWarning()}

            <Text style={styles.getStartedText}>Get started by opening</Text>

            <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
              <MonoText style={styles.codeHighlightText}>screens/HomeScreen.js</MonoText>
            </View>

            <Text style={styles.getStartedText}>
              Change this text and your app will automatically reload.
            </Text>
          </View>
          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
            </TouchableOpacity>
          </View>
            {*/}

        </ScrollView>
    
        {/* <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

          <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
            <MonoText style={styles.codeHighlightText}>navigation/MainTabNavigator.js</MonoText>
          </View>
        </View> */}
      </View>
    );
  }


  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
