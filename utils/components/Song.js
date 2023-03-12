import { SafeAreaView, Image, Text, StyleSheet, Dimensions } from "react-native";
import { Themes } from "../../assets/Themes";
import { millisToMinutesAndSeconds } from "../../utils"
const Song = ({index, songTitle, albumName, songArtists, imageUrl, duration}) => {
    let start = index + 1
    return (
    <SafeAreaView style={styles.container}>
        <SafeAreaView style={styles.start}>
            <Text style={styles.text}>{start}</Text>
        </SafeAreaView>
        <SafeAreaView styles={styles.imageBox}>
            <Image style={styles.image} source={{uri:imageUrl}}/>
        </SafeAreaView>
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
