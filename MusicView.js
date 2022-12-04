import {Text, Image, View, StyleSheet} from 'react-native';


//Todo: Add track player on card


export default function MusicView(props) {
   
    
    return(
        <View style={styles.cardView}>
            <Image source={{uri : props.imgUrl}} onError={() => alert('error')} style={styles.musicInfos.coverImage}></Image>
            <View style={styles.infos}>
            <Text style={styles.musicInfos.title} numberOfLines={1} ellipsizeMode={'tail'}>{props.musicName}</Text>
            <Text style={styles.musicInfos.artist} numberOfLines={1} ellipsizeMode={'tail'}>{props.artistName}</Text>
            <Text style={styles.musicInfos.album} numberOfLines={1} ellipsizeMode={'tail'}>{props.albumName}</Text>
        
            </View>
            
        </View>
    )

}

const styles = StyleSheet.create({
    cardView: {

        alignItems: 'center',
        flexDirection: 'row',
        
        backgroundColor: 'white',
        borderRadius: 10,
        width: 'auto',
        margin: 10,
        elevation: 3,
        padding: 10,
    },
    infos:{
        flex: 1,
        flexDirection: 'column',
        width: 'auto',
        padding: 10,
        
    },


    musicInfos:{
        title:{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
            
            
        },
        artist:{
            fontSize: 15,
            fontWeight: 'bold',
            color: '#A8AAAE',
        },
        album:{
            fontSize: 10,
            fontStyle: 'italic',
            fontWeight: 'bold',
            color: '#A8AAAE'
        },
        coverImage:{
            width: 100,
            height: 100,
            borderRadius: 10,
            borderColor: '#A8AAAE',
            borderWidth: 0.5,
        
        }
    }
})