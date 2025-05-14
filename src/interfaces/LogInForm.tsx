// SÍ
import Button from '../components/Button'
import FormContainer from '../components/FormContainer'
import Input from '../components/Input'
import Separador from '../components/Separador'

function LogInForm() {
  return (
    <FormContainer>
      <Input type='email' placeholder='Correo electrónico' />
      <Input type='password' placeholder='Contraseña' />
      <Button
        type='submit'
        variant={'action'}
        onClick={() => {}}
      >
        Iniciar sesión
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