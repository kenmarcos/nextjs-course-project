import { MongoClient } from "mongodb";

export const connectDatabase = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://dbTest:lYNPPIkk0t1uO1es@cluster0.yc36ysu.mongodb.net/events?retryWrites=true&w=majority"
  );

  return client;
};

export const insertDocument = async ({ client, collectionName, document }) => {
  const db = client.db();

  const result = await db.collection(collectionName).insertOne(document);

  return result;
};

export const getAllDocuments = async ({
  client,
  collectionName,
  sort,
  filter = {},
}) => {
  const db = client.db();

  const documents = await db
    .collection(collectionName)
    .find(filter)
    .sort(sort) // ordem descendente
    .toArray();

  return documents;
};
