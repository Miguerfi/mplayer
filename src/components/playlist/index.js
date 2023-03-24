import { View, FlatList, TouchableOpacity, Text, Image } from "react-native";
import React, { useState } from "react";
import listStyle from "./style";
export default function Playlist() {
  const [numPlaylist, setNumPlaylist] = useState(0);
  const plusicon = require("../../../assets/plusiconalt.png");
  const renderPlaylist = ({ item, index }) => (
    <View>
      <TouchableOpacity style={listStyle.container}>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );

  const data = Array.from({ length: numPlaylist }, (_, index) => ({
    id: index,
    title: `Playlist ${index + 1}`,
  }));
  return (
    <View>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderPlaylist}
        keyExtractor={(item) => item.id.toString()}
      />
      <TouchableOpacity onPress={() => setNumPlaylist((numPlaylist + 1))}>
        <Image source={plusicon} style={listStyle.plusicon} />
      </TouchableOpacity>
    </View>
  );
}
