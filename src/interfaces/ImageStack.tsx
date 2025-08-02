// SÍ
import Image from '../components/Image'

function ImageStack() {
  return (
    <div className='w-97 h-auto flex flex-wrap gap-2'>
      {
        [...Array(9)].map((_, index) =>
          <Image key={index} orientation={'horizontal'} />
        )
      }
    </div>
  )
}
export default ImageStack