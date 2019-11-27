
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
  Modal,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {
  SCLAlert,
  SCLAlertButton
} from 'react-native-scl-alert'


import LottieView from 'lottie-react-native';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      play: false,
      show: false,
      myIcon1 = <Icon name="comments" size={30} color="#900" />

    }

  }

  handleOpen = () => {
    this.setState({ show: true })
  }

  handleClose = () => {
    this.setState({ show: false })
  }



  open = () => {
    
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <SCLAlert
            theme="info"
            show={this.state.show}
            title="Lorem"
            subtitle="Lorem ipsum dolor"
          >
            <SCLAlertButton theme="info" onPress={this.handleClose}>Done</SCLAlertButton>
          </SCLAlert>
        </View>
      );
    
  }
 
   render() {
     return (
       <View style={{flex:1, justifyContent:'center'}}>
       <TouchableOpacity style={{width:'100%', height:'100%', alignSelf: 'center'}} onPress={()=> this.animation.play()}>
       <LottieView
         ref={animation => {
           this.animation = animation;
         }}
         source={require('./assets/animation/animationEye.json')}
         onAnimationFinish={this.handleOpen}
         loop={false}
       />

       
       </TouchableOpacity>

       <SCLAlert
          theme={this.state.myIcon1}
          show={this.state.show}
          title="Mensagem do Dia"
          subtitle="Parabeeeeeeens"
        >
          <SCLAlertButton theme="danger" onPress={this.handleClose}>Abrir Outro Biscoito</SCLAlertButton>
          <SCLAlertButton theme="default" onPress={this.handleClose}>Compartilhar</SCLAlertButton>

          </SCLAlert>
    </View>
       
     );

  }  
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
