import { StyleSheet, Dimensions } from "react-native";

export const { width, height } = Dimensions.get("window");

// constant to hold the minimum window width to be considered a small phone
export const smallPhoneWidth = 768;

export default StyleSheet.create({
  grid: {
    padding: "5%",
    paddingLeft: "10%",
  },
  row: {
    top: "10%",
  },
  alignCenter: {
    flex: 1,
    alignItems: "center",
  },
  images: {
    width: "100%",
    height: "100%",
  },
  reserverBtn: {
    backgroundColor: "#32CD32",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
  offer: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: "30%",
    height: "50%",
    backgroundColor: "orange",
    borderRadius: 50,
    top: "-120%",
    left: "-50%",
  },
  noOffer: {
    borderWidth: 1,
    borderColor: "#00000000",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    backgroundColor: "#00000000",
    borderRadius: 50,
    top: "-120%",
    left: "-50%",
  },
  crossedOutPrice: {
    textDecorationLine: "line-through"
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  sameLine: {
    flexDirection: "row",
  },
});
