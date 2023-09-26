import { executeGraphql } from "./executeGraphql";
import { ProductGetByIdDocument } from "@/gql/graphql";

export const getProductById = async (id: string) => {
	const { product } = await executeGraphql(ProductGetByIdDocument, {
		productId: id,
	});
	const productData = product?.data?.attributes;
	return productData;
};
