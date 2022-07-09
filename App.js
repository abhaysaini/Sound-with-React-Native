import React from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import Sound from "react-native-sound";

const soundList =[
  // require('./assets/Spaceship.mp3'),
  require('./assets/one.wav'),
  require('./assets/two.wav'),
  require('./assets/three.wav'),
  require('./assets/four.wav'),
  require('./assets/five.wav'),
  require('./assets/six.wav'),
  require('./assets/seven.wav'),
  require('./assets/eight.wav'),
  require('./assets/nine.wav'),
  require('./assets/ten.wav'),
];

const App = ()=>{


  const playSound=(sound)=>{
    const SoundVar = new Sound(sound,Sound.MAIN_BUNDLE,(error)=>{
      if(error){
          console.log("Not Able to Play");
      }
    });
    setTimeout(() => {
      SoundVar.play();
    },200);
    SoundVar.release();
  }
    return(
      <ScrollView style={styles.container}>
        <Image style={styles.logo} source={require('./assets/logo.png')}/>
        <View style={styles.gridContainer}>
          {soundList.map((sound)=>(
            <TouchableOpacity key={sound} style={styles.box} onPress={()=>{playSound(sound)}}>
              <Text style={styles.text}>
                {sound}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    );
}

export default App;

const styles=StyleSheet.create({
  container:{
    flex:1,
  },
  logo:{
    alignSelf:'center',
    marginTop:15,
  },
  gridContainer:{
    flex:1,
    flexDirection:'row',
    margin:5,
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "space-around",
  },
  box:{
    height:100,
    width:"46%",
    backgroundColor:"#0f4c75",
    marginVertical:8,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,

    shadowColor:"#393e46",
    elevation:5,
  },
  text:{
    fontSize:30,
    color:"#ff4301"
  },
});