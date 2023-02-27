import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { servicesUser } from '../../../services/users';
import { SignUpForm } from '../../../types'
import { useNavigate } from 'react-router-dom';
import { Button } from '..';
import { Logo } from '../../commons';
import './styles.scss';


const SignUp = () => {

  const { register, handleSubmit } = useForm<SignUpForm>();

  const navigate = useNavigate();

  const onSubmit = (data: SignUpForm) => {

    servicesUser.add({
      ...data,
      birthdate: new Date(data.birthdate)
    })

    navigate('/');
  };


  return (
    <div className="container-form">
      <Logo />
      <div className="container-sign-up ">
        <h3 className="title-form">Create account</h3>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" {...register('name')} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLastname">
            <Form.Label>Lastname</Form.Label>
            <Form.Control type="text" {...register('lastname')} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email"  {...register('email')} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" {...register('password')} required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Label>Birthdate</Form.Label>
            <Form.Control type="date" {...register('birthdate')} required />
          </Form.Group>

          <Button variant='sign-up' type='submit' >Submit</Button>

        </Form>
      </div>
    </div>
  )
}

export { SignUp };