import { STATUS } from "constans/status.constans";

export const authInitState = {
    status: STATUS.idle,
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};