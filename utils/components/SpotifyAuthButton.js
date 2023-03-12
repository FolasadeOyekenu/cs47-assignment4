import { Pressable, Text, StyleSheet, Image, Dimensions } from "react-native";
import { Themes } from "../../assets/Themes";
import { Images } from "../../assets/Themes";
const SpotifyAuthButton = ({authentificationButton}) => {
    return (
        <Pressable style={styles.authButton} onPress={authentificationButton}>
            <Image style={styles.img} source={Images.spotify}/>
          <Text style={styles.authText}> Connect with Spotify</Text>
        </Pressable>
      );
    };

const styles = StyleSheet.create({
    authButton: {
        backgroundColor: Themes.colors.spotify,
        padding: 12,
        borderRadius: 999999,
        flexDirection: "row",
        alignItems: "center",

    },
    authText: {
        color: "white",
    },
    img: {
        width: Dimensions.get("window").width * .1,
        height: Dimensions.get("window").width * .1,
    },
    });
export default SpotifyAuthButton;