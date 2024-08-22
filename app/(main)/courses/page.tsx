import { List } from "@/components/list-component";
import { getCourses, getUserProgress } from "@/db/queries";

const CoursesPage = async () => {
  const courses = await getCourses();
  const userProgress = await getUserProgress();
  return (
    <div className="h-full mx-auto max-w-[912px] px-3 ">
      <h1 className="text-wcl font-bold text-neutral-700">Langauge Courses</h1>
      <List course={courses} activeCourseId={userProgress?.activeCourseId} />
      {/* {JSON.stringify(data)} */}
    </div>
  );
};

export default CoursesPage;
