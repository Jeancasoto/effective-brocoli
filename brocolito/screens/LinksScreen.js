import React from 'react';
import { ScrollView,Text, Image,StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Button, Input} from 'react-native-elements';
import email from 'react-native-email';
import logo from './Imagenes/marcapais.png';

import Icon from 'react-native-vector-icons/FontAwesome';


export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Stay in touch',
  };
  constructor(props) {
    super(props);
    this.state ={showAlert: false};
  }

  showAlert=(indice) => {
    this.setState({
      showAlert: true,
    });
    console.log("me pa")
    //alert("hello")
    {sendEmail()}
  };

  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };

  render() {
    const {showAlert}= this.state;
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        {/* <ExpoLinksView /> */}
          <Image
              source={logo}
              style={{
                width: 100,
                height: 80,
                resizeMode: 'contain',
                marginTop: 3,
                marginLeft: 150,}}
            />
            <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              color: 'black',
              //position: 'absolute', // child
              justifyContent: 'center', 
              alignItems: 'center'
            }}>Si quieres mantenerte en contacto con nosotros, proporcionanos tu correo para mantenerte al dia con eventos y promociones en toda Honduras!</Text>
        <Input
        placeholder='Your name'
      />

      <Input
        placeholder='Your E-mail'
        leftIcon={{ type: 'font-awesome', name: 'chevron-right' }}
      />



<Button
  title="Suscribirme"
/>
      </ScrollView>
    );
  }
}

function sendEmail() {

  // let transporter = nodemailer.createTransport({
  //   service: 'gmail',
  //   secure: false,
  //   port: 25,
  //   auth:{
  //     user: 'sotojc7@gmail.com',
  //     pass: 'jack99JC'
  //   },
  //   tls:{
  //       rejectUnauthorized: false
  //   }
  // });

  // let HelperOptions ={
  //   from : '"Jean Soto" <sotojc7@gmail.com',
  //   to: 'jcpicaflor@gmail.com',
  //   subject: "Hello world",
  //   text: "Si funciona"
  // };

  // transporter.sendMail(HelperOptions, (error, info) => {
  //   if(error){
  //     return console.log(error);
  //   }
  //   console.log("THE MESSAGE WAS SENT");
  //   console.log(info)
  // });
  
//   handleEmail = () => {
//     const to = ['jeancasoto@unitec.edu'] // string or array of email addresses
//     email(to, {
     
//         subject: 'Show how to use',
//         body: 'Some body right here'
//     }).catch(console.error)
// }
  alert("email sent")
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
