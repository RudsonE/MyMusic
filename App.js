import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useState } from 'react';
import SearchBar from './SearchBar';
import MusicView from './MusicView';


export default function App() {
  
  const [texted, setTexted] = useState('')
 // const [seted, setValue] = useState('')
  const [renderResults, setRenderResults] = useState([])

//pega as musicas e informacoes
  function getMusicInfo(music){
    setTexted(music)
    setRenderResults([])
    fetch(`https://itunes.apple.com/search?term=${music}&media=music`)
    .then((res) => res.json())
    .then((data) => {
      for(let key in data['results']){
        
        setRenderResults((actualRender) =>[ actualRender , <MusicView key={data['results'][key]['trackId']} imgUri='./128x128.png' artistName={data['results'][key]['artistName']} musicName={data['results'][key]['trackName']} albumName={data['results'][key]['collectionName']} imgUrl={data['results'][key]['artworkUrl100']}/>])
      }
    })
    .catch(e => console.error)
  }

  return (
    <View style={styles.container}>
      <SearchBar onPressed={() => getMusicInfo(texted)} onChangeText={(music) => getMusicInfo(music)}/>
      <ScrollView style={styles.cards}>{renderResults}</ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 100,
    flex: 1,
    height:'100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cards: {
      width: '100%',
      flexDirection: 'column',
      
      padding: 10
    }
});
