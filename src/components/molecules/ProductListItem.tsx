import Link from "next/link";
import { type Product } from "../../utils/types";
import { ProductImage } from "../atoms/ProductImage";
import { ProductListItemDescription } from "../atoms/ProductListItemDescription";

type ProductListItemProps = {
	product: Product;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li className="flex flex-col items-center justify-between p-4 bg-white rounded-lg shadow-lg">
			<Link href={`/products/${product.id}`}>
				<ProductImage src={product.image} alt={product.title} />
				<ProductListItemDescription details={product} />
			</Link>
		</li>
	);
};
