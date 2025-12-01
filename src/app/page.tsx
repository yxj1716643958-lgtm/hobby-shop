import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import ModelGrid from '@/components/ModelGrid';
import Footer from '@/components/Footer';

export default function Home() {
	return (
		<main className="min-h-screen">
			<Header />
			<Hero />
			<ProductGrid />
			<ModelGrid />
			<Footer />
		</main>
	);
}
