import { STATUS } from "constans/status.constans";

export const contactsInitState = {
    items: [],
    isLoading: false,
    error: null,
    status: STATUS.idle,
}