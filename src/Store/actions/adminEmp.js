import { postDataAPI } from "../../utils/apiHelper";
import { showSnackbar } from "../Slices/alertSlice";


export const adminAddEmp = (data, navigate) => async (dispatch) => {
    try {
        console.log("calling");
        console.log(data);
        const res = await postDataAPI('users/create', data);
        console.log(res,"res");
        dispatch(showSnackbar({ message: res.data.message, severity: "success" }))
        // return res;
    } catch (err) {
        console.log(err);
        dispatch(showSnackbar({ message: err.response.data.message, severity: "error" }))
    }
}