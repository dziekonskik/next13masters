import { type Product } from "../types";
import { ProductImage } from "../atoms/ProductImage";
import { ProductListItemDescription } from "../atoms/ProductListItemDescription";

type ProductListItemProps = {
	product: Product;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li className="flex flex-col items-center justify-between p-4 bg-white rounded-lg shadow-lg">
			<ProductImage src={product.image.src} alt={product.image.alt} />
			<ProductListItemDescription details={product} />
		</li>
	);
};
