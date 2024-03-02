import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center gap-5 h-screen w-full'>
      <h2 className='text-2xl'>Not Found</h2>
      <h1 className='text-9xl text-red-400'>404</h1>
      <p>Could not find requested resource</p>
      <Link href="/" className='text-xl text-cyan-400 hover:scale-105'>Return Home</Link>
    </div>
  )
}