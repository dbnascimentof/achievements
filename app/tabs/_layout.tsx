import { Tabs } from "expo-router";

export default function RootLayout() {
    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen name="Home" options={{ title: 'Home' }} />
            <Tabs.Screen name="About" options={{ title: 'About' }} />
        </Tabs>
    )
}