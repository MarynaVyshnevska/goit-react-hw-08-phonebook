import ContactCreate from "components/ContactCreate";
import ContactList from "components/ContactList";
import Filter from "components/ContactList/Filter";
import Header from "components/Header";
import Section from "components/Section";

const ContactsPage = () => {
    return(
        <>
            <Header title="Phonebook"/>
            <ContactCreate/>
            <Section title="Contacts">
                <Filter/>
                    
                <ContactList/>
            </Section>

        </>
    )    
}

export default ContactsPage;