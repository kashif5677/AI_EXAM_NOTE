
import axios from "axios"
import { setUserData } from "../redux/userSlice"

export const getCurrentUser = async (dispatch) => {
    try {
        const result = await axios.get("/api/user/currentuser", {
            withCredentials: true
        })
        console.log(result.data);
        dispatch(setUserData(result.data))
    } catch (error) {
        console.error(error.response?.status);
        console.error(error.response?.data);
        console.error(error.message);
    }
}