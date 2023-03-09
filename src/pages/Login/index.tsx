import { useNavigate } from "react-router-dom";
import { withAuth } from "../../hoc";
import { FaUserPlus } from "react-icons/fa";
import './styles.scss'
import { Button } from "../../components/commons";
import { FormLogin } from "../../components/forms";

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
            <FormLogin />
        </>
    );
}

export const Login = withAuth(LoginPage);