import { notFound } from "next/navigation";
import { ProductList } from "@/components/organisms/ProductList";
import { executeGraphql } from "@/utils/executeGraphql";
import { isParsableToNumber } from "@/utils/helpers";
import { Pagination } from "@/components/molecules/Pagination";
import { ProductsGetCountDocument, ProductsGetListPaginatedDocument } from "@/gql/graphql";

export const generateStaticParams = async () => {
	const { products } = await executeGraphql(ProductsGetCountDocument);
	const pagesCount = Math.ceil(products?.meta.pagination.total ?? 0);

	return Array.from({ length: pagesCount }).map((_, index) => ({
		pageNumber: String(index + 1),
	}));
};

export default async function ProductsPage({
	params: { pageNumber },
}: {
	params: { pageNumber: string };
}) {
	const count = await executeGraphql(ProductsGetCountDocument);
	const { products } = await executeGraphql(ProductsGetListPaginatedDocument, {
		pagination: {
			limit: 20,
			start: isParsableToNumber(pageNumber) ? parseInt(pageNumber) : 0,
		},
	});

	if (!products) {
		throw notFound();
	}
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<ProductList products={products} />
			<Pagination totalPages={count.products?.meta.pagination.total ?? 0} />
		</main>
	);
}
