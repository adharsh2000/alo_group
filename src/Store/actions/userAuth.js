import { user_Token } from "../../constants/tokenData";
import { postDataAPI } from "../../utils/apiHelper";
import { showSnackbar } from "../Slices/alertSlice";
import { clearLoad, setLoad } from "../Slices/loadingSlice";
import { setUserData, setUserToken } from "../Slices/userSlice";


export const userLogin = (data,navigate) => async (dispatch) => {
    dispatch(setLoad());
    try {
        const res = await postDataAPI('users/token', data);
        console.log(res.data.data.data);
        const userData = res.data.data.data;
        const userToken = res.data.data.token;
        dispatch(setUserData(userData));
        dispatch(setUserToken(userToken));
        localStorage.setItem(user_Token, userToken);
        navigate("/")
        dispatch(clearLoad());
        dispatch(showSnackbar({ open: true, message: res.data.message, severity: "success" }))
    } catch (err) {
        dispatch(clearLoad());
        dispatch(showSnackbar({ open: true, message: err.response.data.message, severity: "error" }))
    }
}