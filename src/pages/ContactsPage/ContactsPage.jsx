import ContactCreate from "components/ContactCreate";
import ContactList from "components/ContactList";
import Filter from "components/ContactList/Filter";
// import Header from "components/Header";
import { Container } from "@mui/material";

const ContactsPage = () => {
    return(
        <>
            <Container
                sx={{
                    mt: '24px'
                }}
            >
                <ContactCreate/>
            
                <Filter/>
                    
                <ContactList/>
            </Container>
            
            

        </>
    )    
}

export default ContactsPage;