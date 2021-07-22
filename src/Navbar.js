import React from "react";
import { View, Text } from "react-native";
import Styles from "../styles";

export const Navbar = (props) => {
  return (
    <View style={Styles.Navbar}>
      <Text style={Styles.NavbarText}>{props.title}</Text>
    </View>
  );
};
