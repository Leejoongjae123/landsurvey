"use client";
import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client"; // 상대 경로는 프로젝트 구조에 따라 다를 수 있음
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
export default function page({searchParams}) {
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  
  const router = useRouter();
  const supabaseClient = createClient();

  const notify = (message) => toast(message);

  const handleChange = async () => {
    // event.preventDefault(); // 폼 제출 기본 동작 방지

    if(password1===password2){
      if (password1.length<=5){
        setError("6자리 이상 비밀번호를 입력하세요")
      }else{      
        const { data, error } = await supabaseClient.auth.updateUser({
          password: password2
        })
    
        if (error) {
          return router.push("/reset?message=Unable to reste Password. Try again!");
        }
        router.push('/?login=success')
      }

      
    } else{
      setError("비밀번호가 다릅니다.")
    }
    


  };

  return (
    <>
      <Suspense>
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
      </Suspense>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Change your Password
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                password
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="password"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setPassword1(e.target.value)}
                  value={password1}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  confirm your password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setPassword2(e.target.value)}
                  value={password2}
                />
              </div>
            </div>

            <div>
              <button
                type="button"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleChange}
              >
                Change password
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
