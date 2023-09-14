import { type Metadata } from "next";
import { ProductImage } from "@/components/atoms/ProductImage";
import { getProductById } from "@/utils/getProducts";

export async function generateMetadata({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> {
	const product = await getProductById(params.productId);
	return {
		title: product.title,
		description: product.description,
		openGraph: {
			title: product.title,
			description: product.description,
		},
		alternates: {
			canonical: `https://example.com/products/${params.productId}`,
		},
	};
}

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);
	return (
		<div className="min-h-screen flex flex-col items-center pt-12">
			<ProductImage src={product.image} alt={product.title} />
			<h1 className="my-10">{product.title}</h1>
			<p>{product.description}</p>
		</div>
	);
}
