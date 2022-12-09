import { View, Text } from "react-native";
import { useEffect } from "react";

export default function Settings() {
    useEffect(() => {
        console.log('settings')
    }, [])

    return (
      <View>
        <Text>Settings</Text>
      </View>
    );
  }