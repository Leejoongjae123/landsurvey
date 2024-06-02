"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Survey from "@/app/components/Survey";
import { Button } from "@nextui-org/react";
import Introduction from "@/app/components/Introduction";
import { Select, SelectItem } from "@nextui-org/react";
import Language from "../app/components/Lauguage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import LoginNotifier from "@/app/components/LoginNotifier";
import { createClient } from "@/utils/supabase/client";
export default function Home() {
  const [businescardUrl, setBusinescardUrl] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("korean");
  const supabase = createClient();

  const getBusinessCardUrl = async (businescardUrl) => {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", businescardUrl)
      .single();
    if (error) {
      console.log(error);
    }
    console.log("data:", data);
    setBusinescardUrl(data.avatarUrl);
    setIntroduction(data.introduction);
    setIsLoading(true);
  };

  return (
    <>
      <ToastContainer
        position="top-right" // 알람 위치 지정
        autoClose={1000} // 자동 off 시간
        hideProgressBar={false} // 진행시간바 숨김
        closeOnClick // 클릭으로 알람 닫기
        rtl={false} // 알림 좌우 반전
        pauseOnFocusLoss // 화면을 벗어나면 알람 정지
        draggable // 드래그 가능
        pauseOnHover // 마우스를 올리면 알람 정지
        theme="light"
        // limit={1} // 알람 개수 제한
      />
      <Suspense fallback={<div>Loading...</div>}>
        <LoginNotifier
          businescardUrl={businescardUrl}
          setBusinescardUrl={setBusinescardUrl}
          getBusinessCardUrl={getBusinessCardUrl}
        />
      </Suspense>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:pt-16 lg:px-12 flex flex-col items-center justify-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            We'll Find the Space For You!
          </h1>
          {/* <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Let Us Help You Discover Your Perfect Rental or Buy
          </p> */}
          <p className="font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Tell Us What You Want in Your Ideal Property
          </p>
        </div>
      </section>

      <Language
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      ></Language>
      <Survey selectedLanguage={selectedLanguage}></Survey>
      <Introduction
        isLoading={isLoading}
        businescardUrl={businescardUrl}
        introduction={introduction}
      ></Introduction>
    </>
  );
}
