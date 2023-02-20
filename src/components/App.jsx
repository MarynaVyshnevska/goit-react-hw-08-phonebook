import ContactCreate from './ContactCreate';
import ContactList from './ContactList';
import Section from './Section';
import Filter from './ContactList/Filter';
import Header from './Header';



export const App = () => {
  return (
    <>
      <Header title="Phonebook"/>
      <ContactCreate/>
      <Section title="Contacts">
        <Filter/>
            
        <ContactList/>
      </Section>
    </>
  );
};
