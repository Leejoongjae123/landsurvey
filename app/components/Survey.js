"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/react";
import { DatePicker } from "@nextui-org/react";

function Survey() {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Tell me about your real estate needs
        </h2>
        <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <form action="#" class="space-y-8">
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <div>❓ what's your name?</div>
            <Input type="email" label="Email" />
          </div>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <div>❓ what's your name?</div>
            <div className="flex gap-4 justify-between">
              <Checkbox defaultSelected size="md">
                Medium
              </Checkbox>
              <Checkbox defaultSelected size="md">
                Medium
              </Checkbox>
              <Checkbox defaultSelected size="md">
                Medium
              </Checkbox>
            </div>
          </div>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <div>❓ What's your name?</div>
            <div className="flex w-full ">
              <DatePicker label="Birth date" className="w-1/3" />
            </div>
          </div>

          <div className="flex justify-center">
            <Button className="w-1/5" color="primary">
              Button
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Survey;
