import { useNavigate } from "react-router-dom";
import { LoginForm } from "../../components/forms";
import { withAuth } from "../../hoc";
import { FaUserPlus } from "react-icons/fa";
import './styles.scss'
import { Button } from "../../components/commons";

const LoginPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="login">
                <Button
                    type="button"
                    variant="outline-dark btn-tabla m-2"
                    handleClick={() => navigate('/signup')}
                ><FaUserPlus /></Button>
            </div>
            <LoginForm />
        </>
    );
}

export const Login = withAuth(LoginPage);