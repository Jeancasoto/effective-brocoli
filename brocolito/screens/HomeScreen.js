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

//import DrawerScreen from '../app/stacks/drawerScreen';
// import {
//   StackNavigator
// } from 'react-navigation';

// import menu from '../app/index.js';
// const Navigator = StackNavigator({
//   DrewerStack: {screen: DrawerStack}
// },{
//     headerMode: 'none',
//     initialRouteName: 'drawerStack'
// })

// export default Navigator;

{/* <menu></menu> */}

import sideD from '../screens/sideScreen.js'
import {
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

function prueba(){
  
}

function retrieveData(){

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

firebase.database().ref('atractivos').once('value', (data) => {
  var datos = data.val();
  var keys = Object.keys(datos);
  //console.log(keys);
  for (var i =0; i< keys.length; i++){
    var k = keys[i];
    var name = datos[k].name;
    //var dato = datos[k].dato;
    console.log(name);
  }
  // <sideD></sideD>
  //console.log(data.val());
})

//var ref = database.ref('atractivos');
//ref.on('values', gotData, errData);

}

//------------------

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

import MenuButton from '../app/components/MenuButton'

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };

  
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
          
      <MenuButton/>
            <Image
              source={logo}
              style={styles.welcomeImage}
            />

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

<TouchableOpacity >
<ImageBackground 
  source={{ uri: 'https://honduras.travel/images/promos/feriado-morazanico-2018/cover-roatan-min.jpg' }}
  style={{flexGrow: 1, width: 'auto', height: 350, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}
>
  <Text 
    style={{
      fontSize: 22,
      fontWeight: 'bold',
      color: 'white',
      position: 'absolute', // child
      //justifyContent: 'center', 
      //alignItems: 'center'
      bottom: 40, // position where you want
      left: 0
    }}
    >
    Honduras, Amor a primera vista
  </Text>
  <Text 
    style={{
      fontSize: 10,
      
      color: 'white',
      position: 'absolute', // child
      //justifyContent: 'center', 
      //alignItems: 'center'
      bottom: 20, // position where you want
      left: 0
    }}
    >
    ROATÁN, UNA DE LAS 10 MEJORES PLAYAS DEL MUNDO

  </Text>
  
  <Text 
    style={{
      fontSize: 8,
      
      color: 'white',
      position: 'absolute', // child
      //justifyContent: 'center', 
      //alignItems: 'center'
      bottom: 10, // position where you want
      left: 0
    }}
    >
   
    Travelers'Choice de TripAdvisor 2016
  </Text>

  
</ImageBackground>
</TouchableOpacity>
 
<TouchableOpacity >
<ImageBackground 
  source={{ uri: 'https://honduras.travel/images/new/Wolfgang-Polzer-Pulhapanzak-min.jpg' }}
  style={{flexGrow: 1, width: 'auto', height: 350, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}
>
  <Text 
    style={{
      fontSize: 26,
      fontWeight: 'bold',
      color: 'white',
      position: 'absolute', // child
      //justifyContent: 'center', 
      //alignItems: 'center'
      bottom: 45, // position where you want
      left: 0
    }}
    >
    Pulhapanzak
  </Text>

  <Text 
    style={{
      fontSize: 18,
      
      color: 'white',
      position: 'absolute', // child
      //justifyContent: 'center', 
      //alignItems: 'center'
      bottom: 28, // position where you want
      left: 0
    }}
    >
    La catarata que ha inspirado a muchos
    
  </Text>
  <Text 
    style={{
      fontSize: 8,
      
      color: 'white',
      position: 'absolute', // child
      //justifyContent: 'center', 
      //alignItems: 'center'
      bottom: 20, // position where you want
      left: 0
    }}
    >
    -Canopy, comida, y aventura
    
  </Text>
  <Text 
    style={{
      fontSize: 8,
      
      color: 'white',
      position: 'absolute', // child
      //justifyContent: 'center', 
      //alignItems: 'center'
      bottom: 10, // position where you want
      left: 0
    }}
    >
    Lago de Yojoa
    
  </Text>
  
</ImageBackground>
</TouchableOpacity>

<TouchableOpacity >
<ImageBackground 
  source={{ uri: 'https://honduras.travel/images/promos/feriado-morazanico-2018/copan-cover.jpg' }}
  style={{flexGrow: 1, width: 'auto', height: 350, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}
>
  <Text 
    style={{
      fontSize: 26,
      fontWeight: 'bold',
      color: 'white',
      position: 'absolute', // child
      //justifyContent: 'center', 
      //alignItems: 'center'
      bottom: 45, // position where you want
      left: 0
    }}
    >
    Historia a tus pies
  </Text>
  <Text 
    style={{
      fontSize: 14,
      
      color: 'white',
      position: 'absolute', // child
      //justifyContent: 'center', 
      //alignItems: 'center'
      bottom: 28, // position where you want
      left: 0
    }}
    >
    COPÁN, PATRIMONIO DE LA HUMANIDAD
  </Text>

  <Text 
    style={{
      fontSize: 10,
   
      color: 'white',
      position: 'absolute', // child
      //justifyContent: 'center', 
      //alignItems: 'center'
      bottom: 14, // position where you want
      left: 0
    }}
    >
    - World Heritage List de UNESCO
  </Text>

  <Text 
    style={{
      fontSize: 8,
   
      color: 'white',
      position: 'absolute', // child
      //justifyContent: 'center', 
      //alignItems: 'center'
      bottom: 5, // position where you want
      left: 0
    }}
    >
    Ruinas de Copán, Copán
  </Text>

</ImageBackground>
</TouchableOpacity>


<TouchableOpacity >
<ImageBackground 
  source={{ uri: 'https://honduras.travel/images/new/Martin-Strmiska-Utila-small-min.jpg' }}
  style={{flexGrow: 1, width: 'auto', height: 350, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}
>
  <Text 
    style={{
      fontSize: 22,
      fontWeight: 'bold',
      color: 'white',
      position: 'absolute', // child
      //justifyContent: 'center', 
      //alignItems: 'center'
       bottom: 44, // position where you want
       left: 0
    }}
    >
    Descubre nuevos mundos
  </Text>

  <Text 
    style={{
      fontSize: 12,
      fontWeight: 'bold',
      color: 'white',
      position: 'absolute', // child
      //justifyContent: 'center', 
      //alignItems: 'center'
       bottom: 24, // position where you want
       left: 0
    }}
    >
    Los mejores lugares para bucear se encuentran en Islas de la Bahía
  </Text>

  <Text 
    style={{
      fontSize: 10,
      fontWeight: 'bold',
      color: 'white',
      position: 'absolute', // child
      //justifyContent: 'center', 
      //alignItems: 'center'
       bottom: 14, // position where you want
       left: 0
    }}
    >
    - World's Best Islands for Snorkeling - Islands.com
  </Text>

  <Text 
    style={{
      fontSize: 8,
      color: 'white',
      position: 'absolute', // child
      //justifyContent: 'center', 
      //alignItems: 'center'
       bottom: 4, // position where you want
       left: 0
    }}
    >
   Utila, Islas de la Bahía
  </Text>

  
</ImageBackground>
</TouchableOpacity>


<TouchableOpacity >
<ImageBackground 
  source={{ uri: 'https://honduras.travel/images/new/Wolfgang-Polzer-Avistamiento-de-Aves-small-min.jpg' }}
  style={{flexGrow: 1, width: 'auto', height: 350, justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}
>
  <Text 
    style={{
      fontSize: 26,
      fontWeight: 'bold',
      color: 'white',
      position: 'absolute', // child
      //justifyContent: 'center', 
      //alignItems: 'center'
       bottom: 44, // position where you want
       left: 0
    }}
    >
    Naturaleza y tranquilidad
  </Text>

  <Text 
    style={{
      fontSize: 11,
      color: 'white',
      position: 'absolute', // child
      //justifyContent: 'center', 
      //alignItems: 'center'
       bottom: 26, // position where you want
       left: 0
    }}
    >
    Vive un momento de paz durante el avistamiento de aves en su entorno natural
  </Text>

  <Text 
    style={{
      fontSize: 8,
      color: 'white',
      position: 'absolute', // child
      //justifyContent: 'center', 
      //alignItems: 'center'
       bottom: 18, // position where you want
       left: 0
    }}
    >
- Escucha, observa y conoce las aves de PANACAM
  </Text>

  <Text 
    style={{
      fontSize: 8,
      color: 'white',
      position: 'absolute', // child
      //justifyContent: 'center', 
      //alignItems: 'center'
       bottom: 8, // position where you want
       left: 0
    }}
    >
  PANACAM, Lago de Yojoa
  </Text>


  
</ImageBackground>
</TouchableOpacity>
              {/* <View style={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>      
                <Image source={imagen}/>
                <Image source={imagen2}/>
              </View> */}

              {/* https://honduras.travel//images/promos/feriado-morazanico-2018/cover-roatan-min.jpg 
              https://honduras.travel/images/new/Wolfgang-Polzer-Pulhapanzak-min.jpg 
              https://honduras.travel/images/promos/feriado-morazanico-2018/copan-cover.jpg
              https://honduras.travel/images/new/Martin-Strmiska-Utila-small-min.jpg
              https://honduras.travel/images/new/Wolfgang-Polzer-Avistamiento-de-Aves-small-min.jpg */}
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
