import { FlatList, View } from "react-native";
import  Song  from "./Song";
const SongList = ({tracks}) => {
    console.log(tracks);
    const renderSongItem = (item, index) => {
        return (
        <Song index = {index} 
            songTitle = {item.songTitle} 
            albumName = {item.albumName} 
            songArtists = {item.songArtists}
            imageUrl = {item.imageUrl}
            duration = {item.duration} 
            previewUrl = {item.previewUrl}
            externalUrl = {item.externalUrl}
            />
        )
    }
    return (
    <FlatList 
    data={tracks}
    renderItem={({item, index}) => renderSongItem(item, index)} 
    keyExtractor={(item) => item.id}
    ItemSeparatorComponent={() => <View style={{height: 20}} />}
    />
    );
};
export default SongList;