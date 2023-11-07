import React, { Children, lazy, Suspense, useState, useContext } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ApiContextData from "../utils/contexts/ApiContextData.js";
import ScreenOne from "./screens/screenOne.js";
import ScreenTwo from "./screens/screenTwo.js";

const Stack = createNativeStackNavigator();

const App = () => {
    const { gifSearchData } = useContext(ApiContextData);

    const [searchResults, setSearchResults] = useState(gifSearchData);

    const AppLayout = (
        <ApiContextData.Provider value={{ gifSearchData: searchResults, setSearchResults }}>
            <SafeAreaProvider style={styles.container}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="ScreenOne">
                        <Stack.Screen name="ScreenOne" component={ScreenOne} options={{ headerShown: false }} />

                        <Stack.Screen
                            name="ScreenTwo"
                            component={ScreenTwo}
                            options={({ route }) => ({
                                headerShown: true,
                                headerTitle: route.params.gifDetails.title ? route.params.gifDetails.title : "Dummy Title",
                                headerStyle: {
                                    headerTitleAlign: "center",
                                    borderBottomWidth: 0,
                                    whiteSpace: "normal",
                                },
                            })}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        </ApiContextData.Provider>
    );

    return AppLayout;
};

const styles = StyleSheet.create({
    container: {
        margin: 12,
        padding: 10,
    },
});

export default App;
