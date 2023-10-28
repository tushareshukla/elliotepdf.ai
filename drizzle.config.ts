import type { Config } from "drizzle-kit";
// Import the dotenv package to load environment variables.
import * as dotenv from "dotenv";
// Load the environment variables from the .env file.
dotenv.config({path: ".env"});

export default {
  // The type of database to use.
  driver: "pg",
  // The path to the TypeScript file that contains the Drizzle schema.
  schema: "./src/lib/db/schema.ts",
  // An array of objects that contain the credentials for connecting to the database.
  dbCredentials: 
    {
      // The database URL.
      connectionString: process.env.DATABASE_URL!,
    },
}satisfies Config;



/*import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env" });

export default {
  driver: "pg",
  schema: "./src/lib/db/schema.ts",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
} satisfies Config;*/
