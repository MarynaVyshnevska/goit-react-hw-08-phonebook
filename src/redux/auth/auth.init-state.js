import { STATUS } from "constans/status.constans";

export const authInitState = {
    status: STATUS.idle,
    user: null,
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};