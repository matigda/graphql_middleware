const { GraphQLDataSource } = require('apollo-datasource-graphql');


class AbstractPaginatedGraphQLAPI extends GraphQLDataSource {
    constructor() {
        super();
    }

    async getPagination(pagination, query, getEdges) {
        const {pageNumber, itemsPerPage} = pagination;
        const newPagination = {};

        if (pageNumber && itemsPerPage) {
            const cursorResponse = await this.query(query,
                { variables: {first: (pageNumber - 1) * itemsPerPage}
                });

            const edges = getEdges(cursorResponse);

            if (edges[0]) {
                newPagination['first'] = itemsPerPage;
                newPagination['after'] = edges[0].cursor;
            }
        }

        if (!newPagination.first) {
            newPagination.first = pagination.itemsPerPage ? pagination.itemsPerPage: 100;
        }

        return newPagination;
    }
}

module.exports = AbstractPaginatedGraphQLAPI;