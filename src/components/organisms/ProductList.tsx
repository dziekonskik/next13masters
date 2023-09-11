import { ProductListItem } from "../molecules/ProductListItem";
import { type Product } from "../types";

type ProductListProps = {
	products: Product[];
};

export const ProductList = ({ products }: ProductListProps) => {
	return (
		<ul
			className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
			data-testid="products-list"
		>
			{products.map((product) => {
				return <ProductListItem key={product.id} product={product} />;
			})}
		</ul>
	);
};
