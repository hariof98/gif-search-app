import { View, StyleSheet } from "react-native";
import ErrorComponent from "../components/error-component/errorComponent";
import HomeComponent from "../components/home-component/homeComponent";
import SearchComponent from "../components/search-component/searchComponent";
import SearchResultsComponent from "../components/search-results-component/searchResultsComponent";

const ScreenOne = (props) => {
    const { route } = props;

    // keeping SearchComponent as common and rendering Home and SearchResults dynamically based on navigation path
    return (
        <View style={styles.container}>
            <SearchComponent />
            {route.params?.searchResult ? (
                route.params?.errorMessage === null ? (
                    <SearchResultsComponent />
                ) : (
                    <ErrorComponent msg={route.params?.errorMessage} />
                )
            ) : (
                <HomeComponent />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        flex: 1,
    },
});

export default ScreenOne;
