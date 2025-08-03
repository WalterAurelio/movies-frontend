import { cva } from 'class-variance-authority';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

const variants = cva([
  'flex',
  'min-w-40',
  'min-h-11',
  'p-3',
  'pl-4',
  'justify-between',
  'items-center',
  'rounded-2xl',
  'bg-grey-background',
  'text-base',
  'font-overused-grotesk',
  'border',
  'text-main-white',
  'border-grey-border',
  'focus-within:border-neon-orange-500'
]);

function SearchBar() {
  const [inputValue, setInputValue] = useState('');
  const [inputHasValue, setInputHasValue] = useState(false);

  useEffect(() => {
    setInputHasValue(inputValue.length > 0);
  }, [inputValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  console.log(inputValue)

  return (
    <div className={twMerge(variants())}>
      <input
        type='text'
        placeholder='Buscar...'
        className='placeholder:text-grey-text outline-none w-full peer'
        value={inputValue}
        onChange={handleChange}
      />
      <button
        type='button'
        className={twMerge(clsx({
          'cursor-pointer hover:text-neon-orange-500 peer-focus:text-main-white': inputHasValue,
          'text-grey-text': !inputHasValue
        }))}
        disabled={!inputHasValue}
      >
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className='stroke-current'>
          <path d="M14 14.5L11.1 11.6M12.6667 7.83333C12.6667 10.7789 10.2789 13.1667 7.33333 13.1667C4.38781 13.1667 2 10.7789 2 7.83333C2 4.88781 4.38781 2.5 7.33333 2.5C10.2789 2.5 12.6667 4.88781 12.6667 7.83333Z" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  )
}
export default SearchBar