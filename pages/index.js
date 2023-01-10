
import Banner from "./components/banner/Banner";
import HomeKitchen from "./components/homeKitchen.jsx/HomeKitchen.jsx";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Blog from "./components/blog/Blog";
import MobileNav from "./global/MobileNav";

export default function Home() {
	return (
			<div className="relative h-screen">
				<Banner />
				<HomeKitchen />
				<Blog />
				<Contact/>
				<Footer/>
				<MobileNav/>
			</div>
	);
}
