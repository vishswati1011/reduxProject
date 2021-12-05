import axios from "axios";
import { urlHelper } from "../helper/urlHelper";
import { loaderHelper } from "../helper/helperReducerMethods";

export const getTotalEmployee = () => {
    return async (dispatch) => {
      try {
        dispatch(loaderHelper(true));
        const { data } = await axios({
          method: "Get",
          url:  `${urlHelper}/user/totalContentInPipeline`,
        });
        if (data.success) {
          dispatch({
            type: "GET_EMPLOYEE_DATA",
            payload: data.result,
          });
          dispatch(loaderHelper(false));
        }
      } catch (err) {
        dispatch(loaderHelper(false));
        console.log("Error in get pipeline count ", err?.response);
      }
    };
  };