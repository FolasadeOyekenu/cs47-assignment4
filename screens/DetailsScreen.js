import { StyleSheet } from 'react-native'
import { WebView } from "react-native-webview"


export default function DetailsScreen ({route}) {
    const { previewUrl } = route.params;
    return (
        <WebView source={{uri: previewUrl}}/>
    );
}

const styles = StyleSheet.create({})
