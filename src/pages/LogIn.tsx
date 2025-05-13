// CORRECTO
import { z } from 'zod';
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { useLogIn } from '../services/queries';
import { useAuthProvider } from '../store/AuthProviderStore';
import { useShallow } from 'zustand/shallow';
import { Form, useLocation, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import GenreTag from '../components/GenreTag';
import GenreFilter from '../components/GenreFilter';
import Input from '../components/Input';
import Search from '../components/Search';
import PeliculaFeatured from '../components/PeliculaFeatured';
import PeliculaResultadoBusqueda from '../components/PeliculaResultadoBusqueda';
import AnteriorSiguiente from '../components/AnteriorSiguiente';
import Filtro from '../components/Filtro';
import Genero from '../components/Genero';
import BackButton from '../components/BackButton';
import Separador from '../components/Separador';
import FormContainer from '../components/FormContainer';
import ImageStack from '../interfaces/ImageStack';

const schema = z.object({
  email: z.string().email().min(1),
  password: z.string().min(1)
}); 

export type LogInBody = z.infer<typeof schema>;

function LogIn() {
  const navigate = useNavigate();
  const { mutateAsync } = useLogIn();
  const { auth, setAuth } = useAuthProvider(useShallow(state => ({
    auth: state.auth,
    setAuth: state.setAuth
  })));
  const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm<LogInBody>({
    resolver: zodResolver(schema)
  });
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const onSubmit = async (data: LogInBody) => {
    try {
      const response = await mutateAsync(data);
      console.log('Soy response', response);
      const accessToken = response.accessToken;
      setAuth({ ...auth, accessToken });
      // navigate('/');
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <Button type='button' variant={'action'}>Iniciar sesión</Button>
      <GenreTag>Comedia</GenreTag>
      <GenreFilter variant={'active'} >Acción</GenreFilter>
      <Input placeholder='Correo electrónico' />
      <Search />
      <PeliculaResultadoBusqueda />
      <AnteriorSiguiente />
      <Filtro />
      <Genero />
      <Separador />
      <FormContainer></FormContainer>
      <BackButton />
      <ImageStack />

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
        { isSubmitting ? 'Cargando' : 'Iniciar sesión' }
      </button>
    </form>
  );
}

export default LogIn