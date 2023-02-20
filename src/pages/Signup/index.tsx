import { SignUpForm } from '../../components/forms'
import './styles.scss'

const SignUp = () => {
    return (
        <>
            <div className="container-page-sign-up">
                <div className="logo">
                    Movies <span className="ada">ADA</span></div>
                <div className="container-form">
                    <SignUpForm />
                </div>
            </div>
        </>
    );
}

export { SignUp };