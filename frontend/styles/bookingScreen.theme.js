import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    width: "100%",
    height: "100%",
  },
  modalView: {
    margin: "10%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: "10%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    minHeight: 320,
    width: "85%",
    height: "50%",
  },
  input: {
    width: "100%",
    height: "40%",
    padding: 10,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
  button: {
    borderRadius: 20,
    padding: 5,
    elevation: 2,
    top: "-100%",
    left: "56%",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalGrid: {
    width: "100%",
  },
});
