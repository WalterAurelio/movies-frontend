// SÍ
import Button from '../components/Button'
import FormContainer from '../components/FormContainer'
import Input from '../components/Input'
import Separador from '../components/Separador'

function SignUpForm() {
  return (
    <FormContainer>
      <Input placeholder='Nombre' />
      <Input placeholder='Apellidos' />
      <Input placeholder='Correo electrónico' />
      <Input placeholder='Contraseña' />
      <Button
        variant={'action'}
        onClick={() => {}}
      >
        Registrarse
      </Button>
      <Separador />
      <p className='text-[12.8px] w-fit m-auto'>¿Ya tienes una cuenta?</p>
    </FormContainer>
  )
}
export default SignUpForm