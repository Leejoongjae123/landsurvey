"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/react";
import { DatePicker } from "@nextui-org/react";
import { Slider } from "@nextui-org/react";
import { useState } from "react";

function Survey() {
  const [number, setNumber] = useState(0);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Share Your Real Estate Details with Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Tell Us What You Want in Your Ideal Property
        </p>
        <form action="#" className="space-y-8">
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <div>❓ 이름을 알려주세요</div>
            <Input type="email" label="Email" />
          </div>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <div>❓ 사이즈를 알려주세요</div>
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
            <div>❓ 날짜를 알려주세요</div>
            <div className="flex w-full ">
              <DatePicker label="Birth date" className="w-1/3" />
            </div>
          </div>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <div>❓ 원하시는 금액대를 알려주세요</div>
            <div className="flex w-full ">
              <div class="max-w-xs mx-auto">
                <div class="relative flex items-center max-w-[8rem]">
                  <button
                    type="button"
                    id="decrement-button"
                    data-input-counter-decrement="quantity-input"
                    class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                    onClick={() => setNumber(number - 1)}
                  >
                    <svg
                      class="w-3 h-3 text-gray-900 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 2"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 1h16"
                      />
                    </svg>
                  </button>
                  <input
                    type="text"
                    id="quantity-input"
                    data-input-counter
                    data-input-counter-min="1"
                    data-input-counter-max="50"
                    aria-describedby="helper-text-explanation"
                    class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="999"
                    value={number}
                    required
                  />
                  <button
                    type="button"
                    id="increment-button"
                    data-input-counter-increment="quantity-input"
                    class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                    onClick={() => setNumber(number + 1)}
                  >
                    <svg
                      class="w-3 h-3 text-gray-900 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 1v16M1 9h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
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
