import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { useMe } from '../../../hooks/useMe';
import { LoginForm } from '../../../types';
import { Logo } from '../../commons';
import { Button } from '../Button';
import './styles.scss';

const Login = () => {

    const { register, handleSubmit } = useForm<LoginForm>();
    const { login } = useMe();

    const onSubmit = (data: LoginForm) => {
        login(data);
    };

    return (
        <div className="container-form ">
            <Logo />
            <div className="container-sign-in">
                <h3>Sign In</h3>
                <Form onSubmit={handleSubmit(onSubmit)}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>

                        <Form.Control
                            type="email"
                            placeholder="
                                Enter email"
                            {...register("email")}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="
                                Enter password"
                            autoComplete="off"
                            {...register("pass")}
                        />
                    </Form.Group>

                    <Button variant='form' type='submit' >Submit</Button>
                    <div>
                        <NavLink to="/forgot">Forgot your password?</NavLink>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export { Login };