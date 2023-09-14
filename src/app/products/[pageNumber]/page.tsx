import { ProductList } from "@/components/organisms/ProductList";
import { getAllProducts, getProducts } from "@/utils/getProducts";
import { isParsableToNumber } from "@/utils/helpers";
import { Pagination } from "@/components/molecules/Pagination";

export const generateStaticParams = async () => {
	const productCount = (await getAllProducts()).length;
	const pagesCount = Math.ceil(productCount / 20);

	return Array.from({ length: pagesCount }).map((_, index) => ({
		pageNumber: String(index + 1),
	}));
};

export default async function ProductsPage({
	params: { pageNumber },
}: {
	params: { pageNumber: string };
}) {
	const products = await getProducts(isParsableToNumber(pageNumber) ? parseInt(pageNumber) : 0);

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<ProductList products={products} />
			<Pagination totalPages={5} />
		</main>
	);
}
