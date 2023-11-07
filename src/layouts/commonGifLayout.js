/* this layout screen acts as common layout for displaying random gif and selected gif */

import { View, Text, StyleSheet, Image } from "react-native";

const CommonGifLayout = ({ allData }) => {
    return (
        <View style={gifStyles.gifContainer} key={allData.id}>
            <Image style={{ width: "auto", height: 400, marginTop: 10 }} source={{ uri: allData.images?.preview_gif?.url }} />

            <View style={gifStyles.gifDescription}>
                <View style={{ width: 200 }}>
                    <Text style={gifStyles.gifTitle}>{allData?.title ? allData?.title : "Dummy Title"}</Text>
                    <Text style={gifStyles.gifUrl}>{allData?.bitly_url}</Text>
                </View>

                <View style={gifStyles.gifRating}>
                    <Text style={gifStyles.gifRatingText}>{allData?.rating}</Text>
                </View>
            </View>
        </View>
    );
};

const gifStyles = StyleSheet.create({
    gifContainer: {
        gap: 10,
        width: "auto",
    },

    gifTitle: {
        fontSize: 16,
    },

    gifUrl: {
        marginTop: 6,
        fontSize: 16,
    },

    gifDescription: {
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
    },

    gifRating: {
        backgroundColor: "#565656",
        borderRadius: 100,
        width: 60,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
    },

    gifRatingText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#FFFFFF",
    },
});

export default CommonGifLayout;
