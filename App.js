import { StyleSheet, SafeAreaView, Text, Dimensions, Image } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import SpotifyAuthButton from "./utils/components/SpotifyAuthButton";
import SongList from "./utils/components/SongList";
import { Images } from "./assets/Themes";
export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();
  let contentDisplayed = null;
  if (token){
    contentDisplayed = 
    <SafeAreaView>
      <SafeAreaView style={styles.header}>
        <Image source={Images.spotify} style={styles.image}/>
        <Text style={styles.text}> My Top Tracks </Text>
      </SafeAreaView>
      <SongList tracks={tracks}/>
      </SafeAreaView>
  } else {
    contentDisplayed = <SpotifyAuthButton authentificationButton={getSpotifyAuth}/>
  }
  return (
    <SafeAreaView style={styles.container}>
      {contentDisplayed}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  authButton: {
    backgroundColor: Themes.colors.spotify,
    padding: 12,
    borderRadius: 999999,
  },
  authText: {
    color: "white",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: Themes.colors.white,
  },
  image: {
    width: Dimensions.get("window").width * .1,
    height: Dimensions.get("window").width * .1,
  },
});
