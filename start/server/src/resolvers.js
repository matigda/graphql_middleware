const { paginateResults } = require('./utils');

module.exports = {
    QueryRoot: {
        collectionByHandle: async (_, options, { dataSources }) => {
            const { handle, productsAmount } = options;
            return await dataSources.collectionGraphQLAPI.collectionByHandle(handle, 10);
        },
        productByHandle: async (_, options, { dataSources }) => {
            const { handle } = options;
            return await dataSources.productGraphQLAPI.productByHandle(handle);
        },
        products: async (_, options, { dataSources }) => {
            const { first, last, before, after, pageNumber, itemsPerPage } = options;

            return await dataSources.productGraphQLAPI.products({
                first, last, before, after, pageNumber, itemsPerPage
            });
        }

    },
    Mutation: {
        checkoutCreate: async (_, options, { dataSources }) => {
            const {input} = options;
            return await dataSources.checkoutGraphQLAPI.createCheckout(input);
        },
        checkoutLineItemsReplace: async(_, options, { dataSources }) => {
            const { lineItems, checkoutId } = options;
            return await dataSources.checkoutGraphQLAPI.checkoutLineItemsReplace(checkoutId, lineItems);
        }
    },
    Image: {
        variants: async (image, _, {dataSources}) => {
            return [{
                name: "square",
                srcset: [{width: 100, src: image.squareSrc}],
                aspectRatio: 1.0
            },{
                name: "natural",
                srcset: [{width: 100, src: image.naturalSrc }],
                aspectRatio: 1.0
            }];
        }
    },
    Collection: {
        image: (collection) => {
            const {image} = collection;

            return {
                ...image,
                id: image.id,
                originalSrc: image.originalSrc,
                altText: image.altText,
            }
        }
    },
    MetafieldParentResource: {
        __resolveType() {
            return null;
        }
    },
    HasMetafields: {
        __resolveType() {
            return null;
        }
    },
    DisplayableError: {
        __resolveType() {
            return null;
        }
    },
    PricingValue: {
        __resolveType() {
            return null;
        }
    },
    DiscountApplication: {
        __resolveType() {
            return null;
        }
    },
    Node: {
        __resolveType() {
            return null;
        }
    },
};