# NOTE APP

This is an Note Web App project built using React.js + Vite, Appwrite BaaS, and ShadCn UI. It aims to provide a modern and responsive platform for taking notes.

## Features

- **Note Listings**: Your notes will be fetched from Appwrite DB.
- **Note Details**: View details such as heading, catergory, date etc.
- **Note Update**: You have the freedom to update the notes.
- **Move to Trash**: There is a trash view to move your Notes to Trash
- **Delete**: You can delete the notes permanently as well from trash.
- **User Authentication**: Secure user authentication powered by Appwrite BaaS.
- **Responsive Design**: Optimized for various screen sizes using Tailwind CSS.

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **Appwrite BaaS (Backend as a Service)**: Provides user authentication, database, and storage functionalities.
- **Shadcn**: Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.

## Installation

1. **Clone the repository:**

2. **Install dependencies:**

   ```bash
   cd ecom-react-appwrite
   npm install
   ```

3. **Set up Appwrite :**
   - Sign up for an account on [Appwrite](https://appwrite.io/).
   - Create a new project and set up authentication, database, and storage according to your requirements.
   - Obtain the API keys, collection ID, and endpoint URLs required for authentication and database access.

### Appwrite Database Schema

#### Collections

##### Users

- **Fields**:
  - `id` (string): Unique identifier for the user.
  - `name` (string): Name of the user.
  - `email` (string): Email address of the user.
  - `phoneNum`
  - `password`

4. **Configure environment variables:**

   - Change the AppWrite configuration in appwrite/appwriteConfig.js file.

   ```bash
       import { Client, Account, Databases, Storage } from "appwrite";
       //set endpoint
       const client = new Client();

       client
       .setEndpoint("https://cloud.appwrite.io/v1")
       .setProject("your-appwrite-projec-id"); // add your appwrite project id here

       export const account = new Account(client);

       //Database
       export const databases = new Databases(client);

       //storage
       export const storage = new Storage(client);

       //notes-collection
       export const collectionID = "your-note-collection-id";
       export const dbID = "your-note-db-id";
   ```

5. **Start the development server:**

   ```bash
   npm run dev
   ```

6. **Open [http://localhost:XXXX](http://localhost:XXXX) in your browser to view the application. (XXXX is your port no.)**

## Contributing

Contributions are welcome! Cheers 🥂
