// SÍ
import { VariantProps, cva } from 'class-variance-authority';
import { PropsWithChildren } from 'react';

const variants = cva([
  'bg-gris-placeholder',
  'rounded-lg',
  'p-4',
  'flex',
  'flex-col',
  'justify-end'
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

type ImageProps = PropsWithChildren & VariantProps<typeof variants>;

function Image({ orientation, children }: ImageProps) {
  return (
    <div className={variants({ orientation })}>
      {children}
    </div>
  )
}
export default Image