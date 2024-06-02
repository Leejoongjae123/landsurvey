"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/react";
import { DatePicker } from "@nextui-org/react";
import { Slider } from "@nextui-org/react";
import { RadioGroup, Radio } from "@nextui-org/react";
import NumberChanger from "./NumberChanger";
import axios from "axios";
import { useEffect, useState } from "react";

function Survey({ selectedLanguage }) {
  const [peopleNumber, setPeopleNumber] = useState(1);
  const [age, setAge] = useState(20);
  const [deposit, setDeposit] = useState(1000);
  const [rent, setRent] = useState(50);
  const [junseDeposit, setJunseDeposit] = useState(5000);
  const [salePrice, setSalePrice] = useState(10000);
  const [questions, setQuestions] = useState([]);

  const [answer1, setAnswer1] = useState(null);
  const [answer2_1, setAnswer2_1] = useState(null);
  const [answer2_2, setAnswer2_2] = useState(null);
  const [answer3, setAnswer3] = useState(null);
  const [answer4, setAnswer4] = useState(null);
  const [answer5, setAnswer5] = useState(null);
  const [answer6, setAnswer6] = useState(null);
  const [answer7, setAnswer7] = useState([]);
  const [answer8, setAnswer8] = useState(null);
  const [answer9, setAnswer9] = useState(null);
  const [answer10, setAnswer10] = useState(null);
  const [answer11, setAnswer11] = useState(null);
  const [answer12, setAnswer12] = useState(null);
  const [answer13, setAnswer13] = useState(null);
  const [answer14, setAnswer14] = useState(null);
  const [answer15, setAnswer15] = useState(null);
  const [answer16, setAnswer16] = useState(null);
  const [answer17, setAnswer17] = useState(null);
  const [answer18, setAnswer18] = useState(null);
  const [answer19, setAnswer19] = useState(null);
  const [answer20, setAnswer20] = useState(null);
  const [answer21, setAnswer21] = useState(null);
  const [answer22, setAnswer22] = useState(null);
  const [answer23, setAnswer23] = useState(null);

  const fetchData = async () => {
    const headers = {
      apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
      "Content-Type": "application/json",
    };

    const query = {
      select: "*",
      language: `eq.${selectedLanguage}`,
    };

    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/question`,
        {
          headers: headers,
          params: query,
        }
      );

      if (response.status === 200) {
        return response.data;
      } else {
        console.error(`Error: ${response.status} - ${response.statusText}`);
        return [];
      }
    } catch (error) {
      console.error(`Error: ${error}`);
      return [];
    }
  };

  useEffect(() => {
    const getQuestions = async () => {
      const data = await fetchData();
      setQuestions(data[0]);
    };

    getQuestions();
  }, [selectedLanguage]);

  const handleChange2_1 = (event) => {
    setAnswer2_1(event.target.value);
  };

  const handleChange3 = (event) => {
    setAnswer3(event.target.value);
  };

  const handleChange4 = (event) => {
    setAnswer4(event.target.value);
  };

  const handleChange7 = (event) => {
    console.log(event.target.value);
    const answerList = [...new Set([...answer7, event.target.value])];
    setAnswer7(answerList);
  };

  const handleChange8 = (event) => {
    console.log(event.target.value);
    const answerList = [...new Set([...answer7, event.target.value])];
    setAnswer7(answerList);
  };

  console.log(answer7);
  console.log(answer8);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-md">
        {/* <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Share Your Real Estate Details with Us
        </h2> */}

        <div className="space-y-8 flex flex-col justify-center items-center">
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <div>❓ {questions?.question1}</div>
            <div className="flex w-full">
              <DatePicker
                className="w-1/2 md:w-1/3"
                onChange={(e) => {
                  setAnswer1(`${e.year}년${e.month}월${e.day}일`);
                }}
              />
            </div>
            {/* <Input type="email" label="Email" /> */}
            {/* <Checkbox defaultSelected size="md">
                Medium
              </Checkbox>
              <Checkbox defaultSelected size="md">
                Medium
              </Checkbox>
              <Checkbox defaultSelected size="md">
                Medium
              </Checkbox> */}
          </div>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <div>❓ {questions?.question2}</div>
            <div className="flex gap-4 flex-col items-baseline">
              <RadioGroup defaultValue="남" onChange={handleChange2_1}>
                <Radio value="남">{questions?.answer2?.answer1}</Radio>
                <Radio value="여">{questions?.answer2?.answer2}</Radio>
              </RadioGroup>
              <NumberChanger
                number={peopleNumber}
                setNumber={setPeopleNumber}
                setAnswer={setAnswer2_2}
                step={1}
                onChange={(e) => {
                  setPeopleNumber(e.target.value);
                }}
              ></NumberChanger>
            </div>
          </div>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <div>❓ {questions?.question3}</div>
            <div className="flex w-full ">
              <RadioGroup defaultValue="학생" onChange={handleChange3}>
                <Radio value="학생">{questions?.answer3?.answer1}</Radio>
                <Radio value="직장인">{questions?.answer3?.answer2}</Radio>
                <Radio value="사업자">{questions?.answer3?.answer3}</Radio>
              </RadioGroup>
            </div>
          </div>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <div>❓ {questions?.question4}</div>
            <div className="flex gap-4 flex-col items-baseline">
              <RadioGroup defaultValue="20" onChange={handleChange4}>
                <Radio value="20">20~25</Radio>
                <Radio value="25">25~30</Radio>
                <Radio value="30">30~35</Radio>
                <Radio value="35">35~45</Radio>
                <Radio value="45">45~</Radio>
              </RadioGroup>
            </div>
          </div>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <div>❓ {questions?.question5}</div>
            <NumberChanger
              number={deposit}
              setNumber={setDeposit}
              step={1000}
              setAnswer={setAnswer5}
            ></NumberChanger>
          </div>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <div>❓ {questions?.question6}</div>
            <NumberChanger
              number={rent}
              setNumber={setRent}
              step={10}
              setAnswer={setAnswer6}
            ></NumberChanger>
          </div>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <div>❓ {questions?.question7}</div>
            <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-4">
              <Checkbox
                size="md"
                value="제일 싼방을 보여주세요"
                onChange={handleChange7}
              >
                {questions?.answer7?.answer1}
              </Checkbox>
              <Checkbox
                value="금액에 상관 없이 좋은방을 찾아요"
                onChange={handleChange7}
                size="md"
              >
                {questions?.answer7?.answer2}
              </Checkbox>
              <Checkbox
                value="혼자살기 적당한방을 찾아요"
                onChange={handleChange7}
                size="md"
              >
                {questions?.answer7?.answer3}
              </Checkbox>
              <Checkbox
                value="지하철역이 가까왔으면 좋갰어요"
                onChange={handleChange7}
                size="md"
              >
                {questions?.answer7?.answer4}
              </Checkbox>
              <Checkbox
                value="깨끗한방을 찾아요"
                onChange={handleChange7}
                size="md"
              >
                {questions?.answer7?.answer5}
              </Checkbox>
              <Checkbox value="저층이좋아요" onChange={handleChange7} size="md">
                {questions?.answer7?.answer6}
              </Checkbox>
              <Checkbox
                value="고층이 좋아요"
                onChange={handleChange7}
                size="md"
              >
                {questions?.answer7?.answer7}
              </Checkbox>
              <Checkbox
                value="주차장이 있어야해요"
                onChange={handleChange7}
                size="md"
              >
                {questions?.answer7?.answer8}
              </Checkbox>
              <Checkbox
                value="조용한 곳이 좋아요"
                onChange={handleChange7}
                size="md"
              >
                {questions?.answer7?.answer9}
              </Checkbox>
              <Checkbox
                value="해가 잘들어오고 환기가 잘되는 곳이 좋아요"
                onChange={handleChange7}
                size="md"
              >
                {questions?.answer7?.answer10}
              </Checkbox>
              <Checkbox
                value="대학교와 가까운 곳이면 좋겠어요"
                onChange={handleChange7}
                size="md"
              >
                {questions?.answer7?.answer11}
              </Checkbox>
            </div>
          </div>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <div>❓ {questions?.question8}</div>
            <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-4">
              <Checkbox
                onChange={handleChange8}
                value="방1 (화장실+욕실) 1   (오픈형원룸)"
                size="md"
              >
                {questions?.answer8?.answer1}
              </Checkbox>
              <Checkbox
                onChange={handleChange8}
                value="방1  (화장실+욕실)1 부엌  (분리형원룸)"
                size="md"
              >
                {questions?.answer8?.answer2}
              </Checkbox>
              <Checkbox
                onChange={handleChange8}
                value="방2 (화장실+욕실)1  거실  부엌"
                size="md"
              >
                {questions?.answer8?.answer3}
              </Checkbox>
              <Checkbox
                onChange={handleChange8}
                value="방3  (화장실+욕실)2 거살  부엌"
                size="md"
              >
                {questions?.answer8?.answer4}
              </Checkbox>
            </div>
          </div>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <div>❓ {questions?.question9}</div>
            <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-4">
              <Checkbox size="md">{questions?.answer9?.answer1}</Checkbox>
              <Checkbox size="md">{questions?.answer9?.answer2}</Checkbox>
              <Checkbox size="md">{questions?.answer9?.answer3}</Checkbox>
            </div>
          </div>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <div>❓ {questions?.question10}</div>
            <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-4">
              <Checkbox size="md">{questions?.answer10?.answer1}</Checkbox>
              <Checkbox size="md">{questions?.answer10?.answer2}</Checkbox>
              <Checkbox size="md">{questions?.answer10?.answer3}</Checkbox>
              <Checkbox size="md">{questions?.answer10?.answer4}</Checkbox>
            </div>
          </div>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <div>❓ {questions?.question11}</div>
            <div className="flex w-full ">
              <DatePicker
                className="w-1/2 md:w-1/3"
                onChange={(e) => {
                  setAnswer11(`${e.year}년${e.month}월${e.day}일`);
                }}
              />
            </div>
          </div>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <div>❓ {questions?.question12}</div>
            <div className="flex w-full ">
              <DatePicker
                className="w-1/2 md:w-1/3"
                onChange={(e) => {
                  setAnswer12(`${e.year}년${e.month}월${e.day}일`);
                }}
              />
            </div>
          </div>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <div>❓ {questions?.question13}</div>
            <NumberChanger
              number={junseDeposit}
              setNumber={setJunseDeposit}
              step={1000}
            ></NumberChanger>
          </div>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <div>❓ {questions?.question14}</div>
            <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-4">
              <Checkbox size="md">{questions?.answer14?.answer1}</Checkbox>
              <Checkbox size="md">{questions?.answer14?.answer2}</Checkbox>
              <Checkbox size="md">{questions?.answer14?.answer3}</Checkbox>
              <Checkbox size="md">{questions?.answer14?.answer4}</Checkbox>
            </div>
          </div>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <div>❓ {questions?.question15}</div>
            <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-4">
              <Checkbox size="md">{questions?.answer15?.answer1}</Checkbox>
              <Checkbox size="md">{questions?.answer15?.answer2}</Checkbox>
              <Checkbox size="md">{questions?.answer15?.answer3}</Checkbox>
            </div>
          </div>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <div>❓ {questions?.question16}</div>
            <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-4">
              <Checkbox size="md">{questions?.answer16?.answer1}</Checkbox>
              <Checkbox size="md">{questions?.answer16?.answer2}</Checkbox>
              <Checkbox size="md">{questions?.answer16?.answer3}</Checkbox>
              <Checkbox size="md">{questions?.answer16?.answer4}</Checkbox>
            </div>
          </div>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <div>❓ {questions?.question17}</div>
            <div className="flex w-full ">
              <DatePicker
                className="w-1/2 md:w-1/3"
                onChange={(e) => {
                  setAnswer17(`${e.year}년${e.month}월${e.day}일`);
                }}
              />
            </div>
          </div>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <div>❓ {questions?.question18}</div>
            <NumberChanger
              number={salePrice}
              setNumber={setSalePrice}
              step={1000}
            ></NumberChanger>
          </div>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <div>❓ {questions?.question19}</div>
            <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-4">
              <Checkbox size="md">{questions?.answer19?.answer1}</Checkbox>
              <Checkbox size="md">{questions?.answer19?.answer2}</Checkbox>
              <Checkbox size="md">{questions?.answer19?.answer3}</Checkbox>
              <Checkbox size="md">{questions?.answer19?.answer4}</Checkbox>
            </div>
          </div>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <div>❓ {questions?.question20}</div>
            <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-4">
              <Checkbox size="md">{questions?.answer20?.answer1}</Checkbox>
              <Checkbox size="md">{questions?.answer20?.answer2}</Checkbox>
              <Checkbox size="md">{questions?.answer20?.answer3}</Checkbox>
              <Checkbox size="md">{questions?.answer20?.answer4}</Checkbox>
              <Checkbox size="md">{questions?.answer20?.answer5}</Checkbox>
              <Checkbox size="md">{questions?.answer20?.answer6}</Checkbox>
            </div>
          </div>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <div>❓ {questions?.question21}</div>
            <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-4">
              <Checkbox size="md">{questions?.answer21?.answer1}</Checkbox>
              <Checkbox size="md">{questions?.answer21?.answer2}</Checkbox>
              <Checkbox size="md">{questions?.answer21?.answer3}</Checkbox>
              <Checkbox size="md">{questions?.answer21?.answer4}</Checkbox>
            </div>
          </div>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <div>❓ {questions?.question22}</div>
            <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-4">
              <Checkbox size="md">{questions?.answer22?.answer1}</Checkbox>
              <Checkbox size="md">{questions?.answer22?.answer2}</Checkbox>
              <Checkbox size="md">{questions?.answer22?.answer3}</Checkbox>
            </div>
          </div>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <div>❓ {questions?.question23}</div>
            <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-4">
              <Checkbox size="md">{questions?.answer23?.answer1}</Checkbox>
              <Checkbox size="md">{questions?.answer23?.answer2}</Checkbox>
              <Checkbox size="md">{questions?.answer23?.answer3}</Checkbox>
              <Checkbox size="md">{questions?.answer23?.answer4}</Checkbox>
            </div>
          </div>

          <div className="flex justify-center">
            <Button className="w-1/5" color="primary">
              Send
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Survey;
