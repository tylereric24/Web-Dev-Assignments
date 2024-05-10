import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://student:mongodb@sandbox.jzq0bpc.mongodb.net/?retryWrites=true&w=majority&appName=Sandbox';
let client;
let dbConnectionPromise;

/**
 * Establishes a connection to the MongoDB database.
 * @returns {Promise} A promise that resolves to the database connection.
 */
export const connectDB = async () => {
    if (dbConnectionPromise) {
        return dbConnectionPromise;
    }

    client = new MongoClient(uri);
    dbConnectionPromise = client.connect()
        .then(() => {
            console.log("Database connection established");
            return client.db('sample_employees'); // Adjust to your database name
        })
        .catch(err => {
            console.error("Failed to connect to MongoDB", err);
            throw err;
        });

    return dbConnectionPromise;
};
