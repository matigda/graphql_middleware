const CollectionGraphQLAPI = require( "./datasources/shopify/CollectionGraphQLAPI");
const ProductGraphQLAPI = require( "./datasources/mock/ProductGraphQLAPI");
const CheckoutGraphQLAPI = require( "./datasources/mock/CheckoutGraphQLAPI");

const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');


const server = new ApolloServer({
    // context: async ({req}) => {
    //
    //     const auth = req.headers && req.headers.authorization || '';
    //     const email = Buffer.from(auth, 'base64').toString('ascii');
    //     if (!isEmail.validate(email)) return { user: null };
    //     // find a user by their email
    //     const users = await store.users.findOrCreate({ where: { email } });
    //     const user = users && users[0] || null;
    //
    //     return { user: { ...user.dataValues } };
    // },
    typeDefs,
    resolvers,
    dataSources: () => ({
        collectionGraphQLAPI: new CollectionGraphQLAPI(),
        productGraphQLAPI: new ProductGraphQLAPI(),
        checkoutGraphQLAPI: new CheckoutGraphQLAPI(),
    })
});



server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});