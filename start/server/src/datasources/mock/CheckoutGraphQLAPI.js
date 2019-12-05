

class CheckoutGraphQLAPI {

    async createCheckout(input = {}) {

        const productsJson = require('./data/products.json');
        const checkoutCreate = require('./data/checkoutCreate.json');

        const lineItemsIds = input.lineItems.map(el => el.variantId);

        const productsInCheckout = productsJson.edges
            .filter(productEdge => productEdge.node.variants.edges.find(el => lineItemsIds.includes(el.node.id)))
            .map(productEdge => {
                const variant = productEdge.node.variants.edges.find(el => lineItemsIds.includes(el.node.id)).node;
                return {
                    ...productEdge,
                    node: {
                        ...productEdge.node,
                        variant,
                        quantity: input.lineItems.find(el => el.variantId === variant.id).quantity,
                    }
            }
        });

        const price = ""+productsInCheckout.reduce((current, product) => current + parseFloat(product.node.variant.price.amount), 0);

        checkoutCreate.data.checkoutCreate.checkout.totalPrice = {
            "amount": price,
            "currencyCode": "PLN"
        };

        checkoutCreate.data.checkoutCreate.checkout.subtotalPrice = {
            "amount": price,
            "currencyCode": "PLN"
        };

        checkoutCreate.data.checkoutCreate.checkout.lineItems = {
            edges: productsInCheckout
        };

        return checkoutCreate.data.checkoutCreate;

    }

    async checkoutLineItemsReplace(checkoutId, lineItems) {

        const productsJson = require('./data/products.json');
        const checkoutLineItemsReplace = require('./data/checkoutLineItemsReplace.json');
    }

    async checkout() {
        return require('./data/checkout.json');
    }
}


module.exports = CheckoutGraphQLAPI;


