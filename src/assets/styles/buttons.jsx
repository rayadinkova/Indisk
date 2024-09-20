import { StyleSheet } from "react-native";

const buttons = StyleSheet.create({
  viewmore: {
    flexDirection: "row",
    alignItems: "center",
  },
  seemore: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginLeft: 45,
  },
  seemenu: {
    width: 100,
    height: 27,
    backgroundColor: "#24372B",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  viewmorearrow: {
    color: "#24372B",
    fontSize: 12,
  },
  seemorearrow: {
    color: "#EBF2EE",
    fontSize: 20,
  },
});

export default buttons;
