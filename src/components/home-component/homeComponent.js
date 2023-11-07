import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SingleSkeletonLoaderComponent } from "../skeleton-loader-component/skeletonLoaderComponent";
import useRandom from "../../../utils/custom-hooks/useRandom.js";
import CommonGifLayout from "../../layouts/commonGifLayout.js";
import ErrorComponent from "../error-component/errorComponent.js";

const HomeComponent = () => {
    const giphyApiData = useRandom();

    //console.log(giphyApiData);

    const homeLayout = (
        <View style={styles.container}>
            {Object.keys(giphyApiData).length === 0 ? (
                <SingleSkeletonLoaderComponent />
            ) : giphyApiData.status === false ? (
                <ErrorComponent msg={giphyApiData.errorMessage} />
            ) : (
                <ScrollView>
                    <Text style={styles.gifTitle}>Randomly Selected GIF:</Text>

                    <CommonGifLayout allData={giphyApiData} />
                </ScrollView>
            )}
        </View>
    );

    return homeLayout;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },

    gifTitle: {
        fontSize: 16,
    },
});

export default HomeComponent;
