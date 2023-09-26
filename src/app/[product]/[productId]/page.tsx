import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductImage } from "@/components/atoms/ProductImage";
import { getProductById } from "@/utils/queryFunctions";

export async function generateMetadata({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> {
	const product = await getProductById(params.productId);

	if (!product?.description) return {};
	return {
		title: product?.name,
		description: product?.description,
		openGraph: {
			title: product?.name,
			description: product?.description,
		},
		alternates: {
			canonical: `https://example.com/products/${params.productId}`,
		},
	};
}

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);
	if (!product) {
		return notFound();
	}

	const image = product.images?.data[0].attributes;
	return (
		<div className="min-h-screen flex flex-col items-center pt-12">
			<ProductImage
				src={image?.url ?? ""}
				alt={image?.alternativeText ?? ""}
				width={image?.width ?? 0}
				height={image?.height ?? 0}
			/>
			<h1 className="my-10">{product.name}</h1>
			<p>{product.description}</p>
		</div>
	);
}
