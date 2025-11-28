const products = [
	{
		id: 1,
		name: '高达模型 RX-78-2',
		price: 4500,
		category: '拼装模型',
		image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400',
	},
	{
		id: 2,
		name: '动漫手办系列',
		price: 8900,
		category: '手办',
		image: 'https://images.unsplash.com/photo-1601814933824-fd0b574dd592?w=400',
	},
	{
		id: 3,
		name: '高端比例手办',
		price: 12500,
		category: '手办',
		image: 'https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=400',
	},
	{
		id: 4,
		name: '塑料拼装模型',
		price: 3200,
		category: '拼装模型',
		image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400',
	},
	{
		id: 5,
		name: '粘土人手办',
		price: 5600,
		category: '手办',
		image: 'https://images.unsplash.com/photo-1601814933824-fd0b574dd592?w=400',
	},
	{
		id: 6,
		name: '限定版手办',
		price: 15800,
		category: '手办',
		image: 'https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=400',
	},
];

export default function ProductGrid() {
	return (
		<section className="py-16 bg-gray-50">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold mb-8 text-center">精选商品</h2>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{products.map((product) => (
						<div
							key={product.id}
							className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition group"
						>
							<div className="relative h-64 overflow-hidden">
								<img
									src={product.image}
									alt={product.name}
									className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
								/>
								<span className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
									{product.category}
								</span>
							</div>
							<div className="p-6">
								<h3 className="text-lg font-semibold mb-2">{product.name}</h3>
								<p className="text-2xl font-bold text-primary mb-4">
									¥{product.price.toLocaleString()}
								</p>
								<button className="w-full bg-secondary hover:bg-gray-800 text-white font-bold py-2 px-4 rounded transition">
									加入购物车
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
