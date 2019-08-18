import ExpressCassandra from 'express-cassandra';

export default ExpressCassandra.createClient({
    clientOptions: {
        contactPoints: ['127.0.0.1'],
        // protocolOptions: { port: 9042 },
        keyspace: 'mykeyspace',
        queryOptions: {consistency: ExpressCassandra.consistencies.one}
    },
    ormOptions: {
        defaultReplicationStrategy : {
            class: 'SimpleStrategy',
            replication_factor: 1
        },
        migration: 'safe',
    }
});