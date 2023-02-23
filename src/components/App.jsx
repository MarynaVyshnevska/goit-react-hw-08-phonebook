import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactCreate from './ContactCreate';
import ContactList from './ContactList';
import Section from './Section';
import Filter from './ContactList/Filter';
import Header from './Header';
import HomePage from 'pages/HomePage/HomePage';
import { lazy, Suspense } from 'react';
import { Layout } from './Layout/Layout';
import Spinner from './Spinner/Spinner';
import { PublicRoute } from './AuthRoutes/PublicRoute';
import { PrivateRoute } from './AuthRoutes/PrivateRoute';
// import { JoinPage } from 'pages/JoinPage/JoinPage';
// import { LoginPage } from 'pages/LoginPage/LoginPage';
const JoinPage = lazy(() => import('../pages/JoinPage/JoinPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));




export const App = () => {
  return (
    <>
      <BrowserRouter basename='goit-react-hw-08-phonebook'>
        <Layout>
          <Suspense fallback={<Spinner />}>
            
            <Header title="Phonebook" />
            
            <Routes>
              <Route path='' element={<HomePage />} />

              <Route path='' element={<PublicRoute/>}>
                <Route path='login' element={<Section title="Hello, use your email and password to enter our PhoneBook"><LoginPage/></Section>} />
                <Route path='join' element={<Section title="Create new user"><JoinPage/></Section>} />
              </Route>
              
              <Route path='' element={<PrivateRoute/>}>
                <Route path='create' element={<Section title="Add new contact"><ContactCreate/></Section>} />
                <Route path='search' element={<Section title="Contacts"><Filter/> <ContactList/></Section>} />
              </Route>

              {/* <Route path='*' element={}// not foung page */}
            </Routes>

          </Suspense>
        </Layout>
      </BrowserRouter>
      

      
    </>
  );
};
