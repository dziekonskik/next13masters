/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query ProductGetById($productId: ID) {\n  product(id: $productId) {\n    data {\n      attributes {\n        name\n        description\n        price\n        images {\n          data {\n            attributes {\n              url\n              previewUrl\n              alternativeText\n              width\n              height\n              caption\n              size\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.ProductGetByIdDocument,
    "query ProductsGetListPaginated($pagination: PaginationArg) {\n  products(pagination: $pagination) {\n    data {\n      attributes {\n        ...ProductListItemFragment\n      }\n    }\n  }\n}": types.ProductsGetListPaginatedDocument,
    "fragment ProductListItemFragment on Product {\n  slug\n  price\n  name\n  images {\n    data {\n      attributes {\n        url\n        width\n        height\n        alternativeText\n      }\n    }\n  }\n  categories {\n    data {\n      attributes {\n        name\n      }\n    }\n  }\n}": types.ProductListItemFragmentFragmentDoc,
    "query ProductsGetCount {\n  products {\n    meta {\n      pagination {\n        total\n      }\n    }\n  }\n}": types.ProductsGetCountDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($productId: ID) {\n  product(id: $productId) {\n    data {\n      attributes {\n        name\n        description\n        price\n        images {\n          data {\n            attributes {\n              url\n              previewUrl\n              alternativeText\n              width\n              height\n              caption\n              size\n            }\n          }\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetListPaginated($pagination: PaginationArg) {\n  products(pagination: $pagination) {\n    data {\n      attributes {\n        ...ProductListItemFragment\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListPaginatedDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItemFragment on Product {\n  slug\n  price\n  name\n  images {\n    data {\n      attributes {\n        url\n        width\n        height\n        alternativeText\n      }\n    }\n  }\n  categories {\n    data {\n      attributes {\n        name\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductListItemFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetCount {\n  products {\n    meta {\n      pagination {\n        total\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductsGetCountDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
