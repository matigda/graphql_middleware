
class CollectionGraphQLAPI {

    async collectionByHandle(collectionName, productsAmount) {
        return require('./data/collectionByHandle.json')
    }
}


module.exports = CollectionGraphQLAPI;