import { StyleSheet } from 'react-native'
import { WebView } from "react-native-webview"

export default function PreviewScreen ({route}) {
    const { externalUrl } = route.params;
    return (
        <WebView source={{uri: externalUrl}}/>
    );
}

const styles = StyleSheet.create({})
