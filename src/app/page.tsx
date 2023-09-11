import { ProductList } from "@/components/organisms/ProductList";
import { type Product } from "@/components/types";

const products: Product[] = [
	{
		id: 1,
		name: "Product 1",
		price: 100,
		category: "category x",
		image: {
			src: "https://picsum.photos/seed/1/300/300",
			alt: "Product 1",
		},
	},
	{
		id: 2,
		name: "Product 2",
		price: 200,
		category: "category x",
		image: {
			src: "https://picsum.photos/seed/2/300/300",
			alt: "Product 2",
		},
	},
	{
		id: 3,
		name: "Product 3",
		price: 300,
		category: "category x",
		image: {
			src: "https://picsum.photos/seed/3/300/300",
			alt: "Product 3",
		},
	},
	{
		id: 4,
		name: "Product 4",
		price: 400,
		category: "category x",
		image: {
			src: "https://picsum.photos/seed/4/300/300",
			alt: "Product 4",
		},
	},
];

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<ProductList products={products} />
		</main>
	);
}
