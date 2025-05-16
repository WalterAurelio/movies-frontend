// SÍ
import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import FormContainer from '../components/FormContainer'
import Input from '../components/Input'
import Separador from '../components/Separador'
import validationMessages from '../utils/validationMessages'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSignUp } from '../services/queries'
import { AxiosError } from 'axios'

const { invalidMsg, minCharactersMsg, requiredMsg, email, password } = validationMessages;

const schema = z.object({
  firstname: z
    .string({
      invalid_type_error: invalidMsg,
      required_error: requiredMsg
    })
    .min(3, minCharactersMsg(3)),
  lastname: z
    .string({
      invalid_type_error: invalidMsg,
      required_error: requiredMsg
    })
    .min(3, minCharactersMsg(3)),
  email: z
    .string({
      invalid_type_error: invalidMsg,
      required_error: requiredMsg
    })
    .min(1, requiredMsg)
    .email({ message: email.invalidMsg }),
  password: z
    .string({
      invalid_type_error: invalidMsg,
      required_error: requiredMsg
    })
    .min(5, password.minCharactersMsg(5))
});

export type SignUpBody = z.infer<typeof schema>;

function SignUpForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, setError } = useForm<SignUpBody>({
    resolver: zodResolver(schema)
  });
  const { mutateAsync } = useSignUp();
  const navigate = useNavigate();

  const onSubmit = async (data: SignUpBody) => {
    try {
      const response = await mutateAsync(data);
      console.log(response);
      navigate('/login');
    } catch (error) {
      console.log(error);
      const errorMsg = error instanceof AxiosError ? error.response?.data.message as string : 'Error desconocido. Por favor, intente más tarde.';
      const field = errorMsg.includes('correo') ? 'email' : 'root';
      setError(field, { message: errorMsg });
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('firstname')} type='text' placeholder='Nombre' errorMessage={errors.firstname?.message} />
      <Input {...register('lastname')} type='text' placeholder='Apellidos' errorMessage={errors.lastname?.message} />
      <Input {...register('email')} type='email' placeholder='Correo electrónico' errorMessage={errors.email?.message} />
      <Input {...register('password')} type='password' placeholder='Contraseña' errorMessage={errors.password?.message} />
      <Button
        type='submit'
        disabled={isSubmitting}
        variant={'action'}
      >
        { isSubmitting ? 'Cargando...' : 'Registrarse' }
      </Button>
      <Separador />
      <Link to='/login' className='text-[12.8px] w-fit m-auto hover:underline'>¿Ya tienes una cuenta?</Link>
    </FormContainer>
  )
}
export default SignUpForm