import { PropsWithChildren } from 'react';

type DescriptionProps = PropsWithChildren<{
  className?: string;
}>;

function Description({ className, children }: DescriptionProps) {
  return (
    <p className={`text-sm lg:text-base w-fit ${className}`}>
      {children}
    </p>
  )
}
export default Description