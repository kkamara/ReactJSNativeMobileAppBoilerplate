import React from 'react';
import { Tabs, } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function ExampleLayout() {
  return <Tabs screenOptions={{ tabBarStyle: { display: 'none', }, }}>
    <Tabs.Screen
      name="exampleScreen"
      options={{
        title: "Example",
        headerShown: false,
      }}
    />
    <Tabs.Screen
      name="exampleScreen2"
      options={{
        headerShown: false,
      }}
    />
  </Tabs>;
}