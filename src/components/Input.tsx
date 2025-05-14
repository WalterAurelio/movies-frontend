// SÍ
type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  errorMessage?: string;
};

function Input({ errorMessage, ...props }: InputProps) {
  return (
    <div>
      <input
        className='p-3 text-sm lg:text-base bg-blanco-main rounded-lg border-gris-border border-1 placeholder-gris-placeholder outline-0 w-full'
        { ...props }
      />
      { errorMessage && <p className='mt-1 text-rojo-main text-[12.8px] w-fit'>{errorMessage}</p> }
    </div>
  )
}
export default Input