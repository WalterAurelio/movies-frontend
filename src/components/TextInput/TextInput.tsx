type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  errorMessage?: string;
};

function TextInput({ errorMessage, ...props }: TextInputProps) {
  return (
    <div className='flex flex-col font-overused-grotesk font-medium'>
      <input
        className='min-h-11 min-w-40 p-3 pl-4 flex items-center self-stretch rounded-2xl outline-none border border-grey-border bg-grey-background placeholder:text-grey-text text-base text-main-white focus:border-neon-orange-500'
        { ...props }
      />
      {
        errorMessage &&
        <p className='text-[12.8px] text-crimson-red-500 mt-1'>
          {errorMessage}
        </p>
      }
    </div>
  )
}
export default TextInput