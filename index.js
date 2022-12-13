import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import Flip from "./FlipRecursive";

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
      {array.arr.map((item,index) => {
        return <Flip target={item} test={true} key={index} />;
      })}
    </View>
  );
}

const Style = StyleSheet.create({
  viewStyle: { flexDirection: "row" },
});