import { SafeAreaView, Image, Text, StyleSheet, Dimensions, TouchableHighlight } from "react-native";
import { Themes } from "../../assets/Themes";
import { millisToMinutesAndSeconds } from "../../utils"
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Song = ({songTitle, albumName, songArtists, imageUrl, duration, previewUrl, externalUrl}) => {
    const navigation = useNavigation(); 
    return (
    <SafeAreaView style={styles.container}>
        <Ionicons name="play-circle-sharp" size={32} color="green" 
        onPress={() => navigation.navigate('DetailsScreen', { previewUrl })} />   
        <TouchableHighlight onPress={() => navigation.navigate('PreviewScreen', { externalUrl })}>
        <Image style={styles.image} source={{uri:imageUrl}}/>
        </TouchableHighlight>         
        <SafeAreaView style={styles.songTitle}>
            <Text style={styles.text}>{songTitle}</Text>
            <Text style={styles.text}>{songArtists[0].name}</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.albumName}>
            <Text style={styles.text}>{albumName}</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.duration}>
            <Text style={styles.text}> {millisToMinutesAndSeconds(duration)} </Text>
        </SafeAreaView>
    </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems:"flex-start",
        backgroundColor: Themes.colors.background,
    },
    text: {
      color: Themes.colors.white,
    },
    image: {
        width: Dimensions.get("window").width * .1,
        height: Dimensions.get("window").width * .1,
    },
    start:{
        width: Dimensions.get("window").width * .05,
    },
    songTitle: {
        width: Dimensions.get("window").width * .3,
    },
    albumName: {
        width: Dimensions.get("window").width * .3,
    },
    songArtists: {
        width: Dimensions.get("window").width * .1,
    },
    duration: {
        width: Dimensions.get("window").width * .1,
    }
  });

  export default Song;
