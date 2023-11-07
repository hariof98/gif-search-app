import { useState, useEffect } from "react";
import { GIPHY_SEARCH_API, API_KEY } from "../constants.js";

const useSearch = ({ searchQuery }) => {
    const [searchData, setSearchData] = useState([]);
    let timer;

    useEffect(() => {
        // querying results from two characters
        if (searchQuery === "" || searchQuery.length < 2) {
            setSearchData([]);
            return;
        }

        /* Throttling */
        if (timer) {
            clearTimeout(timer); // clear the previous timer
        }

        timer = setTimeout(() => {
            fetchSearchedGif(searchQuery); // pass searchQuery to the function
        }, 300);

        // clearing the timer when the component unmounts or when searchQuery changes again
        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
        /* Throttling */

        //fetchSearchedGif(searchQuery);
    }, [searchQuery]);

    const fetchSearchedGif = async (query) => {
        const key = API_KEY + `&q=${query}`;

        try {
            const apiRequest = await fetch(GIPHY_SEARCH_API + key);

            if (!apiRequest.ok) {
                throw new Error("Error while using Search API!");
            }

            const apiResponse = await apiRequest.json();
            setSearchData(apiResponse.data);
        } catch (err) {
            const error = [{ status: false, msg: err.message }];
            setSearchData(error);
            return error;
        }
    };

    return searchData;
};

export default useSearch;
