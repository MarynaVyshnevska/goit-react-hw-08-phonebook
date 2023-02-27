import { Card, CardActions, CardContent, Container, Typography } from "@mui/material";
import { HeaderButton } from "components/Layout/Navigation/Navigation.styled";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectAuthToken } from "redux/auth/auth.selector";
  
const HomePage = () => {
    const navigate = useNavigate();
    const token = useSelector(selectAuthToken);
    return (
        <>
            <Container
                sx={{
                    m: '60px auto',
                    
                    
                }}>
                <Card sx={{m: '0 auto', width: '80%', maxWidth: '600px',}}>
                    <CardContent>
                        <Typography variant='h6' align='center' sx={{color: '#b73c58'}}>
                            For those who lose their gadgets, the necessary contacts are always at hand
                        </Typography>
                        <Typography variant="body2" sx={{mt: '24px'}}>
                            This app was created as a final assignment for a react/redux course.
                        </Typography>
                        <Typography variant="body2" sx={{mb: '24px'}}>
                            Created with the following technologies: React, Redux Toolkit, Redux Persist,
                            Material UI, Formik and other
                        </Typography>
                        <Typography variant='h6' align='center' sx={{color: '#b73c58'}}>
                            Register or log in and search for the contacts of loved ones you need
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <HeaderButton
                            type='button'
                            sx={{color: '#fbe5eb', m: '0 auto'}}
                            onClick={() => token ? navigate('/contacts') : navigate('/login')}
                        >
                            Use your Phonebook
                        </HeaderButton>
                    </CardActions>
                </Card>
            </Container>
        </>
    )
}

export default HomePage;