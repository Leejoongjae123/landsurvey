import Image from "next/image";
import Survey from "@/app/components/Survey";
import React from "react";
import { Button } from "@nextui-org/react";
import Introduction from "@/app/components/Introduction";

export default function Home() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:pt-16 lg:px-12">
          
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Real Estate Agile
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
      </section>
      <Introduction></Introduction>
      <Survey></Survey>
    </>
  );
}
