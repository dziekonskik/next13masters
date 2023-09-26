import { type ProductListItemFragmentFragment } from "@/gql/graphql";

type ProductListItemDescriptionProps = {
	details: Pick<ProductListItemFragmentFragment, "name" | "categories" | "price">;
};

export const ProductListItemDescription = ({
	details: { name, categories, price },
}: ProductListItemDescriptionProps) => {
	return (
		<div className="flex flex-col justify-between text-center">
			<h3 className="text-lg font-semibold text-gray-500 ">{name}</h3>
			<p className="text-sm text-gray-500 ">{categories?.data[0].attributes?.name}</p>
			<p className="text-lg font-semibold text-slate-600">${price}</p>
		</div>
	);
};
