import Code from '@/components/Code'
import Image from 'next/image'


export default function Home() {
  return (
  <>
    <div className='h-full flex  items-center justify-center flex-col gap-6'>
      <h1 className='text-4xl '>Code Share</h1>
      <Code  />
    </div>
  </>
  )
}
