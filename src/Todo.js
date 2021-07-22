import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Styles from "../styles";

export const Todo = ({ todo }) => {
  return (
    <View style={Styles.Todo}>
      <Text>{todo.title}</Text>
    </View>
  );
};
