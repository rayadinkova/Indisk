import { StyleSheet } from "react-native";

const sections = StyleSheet.create({
  menusection: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 5,
  },
  mealsection: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
    marginRight: 10,
  },
  mealssectionimages: {
    width: 90,
    height: 90,
  },
  mealssectiontext: {
    color: "#24372B",
    flexDirection: "row",
    marginTop: 5,
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 33,
  },
  dishscrollcontainer: {
    flexDirection: "row",
    marginTop: 14,
    rowGap: 10,
    marginTop: 25,
    backgroundColor: "#24372B",
    height: 310,
  },
  populardishessectionspacing: {
    flex: 1,
    marginTop: 35,
    marginBottom: -15,
  },
  popularimagesscroll: {
    flexDirection: "row",
    marginTop: 25,
  },
  populardishesimages: {
    width: 250,
    height: 150,
    borderRadius: 4,
    marginLeft: 8,
  },
  butterchickentext: {
    zIndex: 3,
    position: "absolute",
    marginLeft: 8,
    marginTop: 190,
  },
  chickentikkatext: {
    position: "absolute",
    marginTop: 190,
    marginLeft: "26%",
  },
  thairedtext: {
    position: "absolute",
    marginTop: 190,
    marginLeft: "51%",
  },
  tofuspinachtext: {
    position: "absolute",
    marginTop: 190,
    marginLeft: "76%",
  },
  pricetag: {
    flexDirection: "row",
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
  },
  indiskplateimage: {
    marginTop: 10,
    width: 360,
    height: 200,
    marginLeft: 8,
    marginRight: 8,
    borderRadius: 4,
  },
  indiskplatetext: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "19.5%",
    marginTop: "-20%",
  },
  indiskplatepromotext: {
    flexDirection: "column",
    alignItems: "center",
  },
  dessertsectiontext: {
    marginLeft: 8,
    marginTop: "-40%",
  },
  reservationsimage: {
    marginTop: 10,
    width: 360,
    height: 200,
    marginLeft: 8,
    marginRight: 8,
    borderRadius: 4,
  },
  reservationssection: {
    flexDirection: "row",
    alignItems: "center",
  },
  shadowProps: {
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  menufilterrow1: {
    flexDirection: "row",
    marginLeft: 8,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  menufilterrow2: {
    flexDirection: "row",
    marginLeft: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  menusectionview_row1: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  menusectionview_row2: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 35,
  },
  menuimages: {
    width: 174,
    height: 130,
    borderRadius: 4,
  },
  menupricetag: {
    width: 55,
    height: 30,
    backgroundColor: "#ADCCB9",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  menurating: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
  },
  mangobowlimageitem: {
    width: 355,
    height: 280,
    borderRadius: 55,
  },
  itemrating: {
    flexDirection: "row",
    marginLeft: 8,
  },
});

export default sections;
