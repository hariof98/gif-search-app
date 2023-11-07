import { View, Text, StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { useState, useContext, useEffect, useRef } from "react";
import useSearch from "../../../utils/custom-hooks/useSearch.js";
import ApiContextData from "../../../utils/contexts/ApiContextData.js";

const SearchComponent = () => {
    const navigation = useNavigation();

    const [searchText, setSearchText] = useState("");
    const [cancel, setCancel] = useState(false);

    const { gifSearchData, setSearchResults } = useContext(ApiContextData);

    // custom hook to fetch data on search
    const response = useSearch({
        searchQuery: searchText,
    });

    useEffect(() => {
        setSearchResults(response);
    }, [response]);

    const clearFunction = () => {
        setSearchText("");
    };

    const searchLayout = (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <View style={styles.search}>
                    <View style={styles.searchIcon}>
                        <Icon name="search" size={20} color="#919090" />
                    </View>

                    <TextInput
                        style={styles.searchText}
                        placeholder="Search"
                        value={searchText}
                        onChangeText={(value) => {
                            setSearchText(value);
                        }}
                        onPressIn={() => {
                            setCancel(true),
                                navigation.navigate("ScreenOne", {
                                    searchResult: true,
                                    errorMessage: response[0]?.msg ? response[0]?.msg : null,
                                });
                        }}
                        // for testing on web.
                        onChange={() => {
                            setCancel(true),
                                navigation.navigate("ScreenOne", {
                                    searchResult: true,
                                    errorMessage: response[0]?.msg ? response[0]?.msg : null,
                                });
                        }}
                    />
                </View>

                {cancel && (
                    <View style={styles.closeIcon}>
                        <Icon name="close" size={20} color="#919090" onPress={() => clearFunction()} />
                    </View>
                )}
            </View>

            {cancel && (
                <Text
                    style={cancel ? styles.cancelBtn : null}
                    onPress={() => {
                        setCancel(false),
                            clearFunction(),
                            navigation.navigate("ScreenOne", {
                                searchResult: false,
                            });
                    }}>
                    Cancel
                </Text>
            )}
        </View>
    );

    return searchLayout;
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 20,
    },

    searchContainer: {
        marginTop: 30,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#e7e7e7",
        borderRadius: 10,
        marginBottom: 30,
    },

    searchText: {
        flex: 1,
        fontSize: 18,
        height: 50,
    },

    search: {
        flex: 1,
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
    },

    cancelBtn: {
        fontSize: 16,
        color: "#919090",
    },

    searchIcon: {
        paddingLeft: 10,
    },

    closeIcon: {
        paddingRight: 10,
    },
});

export default SearchComponent;
