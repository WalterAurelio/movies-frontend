import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const variants = cva([
  'text-base',
  'px-4',
  'py-3',
  'min-w-40',
  'min-h-13',
  'inline-flex',
  'justify-center',
  'items-center',
  'text-main-white',
  'rounded-2xl',
  'select-none',
  'cursor-pointer',
  'font-bold'
], {
  variants: {
    style: {
      fill: [
        'bg-neon-orange-500',
        'hover:bg-neon-orange-200'
      ],
      outline: [
        'border',
        'border-grey-border',
        'hover:border-neon-orange-500',
        'hover:text-neon-orange-500'
      ],
      minimal: [
        'text-neon-orange-500',
        'hover:underline'
      ]
    },
    state: {
      disabled: ['cursor-default']
    }
  },
  compoundVariants: [
    {
      style: 'fill',
      state: 'disabled',
      class: [
        'bg-grey-border',
        'text-grey-text',
      ]
    },
    {
      style: 'outline',
      state: 'disabled',
      class: [
        'border-grey-text',
        'bg-grey-border',
        'text-grey-text'
      ]
    },
    {
      style: 'minimal',
      state: 'disabled',
      class: [
        'text-grey-text',
        'hover:no-underline'
      ]
    }
  ],
  defaultVariants: {
    style: 'fill'
  }
});

export type CVAVariantsProps = VariantProps<typeof variants>

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & CVAVariantsProps;

function Button({ style, state, children, ...props }: ButtonProps) {
  return (
    <button className={twMerge(variants({ style, state }))} {...props}>
      {children}
    </button>
  )
}
export default Button