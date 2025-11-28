export default function Footer() {
	return (
		<footer className="bg-secondary text-white py-12">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div>
						<h3 className="text-xl font-bold mb-4">UKA模工坊</h3>
						<p className="text-gray-400">专业的日系模型与手办收藏平台</p>
					</div>

					<div>
						<h4 className="font-bold mb-4">商品分类</h4>
						<ul className="space-y-2 text-gray-400">
							<li>
								<a href="#" className="hover:text-white transition">
									新品上架
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-white transition">
									模型专区
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-white transition">
									手办专区
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-white transition">
									特价促销
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="font-bold mb-4">客户服务</h4>
						<ul className="space-y-2 text-gray-400">
							<li>
								<a href="#" className="hover:text-white transition">
									联系我们
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-white transition">
									配送信息
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-white transition">
									退换货政策
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-white transition">
									常见问题
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="font-bold mb-4">订阅资讯</h4>
						<p className="text-gray-400 mb-4">订阅获取最新产品和优惠信息</p>
						<input
							type="email"
							placeholder="您的邮箱"
							className="w-full px-4 py-2 rounded text-gray-900 mb-2"
						/>
						<button className="w-full bg-primary hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition">
							立即订阅
						</button>
					</div>
				</div>

				<div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
					<p>&copy; 2024 UKA模工坊. 版权所有</p>
				</div>
			</div>
		</footer>
	);
}
