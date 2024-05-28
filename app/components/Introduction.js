import React from "react";

function Introduction() {
  return (
    <section className="bg-white dark:bg-gray-900 px-16 md:my-12">
      <div className="gap-8 max-w-screen-xl flex-col justify-center items-center mx-auto xl:gap-16 md:grid md:grid-cols-1 lg:px-6">
        <div className="flex justify-center items-center">
        <img
          className="w-full dark:hidden max-w-screen-sm"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
          alt="dashboard image"
        />
        </div>
        <div className="flex justify-center items-center">
        <div className="mt-4 md:mt-0 w-full justify-center items-center flex-col max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-9000 dark:text-white text-center">
            Let's create more tools and ideas that brings us together.
          </h2>
          <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400 text-center">
            Flowbite helps you connect with friends and communities of people
            who share your interests. Connecting with your friends and family as
            well as discovering new ones is easy with features like Groups.
          </p>
          
        </div>
        </div>
        
      </div>
    </section>
  );
}

export default Introduction;
