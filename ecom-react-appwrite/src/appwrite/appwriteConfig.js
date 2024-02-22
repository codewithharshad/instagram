import { Client, Account, Databases, Storage } from "appwrite";

//set endpoint
const client = new Client();

client
  // .setEndpoint(import.meta.env.VITE_ENDPOINT)
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject(''); // enter your appwrite project ID.

export const account = new Account(client);

//Database
export const databases = new Databases(client);

//storage
export const storage = new Storage(client);
