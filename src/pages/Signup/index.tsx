import { Button } from "../../components/commons";
import { withAuth } from "../../hoc";
import { IoLogInSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import './styles.scss'
import { SignUpForm } from "../../components/forms";


const SignUpPage = () => {


    const navigate = useNavigate();

    return (
        <>
            <div className="signup">
                <Button
                    type="button"
                    variant="btn-tabla m-2"
                    handleClick={() => navigate('/login')}
                ><IoLogInSharp /></Button>
            </div>
            <SignUpForm />
        </>

    );

}

export const SignUp = withAuth(SignUpPage);