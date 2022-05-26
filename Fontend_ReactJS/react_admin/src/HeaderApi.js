import Axios from "axios";

export const axios = Axios.create({
    baseURL: "",
    //baseURL: "https://nws-management.herokuapp.com/",
    // headers: { Auth: "Simple AUTH" },
    timeout: 3000,
});