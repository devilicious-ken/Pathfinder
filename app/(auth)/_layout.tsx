import { Stack } from "expo-router";
import React from 'react';


const Layout = ()  => {

  return (

      <Stack>
        <Stack.Screen name="onboarding" options={{ headerShown: false }} />
        <Stack.Screen name="(user)" options={{ headerShown: false }} />
        <Stack.Screen name="(company)" options={{ headerShown: false }} />
      </Stack>

  );
}
 

export default Layout;