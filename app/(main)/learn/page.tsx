import { redirect } from "next/navigation";
import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import React from "react";
import { Header } from "./Header";
import { UserProgress } from "@/components/userProgress";
import { getunits, getUserProgress } from "@/db/queries";

const Learn = async () => {
  const userProgressData = getUserProgress();
  const unitsData = getunits();
  const [userProgress, units] = await Promise.all([
    userProgressData,
    unitsData,
  ]);
  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress?.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title={userProgress?.activeCourse?.title} />
        {units?.map((unit) => (
          <div key={unit.id} className="mb-10">
            {JSON.stringify(unit)}
          </div>
        ))}
        {/* <div className="space-y-4">
          <div className="h-[700px] bg-blue-500 w-full"></div>
          <div className="h-[700px] bg-blue-500 w-full"></div>
          <div className="h-[700px] bg-blue-500 w-full"></div>
          <div className="h-[700px] bg-blue-500 w-full"></div>
          <div className="h-[700px] bg-blue-500 w-full"></div>
          <div className="h-[700px] bg-blue-500 w-full"></div>
          <div className="h-[700px] bg-blue-500 w-full"></div>

          <div className="h-[700px] bg-blue-500 w-full"></div>
          <div className="h-[700px] bg-blue-500 w-full"></div>
          <div className="h-[700px] bg-blue-500 w-full"></div>
          <div className="h-[700px] bg-blue-500 w-full"></div>
          <div className="h-[700px] bg-blue-500 w-full"></div>
        </div> */}
      </FeedWrapper>
    </div>
  );
};

export default Learn;
