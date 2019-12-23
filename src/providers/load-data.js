import axios from "axios";
import Promise from "promise";

export const getData = (url = null) => {
    return new Promise((resolve, reject) => {
        axios.get(url).then(function(response) {
            resolve(response.data);
        }).catch(function(error) {
            reject(error);
        });
    });
};
