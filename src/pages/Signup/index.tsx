import { Button } from "../../components/commons";
import { withAuth } from "../../hoc";
import { IoLogInSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import './styles.scss'


const SignUpPage = () => {


    const navigate = useNavigate();

    return (
        <>
            <div className="signup">
                <Button
                    type="button"
                    variant="outline-dark btn-tabla m-2"
                    handleClick={() => navigate('/login')}
                ><IoLogInSharp /></Button>
            </div>
        </>

    );

}

export const SignUp = withAuth(SignUpPage);