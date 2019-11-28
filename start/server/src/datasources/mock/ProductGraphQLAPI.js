
class ProductGraphQLAPI {

    async productByHandle(handle) {
        return require('./data/productByHandle.json')
    }

    async products(pagination) {
        return require('./data/products.json')
    }
}


module.exports = ProductGraphQLAPI;