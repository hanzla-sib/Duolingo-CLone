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

    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);

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
    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1, //spanish
        title: "Unit 1",
        description: "Learn the basics of Crotian",
        order: 1,
      },
    ]);
    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1,
        order: 1,
        title: "Nouns",
      },
      // {
      //   id: 2,
      //   unitId: 1,
      //   order: 2,
      //   title: "Verbs",
      // },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1, //nouns
        type: "SELECT",
        order: 1,
        question: 'Which one of these is the "the man"?',
      },
      // {
      //   id: 2,
      //   lessonId: 1, //verbs
      //   type: "SELECT",
      //   order: 1,
      //   question: 'Which one of these is the "the man"?',
      // },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        id: 1,
        challengeId: 1,
        imageSrc: "/man.svg",
        correct: true,
        text: "čovjek",
        audioSrc: "/es_man.mp3",
      },
    ]);

    console.log("seeding finished");
  } catch (e) {
    console.log(e);
    throw new Error("Failed to seed the database");
  }
};

main();
