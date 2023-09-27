import { admin_Data, admin_Token } from "../../constants/tokenData";
import { postDataAPI } from "../../utils/apiHelper"
import { setAdminData, setAdminToken } from "../Slices/adminSlice";
import { showSnackbar } from "../Slices/alertSlice";
import { clearLoad, setLoad } from "../Slices/loadingSlice";


export const adminLogin = (data, navigate) => async (dispatch) => {
    dispatch(setLoad());
    try {
        const res = await postDataAPI('users/login', data);
        console.log(res.data.data.data);
        const adminData = res.data.data.data;
        const adminToken = res.data.data.token;
        dispatch(setAdminData(adminData));
        dispatch(setAdminToken(adminToken));
        localStorage.setItem(admin_Token, adminToken);
        const adminDataJSON = JSON.stringify(adminData);
        localStorage.setItem(admin_Data, adminDataJSON);
        navigate("/admin/dashboard");
        dispatch(clearLoad());
        dispatch(showSnackbar({ open: true, message: res.data.message, severity: "success" }))
    } catch (err) {
        dispatch(clearLoad());
        dispatch(showSnackbar({ open: true, message: err.response.data.message, severity: "error" }))
    }
}