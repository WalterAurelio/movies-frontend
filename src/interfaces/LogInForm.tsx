// SÍ
import Button from '../components/Button';
import FormContainer from '../components/FormContainer';
import Input from '../components/Input';
import Separador from '../components/Separador';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import validationMessages from '../utils/validationMessages';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthProvider } from '../store/AuthProviderStore';
import { useShallow } from 'zustand/shallow';
import { useLogIn } from '../services/queries';
import { AxiosError } from 'axios';

const { invalidMsg, requiredMsg, email, password } = validationMessages;

const schema = z.object({
  email: z
    .string({
      invalid_type_error: invalidMsg,
      required_error: requiredMsg
    })
    .min(1, requiredMsg)
    .email({ message: email.invalidMsg }),
  password: z.string({
    invalid_type_error: invalidMsg,
    required_error: requiredMsg
  }).min(5, password.minCharactersMsg(5))
});

export type LogInBody = z.infer<typeof schema>;

function LogInForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, setError } = useForm<LogInBody>({
    resolver: zodResolver(schema)
  });
  const { mutateAsync } = useLogIn();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname;
  const { auth, setAuth } = useAuthProvider(useShallow(state => ({
    auth: state.auth,
    setAuth: state.setAuth
  })));

  const onSubmit = async (data: LogInBody) => {
    try {
      const response = await mutateAsync(data);
      console.log(response);
      const accessToken = response.accessToken;
      setAuth({ ...auth, accessToken });
      navigate(from || '/', { replace: true });
    } catch (error) {
      const errorMsg = error instanceof AxiosError ? error.response?.data.message as string : 'Error desconocido. Por favor, intente más tarde.'
      const field = errorMsg.includes('correo') ? 'email' : 'password';
      setError(field, { message: errorMsg });
    }
  }
 
  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('email')} type='email' placeholder='Correo electrónico' errorMessage={errors.email?.message} />
      <Input {...register('password')} type='password' placeholder='Contraseña' errorMessage={errors.password?.message} />
      <Button
        disabled={isSubmitting}
        type='submit'
        variant={'action'}
      >
        { isSubmitting ? 'Cargando...' : 'Iniciar sesión' }
      </Button>
      <p className='text-[12.8px] w-fit m-auto'>¿Has olvidado tu contraseña?</p>
      <Separador />
      <Button
        type='button'
        variant={'primary'}
        onClick={() => {}}
      >
        Crear cuenta
      </Button>
    </FormContainer>
  )
}
export default LogInForm