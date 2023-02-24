import { STATUS } from "constans/status.constans";

export const authInitState = {
    status: STATUS.idle,
    // data: null,
    values: null,
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};