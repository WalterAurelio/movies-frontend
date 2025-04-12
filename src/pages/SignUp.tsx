// CORRECTO
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSignUp } from '../services/queries';

const schema = z.object({
  firstname: z.string().min(2),
  lastname: z.string().min(2),
  email: z.string().min(3),
  password: z.string().min(3)
});

export type SignUpBody = z.infer<typeof schema>;

function SignUp() {
  const { mutateAsync } = useSignUp();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignUpBody>({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (data: SignUpBody) => {
    try {
      await mutateAsync(data);
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor='firstname'>Nombre:</label>
        <input { ...register('firstname') } type='text' id='firstname' placeholder='Ingrese su nombre' />
        { errors.firstname && <p>{errors.firstname.message}</p> }
      </div>
      <div>
        <label htmlFor='lastname'>Apellido:</label>
        <input { ...register('lastname') } type='text' id='lastname' placeholder='Ingrese su apellido' />
        { errors.lastname && <p>{errors.lastname.message}</p> }
      </div>
      <div>
        <label htmlFor='email'>Email:</label>
        <input { ...register('email') } type='email' id='email' placeholder='Ingrese su email' />
        { errors.email && <p>{errors.email.message}</p> }
      </div>
      <div>
        <label htmlFor='password'>Contraseña:</label>
        <input { ...register('password') } type='password' id='password' placeholder='Ingrese su contraseña' />
        { errors.password && <p>{errors.password.message}</p> }
      </div>
      <button disabled={isSubmitting}>
        { isSubmitting ? 'Cargando' : 'Confirmar' }
      </button>
    </form>
  );
}

export default SignUp