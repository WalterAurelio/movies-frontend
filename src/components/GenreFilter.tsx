// SÍ
import { VariantProps, cva } from 'class-variance-authority';
import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

const variants = cva([
  'text-sm',
  'lg:text-base',
  'w-fit',
  'p-3',
  'rounded-lg'
], {
  variants: {
    variant: {
      active: [
        'text-negro-main',
        'bg-blanco-main',
        'font-bold'
      ],
      inactive: [
        'text-blanco-main',
        'bg-blanco-traslucido',
        'backdrop-blur-sm'
      ]
    }
  }, 
  defaultVariants: {
    variant: 'inactive'
  }
});

type GenreFilterProps = PropsWithChildren & VariantProps<typeof variants>;

function GenreFilter({ children, variant }: GenreFilterProps) {
  return (
    <div
      className={twMerge(variants({ variant }))}
    >
      {children}
    </div>
  )
}
export default GenreFilter