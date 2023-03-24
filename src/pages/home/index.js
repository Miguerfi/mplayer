import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import Playlist from "../../components/playlist";
import style from "./style";
export default function Home({ navigation }) {
  return (
    <View style={style.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={style.textHeader}>Olá, Miguer</Text>
        <View style={style.contentContainer}>
          <Playlist />
        </View>
      </ScrollView>
    </View>
  );
}
