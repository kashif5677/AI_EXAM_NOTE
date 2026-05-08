
import axios from "axios"

export const getCurrentUser = async () => {
    try {
        const result = await axios.get("/api/user/currentuser", {
            withCredentials: true
        })
        console.log(result.data);
        return result.data;
    } catch (error) {
        console.error(error.response?.status);
        console.error(error.response?.data);
        console.error(error.message);
    }
}