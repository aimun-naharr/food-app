import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from './components/banner'
import HomeKitchen from './components/HomeKitchen.jsx'
import { Provider } from 'react-redux'
import { store } from './state/store'

export default function Home() {
  return (
    <Provider store={store}>
      <div className=''>
    <Banner/>
    <HomeKitchen/>
    </div>
    </Provider>
  )
}
