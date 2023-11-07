import { View, Text, StyleSheet, Image, ScrollView, Pressable } from "react-native";
import { MultipleSkeletonLoaderComponents } from "../skeleton-loader-component/skeletonLoaderComponent";
import ApiContextData from "../../../utils/contexts/ApiContextData";
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";

const SearchResultsComponent = () => {
    const { gifSearchData } = useContext(ApiContextData);

    const navigation = useNavigation();

    const resultsLayout = (
        <ScrollView>
            <View style={styles.resultContainer}>
                <Text style={styles.title}>Search Results: </Text>

                <View style={styles.container}>
                    {gifSearchData.length === 0 ? (
                        <MultipleSkeletonLoaderComponents />
                    ) : (
                        gifSearchData.map((data, index) => {
                            return (
                                <View key={data.id ? data.id : index}>
                                    <Pressable
                                        onPress={() =>
                                            navigation.navigate("ScreenTwo", {
                                                gifDetails: data,
                                            })
                                        }>
                                        <Image style={{ width: 100, height: 100 }} source={{ uri: data.images?.downsized_still?.url }} />
                                    </Pressable>
                                </View>
                            );
                        })
                    )}
                </View>
            </View>
        </ScrollView>
    );

    return resultsLayout;
};

const styles = StyleSheet.create({
    resultContainer: {
        backgroundColor: "#FFFFFF",
    },

    container: {
        backgroundColor: "#FFFFFF",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        rowGap: 10,
        flexWrap: "wrap",
        marginTop: 10,
    },

    title: {
        fontSize: 16,
        backgroundColor: "#FFFFFF",
    },
});

export default SearchResultsComponent;
