import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Styles from "./styles";
import { Navbar } from "./src/Navbar";
import { AddTodo } from "./src/AddTodo";
import { Todo } from "./src/Todo";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    //   const newTodo = {
    //     id: Date.now().toString(),
    //     title: title
    //   }

    // setTodos((prevTodos)=>{
    //   return[
    //     ...prevTodos,
    //     newTodo
    //   ]
    // })

    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title: title,
      },
    ]);
  };

  return (
    <View>
      <Navbar title="TodoApp" />
      <View style={Styles.container}>
        <AddTodo onSubmit={addTodo} />
        <View>
          {todos.map((todo) => (
            <Todo todo={todo} key={todo.id} />
          ))}
        </View>
      </View>
    </View>
  );
}
