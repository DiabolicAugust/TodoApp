import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default Styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    marginBottom: 15,
  },
  mainTheme: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Navbar: {
    height: 70,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#3949ab",
    paddingBottom: 10,
  },
  NavbarText: {
    color: "rgb(255, 255, 255)",
    fontSize: 20,
  },
  AddTodoBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  AddTodoInput: {
    width: "70%",
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "#3949ab",
    padding: 10,
  },
  Todo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 5,
    marginTop: 15,
  },
});
