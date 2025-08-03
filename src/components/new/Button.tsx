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
  'font-overused-grotesk',
  'font-semibold'
], {
  variants: {
    style: {
      fill: ['bg-neon-orange-500'],
      outline: [
        'border',
        'border-grey-border'
      ],
      minimal: [
        'text-neon-orange-500',
        'hover:underline'
      ]
    },
    state: {
      default: ['cursor-pointer'],
      disabled: ['cursor-default']
    }
  },
  compoundVariants: [
    {
      style: 'fill',
      state: 'default',
      class: ['hover:bg-neon-orange-200']
    },
    {
      style: 'outline',
      state: 'default',
      class: [
        'hover:border-neon-orange-500',
        'hover:text-neon-orange-500'
      ]
    },
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
    style: 'fill',
    state: 'default'
  }
});

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof variants>;

function Button({ style, state, children, ...props }: ButtonProps) {
  return (
    <button className={twMerge(variants({ style, state }))} {...props}>
      {children}
    </button>
  )
}
export default Button