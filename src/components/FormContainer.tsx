// SÍ
type FormContainerProps = React.FormHTMLAttributes<HTMLFormElement>

function FormContainer({ children, ...props }: FormContainerProps) {
  return (
    <form
      className='max-w-97 w-full py-6 px-4 flex flex-col gap-4 rounded-lg bg-blanco-main border-1 border-gris-border' 
      {...props}
    >
      {children}
    </form>
  )
}
export default FormContainer