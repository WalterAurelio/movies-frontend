// SÍ
import { VariantProps, cva } from 'class-variance-authority';
import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

const variants = cva([
  'bg-gris-placeholder',
  'rounded-lg',
  'p-4',
  'flex',
  'flex-col',
  'justify-end',
], {
  variants: {
    orientation: {
      vertical: [
        'aspect-2/3'
      ],
      horizontal: [
        'aspect-3/2',
        'min-w-[123.83px]'
      ]
    }
  },
  defaultVariants: {
    orientation: 'horizontal'
  }
});

type ImageProps = PropsWithChildren & VariantProps<typeof variants> & {
  className?: string;
};

function Image({ className, orientation, children }: ImageProps) {
  return (
    <div className={twMerge(variants({ orientation, className }))}>
      {children}
    </div>
  )
}
export default Image