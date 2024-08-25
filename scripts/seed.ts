import "dotenv/config";

import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("seeding database");
    await db.delete(schema.courses);
    await db.delete(schema.userProgress);

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Crotian",
        imageSrc: "/cr.svg",
      },
      {
        id: 2,
        title: "German",
        imageSrc: "/gr.svg",
      },
      {
        id: 3,
        title: "Hungrian",
        imageSrc: "/hn.svg",
      },
      {
        id: 4,
        title: "Malta",
        imageSrc: "/ml.svg",
      },
      {
        id: 5,
        title: "English",
        imageSrc: "/uk.svg",
      },
    ]);
  } catch (e) {
    console.log(e);
    throw new Error("Failed to seed the database");
  }
};

main();
