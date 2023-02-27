import { SignUpForm } from '../../components/Forms';
import './styles.scss';

const SignUp = () => {
    return (
        <div className="container-page-sign-up">
            <div className="logo">
                Movies <span className="ada">ADA</span></div>
            <div className="container-form">
                <SignUpForm />
            </div>
        </div>

    );
}

export { SignUp };