import React, { useState } from "react";

import { StatusBar } from "expo-status-bar";
import { Text, View, Button, TouchableOpacity, Dimensions } from "react-native";
import { calculator, initialState, executeCalculator } from "./data/calculator";

export default function App() {
  const [state, setstate] = useState(initialState);

  const handleClick = (value, type) => () => {
    setstate(executeCalculator(type, value, state));
  };

  return (
    <View className="w-full h-full flex justify-between">
      <StatusBar style="auto" />
      <View className="flex-grow flex justify-end items-end p-5">
        <Text className="text-slate-900 text-6xl">{state.currentValue}</Text>
      </View>
      <View className="flex pb-10 flex-row flex-wrap">
        {calculator.map((a, i) => (
          <TouchableOpacity
            className={`${
              a.short ? "w-1/4" : "w-1/2"
            } border-slate-100 border-1 border p-5 items-center bg-${a.color} `}
            onPress={handleClick(a.value, a.type)}
            key={i}
          >
            <Text className={`text-3xl text-${a.textColor} `}>{a.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
