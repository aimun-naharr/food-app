import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Banner from "./components/banner";
import HomeKitchen from "./components/HomeKitchen.jsx";
import Blog from "./components/blog/Blog";
import Navbar from "./components/banner/Navbar";
import Contact from "./components/Contact";

export default function Home() {
	return (
			<div className="relative">
				<Banner />
				<HomeKitchen />
				<Blog />
				<Contact/>
			</div>
	);
}
