import { getDataAPI, postDataAPI } from "../../utils/apiHelper";
import { showSnackbar } from "../Slices/alertSlice";
import { getEmployees, updateEmployeeList } from "../Slices/employeeSlice";


export const adminAddEmp = (data, navigate) => async (dispatch) => {
    try {
        const res = await postDataAPI('users/create', data);
        dispatch(updateEmployeeList(res.data))
        dispatch(showSnackbar({ message: res.data.message, severity: "success" }))
    } catch (err) {
        console.log(err);
        dispatch(showSnackbar({ message: err.response.data.message, severity: "error" }))
    }
}

export const adminListEmp = () => async (dispatch) => {
    try {
        const res = await getDataAPI('users?role=employee');
        const employeeData = {
            data: res.data.data.data,
            totalCount: res.data.data.totalCount,
            fetchCount: res.data.data.fetchCount,
        };
        console.log(res.data.data.data);
        dispatch(getEmployees(employeeData));
        return employeeData;
    } catch (err) {
        console.log(err);
    }
}

export const ListProjects = () => async (dispatch) => {
    try {
        const res = await getDataAPI('project');
        console.log(res);
        // const employeeData = {
        //     data: res.data.data.data,
        //     totalCount: res.data.data.totalCount,
        //     fetchCount: res.data.data.fetchCount,
        // };
        // console.log(res.data.data.data);
        // dispatch(getEmployees(employeeData));
        // return employeeData;
    } catch (err) {
        console.log(err);
    }
}