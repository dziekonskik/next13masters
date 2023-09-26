import Link from "next/link";
import { ProductImage } from "../atoms/ProductImage";
import { ProductListItemDescription } from "../atoms/ProductListItemDescription";
import type { ProductListItemFragmentFragment } from "@/gql/graphql";

type ProductListItemProps = {
	product: ProductListItemFragmentFragment;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	const image = product.images?.data[0].attributes;

	return (
		<li className="flex flex-col items-center justify-between p-4 bg-white rounded-lg shadow-lg">
			<Link href={`/product/${product.slug}`}>
				{image && <ProductImage src={image.url ?? ""} alt={image.alternativeText ?? ""} />}
				<ProductListItemDescription details={product} />
			</Link>
		</li>
	);
};
