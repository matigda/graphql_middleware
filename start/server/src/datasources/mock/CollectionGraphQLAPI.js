
class CollectionGraphQLAPI {

    async collectionByHandle(collectionName, productsAmount) {
        return require('./data/collectionByHandle.json')
    }


    async collections(amount) {
        return require('./data/collections.json')
    }
}


module.exports = CollectionGraphQLAPI;