import { View, Text } from "react-native";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        console.log('Home')
    }, [])

    return (
      <View>
        <Text>Home</Text>
      </View>
    );
  }