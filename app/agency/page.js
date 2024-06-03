"use client";
import React, { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client"; // 상대 경로는 프로젝트 구조에 따라 다를 수 있음
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { Input } from "@nextui-org/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Image, Link } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";

import axios from "axios";
function page() {
  const router = useRouter();
  const supabase = createClient();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [regionAddress, setRegionAddress] = useState("");
  const [regionStation, setRegionStation] = useState("");
  const [regionDong, setRegionDong] = useState("");
  const [regionUniv, setRegionUniv] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [myUrl, setMyUrl] = useState("");
  const [introduction, setIntroduction] = useState("");
  const signOut = async () => {
    await supabase.auth.signOut();
    setUser("");
  };

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session) {
          setIsLoggedIn(true);
          setUserId(session?.user?.id);
          setMyUrl("https://www.findhome.work/?id=" + session?.user?.id);
          // Fetch profile data based on userId
        } else {
          setIsLoggedIn(false);
        }
      }
    );
    // Clean up the subscription on unmount
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const goToSignIn = () => {
    router.push("/signin");
  };

  const notify = (message) => toast(message);
  const getInfos = async () => {
    let { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single();
    console.log("data:", data);
    if (error) {
      console.error("Error fetching profile:", error);
    } else {
      console.log("Profile data:", data);
      setName(data.username);
      setCompany(data.company);
      setRegionAddress(data.regionAddress);
      setRegionStation(data.regionStation);
      setRegionDong(data.regionDong);
      setRegionUniv(data.regionUniv);
      setImageUrl(data.avatarUrl);
      setIntroduction(data.introduction);
    }
  };
  useEffect(() => {
    if (userId !== "") {
      getInfos();
    }
  }, [userId]);
  const handleSubmit = async () => {
    const { data, error } = await supabase
      .from("profiles")
      .update({
        username: name,
        company: company,
        regionAddress: regionAddress,
        regionStation: regionStation,
        regionDong: regionDong,
        regionUniv: regionUniv,
        introduction: introduction,
      })
      .eq("id", userId);
    console.log(data);
    if (!error) {
      notify("update success");
    } else {
      notify("update failed");
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmitImage = async () => {
    if (file && name) {
      let { data, error } = await supabase.storage
        .from("businesscard")
        .upload(`${userId}_${getCurrentTimeString()}.jpg`, file, {
          upsert: true,
        });

      if (error) {
        console.error("Error uploading file:", error);
      } else {
        console.log("File uploaded successfully:", data);
        let { data: data2, error } = await supabase
          .from("profiles")
          .update({
            avatarUrl: `https://saeehnkthdubrcjpoest.supabase.co/storage/v1/object/public/${data.fullPath}`,
          })
          .eq("id", userId);

        notify("upload success");
      }
    }
  };

  const handleDownload = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://n3dt72xap2xe63vrms7sxbur6a0macjt.lambda-url.ap-northeast-2.on.aws/generate_qr",
        {
          params: { url: "https://www.findhome.work/?id=" + userId },
          headers: { accept: "application/json" },
          responseType: "blob", // 중요한 부분: 응답을 blob으로 설정
        }
      );
      // 파일 다운로드 처리
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `qr_code_${getCurrentTimeString()}.png`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error downloading the QR code:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <div
          id="updateProductModal"
          className="flex justify-center items-center flex-col"
        >
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
          <div className="p-4 w-full max-w-2xl h-full md:h-auto">
            <div className="p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
              <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Update Information(기본정보)
                </h3>
              </div>

              <div>
                <div className="grid gap-4 mb-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Name(이름)
                    </label>
                    <Input
                      type="text"
                      label=""
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="brand"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Company(상호)
                    </label>
                    <Input
                      type="text"
                      label=""
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="price"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Address(주소)
                    </label>
                    <Input
                      type="text"
                      label=""
                      value={regionAddress}
                      onChange={(e) => setRegionAddress(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="category"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Station nearby(가까운 역)
                    </label>
                    <Input
                      type="text"
                      label=""
                      value={regionStation}
                      onChange={(e) => setRegionStation(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="price"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      District(동)
                    </label>
                    <Input
                      type="text"
                      label=""
                      value={regionDong}
                      onChange={(e) => setRegionDong(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="category"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      University nearby(가까운 대학)
                    </label>
                    <Input
                      type="text"
                      label=""
                      value={regionUniv}
                      onChange={(e) => setRegionUniv(e.target.value)}
                    />
                  </div>
                </div>
                <div className="grid gap4 mb-4 sm:grid-cols-1">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Introduction(소개)
                    </label>
                    <Textarea
                      placeholder="Please introduce yourself"
                      className="flex"
                      value={introduction}
                      onChange={(e) => setIntroduction(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-4 justify-center">
                  <Button
                    onClick={handleSubmit}
                    color="primary"
                    type="submit"
                    className=""
                  >
                    Update
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 w-full max-w-2xl h-full md:h-auto">
            <div className="p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
              <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Update BusinessCard(명함)
                </h3>
              </div>

              <div>
                <div className="flex mb-4 justify-center">
                  <Image width={300} alt="NextUI hero Image" src={imageUrl} />
                </div>
                <div className="flex justify-center items-center space-x-6">
                  <div className="shrink-0"></div>
                  <label className="block">
                    <input
                      type="file"
                      className="block w-full text-sm text-slate-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-[0.5rem] file:border-0
                      file:text-sm file:font-semibold
                      file:bg-gray-800 file:text-white
                      hover:file:bg-gray-300
                      mb-[1rem]
                      "
                      onChange={handleFileChange}
                    />
                    
                  </label>
                </div>

                <div className="flex items-center space-x-4 justify-center">
                  <Button
                    onClick={handleSubmitImage}
                    color="primary"
                    type="submit"
                    className=""
                  >
                    Update
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 w-full max-w-2xl h-full md:h-auto">
            <div className="p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
              <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  QR Code
                </h3>
              </div>

              <div>
                <div className="flex justify-center items-center space-x-6">
                  <div className="shrink-0"></div>
                  <label className="block"></label>
                </div>

                <div className="flex items-center space-x-4 justify-center my-5">
                  <Button
                    onClick={handleDownload}
                    color="primary"
                    type="submit"
                    className=""
                  >
                    QR Download
                  </Button>
                </div>
              </div>
              <Link href={myUrl}>{myUrl}</Link>
            </div>
          </div>
        </div>
      ) : (
        <div
          id="info-popup"
          tabIndex="-1"
          className="flex justify-center items-center h-[30vh]"
        >
          <div className="relative p-4 w-full max-w-lg h-full md:h-auto">
            <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 md:p-8">
              <div className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
                <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                  Please Signin
                </h3>
                <p>Please Signin to continue.</p>
              </div>
              <div className="justify-between items-center pt-0 space-y-4 sm:flex sm:space-y-0">
                <div className="items-center space-y-4 sm:space-x-4 sm:flex sm:space-y-0">
                  <Button
                    color="primary"
                    id="confirm-button"
                    type="button"
                    className="py-2 px-4 w-full text-sm font-medium text-center text-white "
                    onClick={goToSignIn}
                  >
                    Go to Signin
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default page;

function getCurrentTimeString() {
  const now = new Date();

  // 시, 분, 초를 얻음
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // 두 자리 수로 포맷팅
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // 시간 문자열로 반환
  return `${hours}_${minutes}_${seconds}`;
}
