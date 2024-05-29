'use client'
import { useEffect,useState } from "react";
import Image from "next/image";
import Survey from "@/app/components/Survey";
import { Button } from "@nextui-org/react";
import Introduction from "@/app/components/Introduction";
import { Select, SelectItem } from "@nextui-org/react";
import Language from "../app/components/Lauguage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams=useSearchParams().get('login')

  const notify = (message) => toast(message);

  useEffect(()=>{
    if(searchParams==='success'){
      notify("Signin Success")
    }
    
  },[])
  

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
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:pt-16 lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            We'll Find the Space For You!
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Let Us Help You Discover Your Perfect Rental or Buy
          </p>
        </div>
      </section>
      <Introduction></Introduction>
      <Language></Language>
      <Survey></Survey>
    </>
  );
}
