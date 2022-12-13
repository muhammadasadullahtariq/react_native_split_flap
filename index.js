import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import Flip from "./FlipReursion";

export default function screen(props) {
  const [array, setArray] = useState({ arr: [] });
  useEffect(() => {
    let ar = props.children.toUpperCase();

    ar = Array.from(ar);
    setArray(() => {
      return { arr: ar };
    });
  }, []);
  return (
    <View style={Style.viewStyle}>
      {array.arr.map((item) => {
        return <Flip target={item} />;
      })}
    </View>
  );
}

const Style = StyleSheet.create({
  viewStyle: { flexDirection: "row" },
});