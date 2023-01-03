import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from './components/banner'
import HomeKitchen from './components/HomeKitchen.jsx'

export default function Home() {
  return (
    <div className=''>
    <Banner/>
    <HomeKitchen/>
    </div>
  )
}
