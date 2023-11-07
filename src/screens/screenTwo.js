import { View, ScrollView, StyleSheet } from "react-native";
import CommonGifLayout from "../layouts/commonGifLayout.js";

const ScreenTwo = (props) => {
    const { route } = props;
    const finalData = route.params.gifDetails;

    const clickedGifLayout = (
        <View style={styles.container}>
            <ScrollView>
                <CommonGifLayout allData={finalData} />
            </ScrollView>
        </View>
    );

    return clickedGifLayout;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
});

export default ScreenTwo;
