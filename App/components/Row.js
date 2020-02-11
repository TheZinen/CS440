import React from "react";
import { View } from "react-native";

// Function that fixes the rows for our numbers
export default ({ children }) => (
    <View style={{ flexDirection: "row" }}>{children}</View>
);