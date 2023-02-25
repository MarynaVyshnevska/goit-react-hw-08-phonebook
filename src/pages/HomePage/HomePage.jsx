import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectAuthToken } from "redux/auth/auth.selector";
  
const HomePage = () => {
    const navigate = useNavigate();
    const token = useSelector(selectAuthToken);
    return (
        <>
            <div>
                <h1 className="">Your virtual PhoneBook</h1>
                <p className="">
                    For those who lose their gadgets, the necessary contacts are always at hand
                </p>
                <p>This app was created as a final assignment for a react/redox course.</p>
                <p>Created with the following technologies:</p>
                <p>
                    Register or log in and search for the contacts of loved ones you need
                </p>
                <button
                    type='button'
                    onClick={() => token ? navigate('/contacts') : navigate('/login')}
                >
                    Use your Phonebook
                </button>
            </div>
        </>
    )
}

export default HomePage;