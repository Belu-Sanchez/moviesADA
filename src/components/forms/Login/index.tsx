import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { useMe } from '../../../hooks/useMe';
import { LoginForm } from '../../../types';
import { Button, Logo } from '../../commons';
import './styles.scss';
import { defaultValues } from './defaultValues';
import { validationSchema } from './validationSchema';

const Login = () => {

    const { register, handleSubmit, formState } = useForm<LoginForm>({
        defaultValues,
        resolver: validationSchema
    });
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
                        <Form.Text className="text-danger">{formState.errors.email?.message}</Form.Text>
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
                        <Form.Text className="text-danger">{formState.errors.pass?.message}</Form.Text>

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