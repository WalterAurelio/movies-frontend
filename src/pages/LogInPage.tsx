// CORRECTO
import Button from '../components/new/Button';
import LogInForm from '../interfaces/LogInForm';

function LogInPage() {
  return (
    <div className='flex flex-col gap-16 max-w-5xl mx-auto items-center lg:flex-row lg:justify-evenly lg:h-screen'>
      <div className='flex flex-col gap-5 text-blanco-main max-w-97 w-full lg:max-h-[346.19px] lg:h-full'>
        <h1 className='text-[48.83px] lg:text-[61.04px] font-bold leading-[100%]'>MooBees</h1>
        <p className='text-sm lg:text-base leading-[200%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros viverra, iaculis ligula efficitur, euismod lectus.</p>
      </div>
      <Button />

      <LogInForm />
    </div>
  );
}

export default LogInPage