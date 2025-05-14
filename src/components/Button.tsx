// SÍ
import { VariantProps, cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const variants = cva([
  'text-sm',
  'lg:text-base',
  'font-bold',
  'py-3',
  'px-4',
  'rounded-lg',
  'min-w-30',
  'text-blanco-main',
  'cursor-pointer'
], {
  variants: {
    variant: {
      primary: [
        'bg-blanco-main',
        'text-negro-main'
      ],
      secondary: [
        'bg-blanco-traslucido',
      ],
      minimal: [],
      action: [
        'bg-negro-main',
      ]
    }
  },
  defaultVariants: {
    variant: 'primary'
  }
});

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof variants> & {

  };

// interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

function Button({ className, variant, children, ...props }: ButtonProps) {
  return (
    <button
      className={twMerge(variants({ variant, className }))} {...props}
    >
      {children}
    </button>
  );
}
export default Button;
