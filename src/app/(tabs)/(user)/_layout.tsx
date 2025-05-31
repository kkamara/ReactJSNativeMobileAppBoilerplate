import React from 'react';
import { Tabs, } from "expo-router";
import HelloFromServerProvider from '@/providers/HelloFromServerProvider';

export default function ExampleLayout() {
  return <HelloFromServerProvider>
    <Tabs screenOptions={{ tabBarStyle: { display: 'none', }, }}>
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
    </Tabs>
  </HelloFromServerProvider>;
}