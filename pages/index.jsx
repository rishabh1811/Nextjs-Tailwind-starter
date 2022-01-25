import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (<>
  <div className=" p-6 space-y-4">
    <h1 className="text-4xl"><span className='text-sky-500 font-bold'>Tailwind</span> Starter</h1>
    <h2 className="text-3xl underline underline-offset-4">Features</h2>
      <ul className="text-lg">
        <li className="">🚀Next.js 12.0.8</li>
        <li className="">✅Tailwind 3.0.16</li>
        <li className="">😍Sass </li>
        <li className=""></li>
      </ul>
  </div>
  
  </>)
}
