import { View, StyleSheet, ScrollView } from "react-native";

export const SingleSkeletonLoaderComponent = () => {
    const skeletonLayout = <View style={styles.card}></View>;

    return skeletonLayout;
};

export const MultipleSkeletonLoaderComponents = () => {
    const loaderCount = 18;
    const placeholder = [];

    for (let i = 0; i <= loaderCount; i++) {
        placeholder.push(<View key={i} style={styles.miniCard}></View>);
    }

    const multiSkeletonLayout = (
        <ScrollView>
            <View style={styles.container}>{placeholder}</View>
        </ScrollView>
    );

    return multiSkeletonLayout;
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#e7e7e7",
        width: "auto",
        height: 400,
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

    miniCard: {
        backgroundColor: "#e7e7e7",
        width: 100,
        height: 100,
    },
});
