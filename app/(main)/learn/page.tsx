import { redirect } from "next/navigation";
import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import React from "react";
import { Header } from "./Header";
import { UserProgress } from "@/components/userProgress";
import { getUserProgress } from "@/db/queries";

const Learn = async () => {
  const userProgressData = getUserProgress();
  const [userProgress] = await Promise.all([userProgressData]);
  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={{ title: "Spanish", imageSrc: "/hn.svg" }}
          hearts={5}
          points={100}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title="Spanish" />
        <div className="space-y-4">
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
        </div>
      </FeedWrapper>
    </div>
  );
};

export default Learn;
