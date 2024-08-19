"use client";

import { courses } from "@/db/schema";
import { Card } from "@/components/card";

type Course = typeof courses.$inferSelect;

type Props = {
  course: Course[];
  activeCourseId: number;
};

export const List = ({ course, activeCourseId }: Props) => {
  return (
    <div className="pt-6 gap-3 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))]">
      {course.map((course) => (
        <Card
          key={course.id}
          id={course.id}
          title={course.title}
          imageSrc={course.imageSrc}
          onClick={() => {}}
          disabled={false}
          active={course.id === activeCourseId}
        />
      ))}
    </div>
  );
};
