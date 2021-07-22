import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import Styles from "../styles";

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue("");
    } else {
    }
  };

  return (
    <View style={Styles.AddTodoBlock}>
      <TextInput
        style={Styles.AddTodoInput}
        onChangeText={setValue}
        value={value}
        placeholder="Введите название дела..."
      />
      <Button title="Добавить" onPress={pressHandler} />
    </View>
  );
};
