import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export default function SearchBar(props) {
    return(
        <View style={styles.container} >
            <TouchableOpacity style={styles.searchIcon} onPress={props.onPressed}><Icon name="search" color={'#fff'} size={20} /></TouchableOpacity>
            <TextInput placeholder='Nome da música...'style={styles.input} selectionColor='black' onChangeText={props.onChangeText}/>
            
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flexDirection: 'row',
        alignItems: 'center',
        width: 'auto',
        
    },
    input: {
        color:'#727272',
        backgroundColor: "white",
        width: '100%',
        height: 40,
        borderRadius: 100,
        borderWidth: 0.5,
        borderColor: '#d6d6d6',
        paddingRight: 60,
        paddingLeft: 30,
        
        
    },
   
    searchIcon:{
        zIndex: 10,
        position: 'absolute',
        right: 0,
        height: 40,
        width: 45,
        padding: 10,
        backgroundColor: '#A8AAAE',
        borderBottomRightRadius:100,
        borderTopRightRadius:100,
       
    }
})