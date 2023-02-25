import { AppBar, Button, IconButton, styled } from "@mui/material";

export const HeaderAppBar = styled(AppBar)({
    background: '#b73c58',
});

export const HeaderButton = styled(Button)({
    background: '#b73c58',
    borderColor: '#fbe5eb',
    '&:hover':{
        background: '#fbe5eb',
        borderColor: '#b73c58',
        color: '#b73c58',
        fontWeight: 700,
    },
    '&:focus':{
        background: '#fbe5eb',
        borderColor: '#b73c58',
        color: '#b73c58',
        fontWeight: 700,
    },
})

export const HeaderIconButton = styled(IconButton)({
    '&:hover':{
        background: '#fbe5eb',
        color: '#b73c58',
        fontWeight: 700,
    },
    '&:focus':{
        background: '#fbe5eb',
        color: '#b73c58',
        fontWeight: 700,
    },
})