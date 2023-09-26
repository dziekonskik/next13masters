import { ProductListItem } from "../molecules/ProductListItem";
import type { ProductsGetListPaginatedQuery } from "@/gql/graphql";

type ProductListProps = {
	products: ProductsGetListPaginatedQuery["products"];
};

export const ProductList = async ({ products }: ProductListProps) => {
	return (
		<ul
			className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
			data-testid="products-list"
		>
			{products?.data.map((product) => {
				if (!product.attributes) return null;

				return <ProductListItem key={product.attributes?.slug} product={product.attributes} />;
			})}
		</ul>
	);
};
