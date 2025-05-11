// SÍ

import { PropsWithChildren } from 'react'

function GenreTag({ children }: PropsWithChildren) {
  return (
    <div className='text-[10.24px] lg:text-[12.8px] p-2 rounded-lg bg-blanco-traslucido backdrop-blur-sm w-fit text-blanco-main'>
      {children}
    </div>
  )
}
export default GenreTag