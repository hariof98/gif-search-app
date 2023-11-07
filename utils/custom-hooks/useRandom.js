import { useState, useEffect } from "react";
import { GIPHY_RANDOM_API, API_KEY } from "../constants.js";

const useRandom = () => {
    const [randomdata, setRandomdata] = useState({});

    useEffect(() => {
        let refreshInterval;
        const refreshIntervalTime = 10000;

        fetchRandomGif().then((data) => {
            const { status } = data;

            if (status) {
                refreshInterval = setInterval(() => {
                    fetchRandomGif();
                }, refreshIntervalTime);
            }
        });

        return () => {
            clearInterval(refreshInterval);
        };
    }, []);

    const fetchRandomGif = async () => {
        try {
            const apiRequest = await fetch(GIPHY_RANDOM_API + API_KEY);

            if (!apiRequest.ok) {
                throw new Error("Error while using Random API!");
            }

            const apiResponse = await apiRequest.json();
            setRandomdata(apiResponse.data);
            return { status: true };
        } catch (err) {
            //console.error(err);
            setRandomdata({ status: false, errorMessage: err.message });
            return { status: false };
        }
    };

    return randomdata;
};

export default useRandom;
