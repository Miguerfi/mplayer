import { Dimensions, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Constants from "expo-constants";
const style = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    height: Dimensions.get("screen").height,
    backgroundColor: "#7149C6",
  },
  textHeader: {
    marginTop: (Dimensions.get("screen").height / 2) * 0.2,
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: RFValue(30),
    color: "black",
  },
  contentContainer: {
    marginTop: (Dimensions.get("screen").height / 2) * 0.29,
    backgroundColor: "#FC2947",
    borderTopColor: "black",
    borderRadius: 30,
    borderTopWidth: 10,
    height: Dimensions.get("screen").height,
  },
});

export default style;
