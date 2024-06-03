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
import { Skeleton } from "@nextui-org/react";

function Survey({ selectedLanguage, agencyEmail }) {
  const [isLoading, setIsLoading] = useState(true);
  const [peopleNumber, setPeopleNumber] = useState(1);
  const [age, setAge] = useState(20);
  const [deposit, setDeposit] = useState(1000);
  const [rent, setRent] = useState(50);
  const [junseDeposit, setJunseDeposit] = useState(5000);
  const [salePrice, setSalePrice] = useState(10000);
  const [questions, setQuestions] = useState([]);
  const [sendData, setSendData] = useState({});
  const [email, setEmail] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2_1, setAnswer2_1] = useState("");
  const [answer2_2, setAnswer2_2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer5, setAnswer5] = useState("");
  const [answer6, setAnswer6] = useState("");
  const [answer7, setAnswer7] = useState([]);
  const [answer8, setAnswer8] = useState([]);
  const [answer9, setAnswer9] = useState([]);
  const [answer10, setAnswer10] = useState([]);
  const [answer11, setAnswer11] = useState("");
  const [answer12, setAnswer12] = useState("");
  const [answer13, setAnswer13] = useState("");
  const [answer14, setAnswer14] = useState([]);
  const [answer15, setAnswer15] = useState([]);
  const [answer16, setAnswer16] = useState([]);
  const [answer17, setAnswer17] = useState("");
  const [answer18, setAnswer18] = useState("");
  const [answer19, setAnswer19] = useState([]);
  const [answer20, setAnswer20] = useState([]);
  const [answer21, setAnswer21] = useState([]);
  const [answer22, setAnswer22] = useState([]);
  const [answer23, setAnswer23] = useState([]);


  const handleSend = () => {
    let data = {
      email: email,
      answer1: answer1,
      answer2_1: answer2_1,
      answer2_2: answer2_2,
      answer3: answer3,
      answer4: answer4,
      answer5: answer5,
      answer6: answer6,
      answer7: answer7.join(' / '),
      answer8: answer8.join(' / '),
      answer9: answer9.join(' / '),
      answer10: answer10.join(' / '),
      answer11: answer11,
      answer12: answer12,
      answer13: answer13,
      answer14: answer14.join(' / '),
      answer15: answer15.join(' / '),
      answer16: answer16.join(' / '),
      answer17: answer17,
      answer18: answer18,
      answer19: answer19.join(' / '),
      answer20: answer20.join(' / '),
      answer21: answer21.join(' / '),
      answer22: answer22.join(' / '),
      answer23: answer23.join(' / '),
      agencyEmail: agencyEmail,
    };
    console.log(data)
  };

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
      setIsLoading(false);
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
    let answerList;
    if (event.target.checked) {
      answerList = [...new Set([...answer7, event.target.value])];
    } else {
      answerList = answer7.filter((answer) => answer !== event.target.value);
    }
    setAnswer7(answerList);
  };

  const handleChange8 = (event) => {
    let answerList;
    if (event.target.checked) {
      answerList = [...new Set([...answer8, event.target.value])];
    } else {
      answerList = answer8.filter((answer) => answer !== event.target.value);
    }
    setAnswer8(answerList);
  };

  const handleChange9 = (event) => {
    let answerList;
    if (event.target.checked) {
      answerList = [...new Set([...answer9, event.target.value])];
    } else {
      answerList = answer9.filter((answer) => answer !== event.target.value);
    }
    setAnswer9(answerList);
  };
  const handleChange10 = (event) => {
    let answerList;
    if (event.target.checked) {
      answerList = [...new Set([...answer10, event.target.value])];
    } else {
      answerList = answer10.filter((answer) => answer !== event.target.value);
    }
    setAnswer10(answerList);
  };
  const handleChange14 = (event) => {
    let answerList;
    if (event.target.checked) {
      answerList = [...new Set([...answer14, event.target.value])];
    } else {
      answerList = answer14.filter((answer) => answer !== event.target.value);
    }
    setAnswer14(answerList);
  };
  const handleChange15 = (event) => {
    let answerList;
    if (event.target.checked) {
      answerList = [...new Set([...answer15, event.target.value])];
    } else {
      answerList = answer15.filter((answer) => answer !== event.target.value);
    }
    setAnswer15(answerList);
  };
  const handleChange16 = (event) => {
    let answerList;
    if (event.target.checked) {
      answerList = [...new Set([...answer16, event.target.value])];
    } else {
      answerList = answer16.filter((answer) => answer !== event.target.value);
    }
    setAnswer16(answerList);
  };
  const handleChange19 = (event) => {
    let answerList;
    if (event.target.checked) {
      answerList = [...new Set([...answer19, event.target.value])];
    } else {
      answerList = answer19.filter((answer) => answer !== event.target.value);
    }
    setAnswer19(answerList);
  };
  const handleChange20 = (event) => {
    let answerList;
    if (event.target.checked) {
      answerList = [...new Set([...answer20, event.target.value])];
    } else {
      answerList = answer20.filter((answer) => answer !== event.target.value);
    }
    setAnswer20(answerList);
  };
  const handleChange21 = (event) => {
    let answerList;
    if (event.target.checked) {
      answerList = [...new Set([...answer21, event.target.value])];
    } else {
      answerList = answer21.filter((answer) => answer !== event.target.value);
    }
    setAnswer21(answerList);
  };

  const handleChange22 = (event) => {
    let answerList;
    if (event.target.checked) {
      answerList = [...new Set([...answer22, event.target.value])];
    } else {
      answerList = answer22.filter((answer) => answer !== event.target.value);
    }
    setAnswer22(answerList);
  };

  const handleChange23 = (event) => {
    let answerList;
    if (event.target.checked) {
      answerList = [...new Set([...answer23, event.target.value])];
    } else {
      answerList = answer23.filter((answer) => answer !== event.target.value);
    }
    setAnswer23(answerList);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-md">
        {/* <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Share Your Real Estate Details with Us
        </h2> */}
        {isLoading ? (
          <div className="max-w-[300px] w-full flex items-center gap-3 py-5">
            <div>
              <Skeleton className="flex rounded-full w-12 h-12" />
            </div>
            <div className="w-full flex flex-col gap-2">
              <Skeleton className="h-3 w-3/5 rounded-lg" />
              <Skeleton className="h-3 w-4/5 rounded-lg" />
            </div>
          </div>
        ) : (
          <div className="space-y-8 flex flex-col justify-center items-center">
            <div className="flex flex-col flex-wrap md:flex-nowrap gap-4 w-full md:w-1/2">
              <div className="flex justify-center items-center">
                Please enter your email to receive a reply.
              </div>
              <div className="flex justify-center items-center">
                <Input
                  value={email}
                  onChange={handleChangeEmail}
                  className="w-full"
                  type="email"
                  label="Email"
                />
              </div>
            </div>
            <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
              <div>Q1. {questions?.question1}</div>
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
              <div>Q2. {questions?.question2}</div>
              <div className="flex gap-4 flex-col items-baseline">
                <RadioGroup onChange={handleChange2_1}>
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
              <div>Q3. {questions?.question3}</div>
              <div className="flex w-full ">
                <RadioGroup onChange={handleChange3}>
                  <Radio value="학생">{questions?.answer3?.answer1}</Radio>
                  <Radio value="직장인">{questions?.answer3?.answer2}</Radio>
                  <Radio value="사업자">{questions?.answer3?.answer3}</Radio>
                </RadioGroup>
              </div>
            </div>
            <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
              <div>Q4. {questions?.question4}</div>
              <div className="flex gap-4 flex-col items-baseline">
                <RadioGroup onChange={handleChange4}>
                  <Radio value="20~25">20~25</Radio>
                  <Radio value="25~30">25~30</Radio>
                  <Radio value="30~35">30~35</Radio>
                  <Radio value="35~45">35~45</Radio>
                  <Radio value="45~">45~</Radio>
                </RadioGroup>
              </div>
            </div>
            <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
              <div>Q5. {questions?.question5}</div>
              <NumberChanger
                number={deposit}
                setNumber={setDeposit}
                step={1000}
                setAnswer={setAnswer5}
              ></NumberChanger>
            </div>
            <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
              <div>Q6. {questions?.question6}</div>
              <NumberChanger
                number={rent}
                setNumber={setRent}
                step={10}
                setAnswer={setAnswer6}
              ></NumberChanger>
            </div>
            <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
              <div>Q7. {questions?.question7}</div>
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
                <Checkbox
                  value="저층이좋아요"
                  onChange={handleChange7}
                  size="md"
                >
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
              <div>Q8. {questions?.question8}</div>
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
              <div>Q9. {questions?.question9}</div>
              <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-4">
                <Checkbox onChange={handleChange9} size="md">
                  {questions?.answer9?.answer1}
                </Checkbox>
                <Checkbox onChange={handleChange9} size="md">
                  {questions?.answer9?.answer2}
                </Checkbox>
                <Checkbox onChange={handleChange9} size="md">
                  {questions?.answer9?.answer3}
                </Checkbox>
              </div>
            </div>
            <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
              <div>Q10. {questions?.question10}</div>
              <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-4">
                <Checkbox onChange={handleChange10} size="md">
                  {questions?.answer10?.answer1}
                </Checkbox>
                <Checkbox onChange={handleChange10} size="md">
                  {questions?.answer10?.answer2}
                </Checkbox>
                <Checkbox onChange={handleChange10} size="md">
                  {questions?.answer10?.answer3}
                </Checkbox>
                <Checkbox onChange={handleChange10} size="md">
                  {questions?.answer10?.answer4}
                </Checkbox>
              </div>
            </div>
            <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
              <div>Q11. {questions?.question11}</div>
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
              <div>Q12. {questions?.question12}</div>
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
              <div>Q13. {questions?.question13}</div>
              <NumberChanger
                number={junseDeposit}
                setNumber={setJunseDeposit}
                step={1000}
                setAnswer={setAnswer13}
              ></NumberChanger>
            </div>
            <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
              <div>Q14. {questions?.question14}</div>
              <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-4">
                <Checkbox onChange={handleChange14} value="아파트" size="md">
                  {questions?.answer14?.answer1}
                </Checkbox>
                <Checkbox onChange={handleChange14} value="다가구" size="md">
                  {questions?.answer14?.answer2}
                </Checkbox>
                <Checkbox onChange={handleChange14} value="빌라" size="md">
                  {questions?.answer14?.answer3}
                </Checkbox>
                <Checkbox onChange={handleChange14} value="오피스텔" size="md">
                  {questions?.answer14?.answer4}
                </Checkbox>
              </div>
            </div>
            <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
              <div>Q15. {questions?.question15}</div>
              <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-4">
                <Checkbox onChange={handleChange15} value="신축" size="md">
                  {questions?.answer15?.answer1}
                </Checkbox>
                <Checkbox onChange={handleChange15} value="구축" size="md">
                  {questions?.answer15?.answer2}
                </Checkbox>
                <Checkbox
                  onChange={handleChange15}
                  value="구축리모델링"
                  size="md"
                >
                  {questions?.answer15?.answer3}
                </Checkbox>
              </div>
            </div>
            <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
              <div>Q16. {questions?.question16}</div>
              <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-4">
                <Checkbox
                  onChange={handleChange16}
                  value="방1(화장실+욕실)1    오픈형 원룸"
                  size="md"
                >
                  {questions?.answer16?.answer1}
                </Checkbox>
                <Checkbox
                  onChange={handleChange16}
                  value="방1 (화장실+욕실)1 부엌 (분리형원룸)"
                  size="md"
                >
                  {questions?.answer16?.answer2}
                </Checkbox>
                <Checkbox
                  onChange={handleChange16}
                  value="방2 (화장실+욕실)1  거실  부엌"
                  size="md"
                >
                  {questions?.answer16?.answer3}
                </Checkbox>
                <Checkbox
                  onChange={handleChange16}
                  value="방3  (화장실+욕실)2 거살  부엌"
                  size="md"
                >
                  {questions?.answer16?.answer4}
                </Checkbox>
              </div>
            </div>
            <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
              <div>Q17. {questions?.question17}</div>
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
              <div>Q18. {questions?.question18}</div>
              <NumberChanger
                number={salePrice}
                setNumber={setSalePrice}
                step={1000}
                setAnswer={setAnswer18}
              ></NumberChanger>
            </div>
            <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
              <div>Q19. {questions?.question19}</div>
              <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-4">
                <Checkbox onChange={handleChange19} value="아파트" size="md">
                  {questions?.answer19?.answer1}
                </Checkbox>
                <Checkbox onChange={handleChange19} value="다가구" size="md">
                  {questions?.answer19?.answer2}
                </Checkbox>
                <Checkbox onChange={handleChange19} value="빌라" size="md">
                  {questions?.answer19?.answer3}
                </Checkbox>
                <Checkbox onChange={handleChange19} value="오피스텔" size="md">
                  {questions?.answer19?.answer4}
                </Checkbox>
              </div>
            </div>
            <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
              <div>Q20. {questions?.question20}</div>
              <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-4">
                <Checkbox onChange={handleChange20} value="아파트" size="md">
                  {questions?.answer20?.answer1}
                </Checkbox>
                <Checkbox onChange={handleChange20} value="다가구" size="md">
                  {questions?.answer20?.answer2}
                </Checkbox>
                <Checkbox onChange={handleChange20} value="빌라" size="md">
                  {questions?.answer20?.answer3}
                </Checkbox>
                <Checkbox onChange={handleChange20} value="오피스텔" size="md">
                  {questions?.answer20?.answer4}
                </Checkbox>
                <Checkbox onChange={handleChange20} value="분양권" size="md">
                  {questions?.answer20?.answer5}
                </Checkbox>
                <Checkbox onChange={handleChange20} value="갭투자" size="md">
                  {questions?.answer20?.answer6}
                </Checkbox>
              </div>
            </div>
            <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
              <div>Q21. {questions?.question21}</div>
              <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-4">
                <Checkbox onChange={handleChange21} value="아파트" size="md">
                  {questions?.answer21?.answer1}
                </Checkbox>
                <Checkbox onChange={handleChange21} value="다가구" size="md">
                  {questions?.answer21?.answer2}
                </Checkbox>
                <Checkbox onChange={handleChange21} value="빌라" size="md">
                  {questions?.answer21?.answer3}
                </Checkbox>
                <Checkbox onChange={handleChange21} value="오피스텔" size="md">
                  {questions?.answer21?.answer4}
                </Checkbox>
              </div>
            </div>
            <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
              <div>Q22. {questions?.question22}</div>
              <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-4">
                <Checkbox onChange={handleChange22} value="신축" size="md">
                  {questions?.answer22?.answer1}
                </Checkbox>
                <Checkbox onChange={handleChange22} value="구축" size="md">
                  {questions?.answer22?.answer2}
                </Checkbox>
                <Checkbox
                  onChange={handleChange22}
                  value="구축리모델링"
                  size="md"
                >
                  {questions?.answer22?.answer3}
                </Checkbox>
              </div>
            </div>
            <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
              <div>Q23. {questions?.question23}</div>
              <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-4">
                <Checkbox
                  onChange={handleChange23}
                  value="방1 (화장실+욕실) 1   (오픈형원룸)"
                  size="md"
                >
                  {questions?.answer23?.answer1}
                </Checkbox>
                <Checkbox
                  onChange={handleChange23}
                  value="방1 (화장실+욕실)1 부엌 (분리형원룸)"
                  size="md"
                >
                  {questions?.answer23?.answer2}
                </Checkbox>
                <Checkbox
                  onChange={handleChange23}
                  value="방2 (화장실+욕실)1 거실 부엌"
                  size="md"
                >
                  {questions?.answer23?.answer3}
                </Checkbox>
                <Checkbox
                  onChange={handleChange23}
                  value="방3 (화장실+욕실)2 거살 부엌"
                  size="md"
                >
                  {questions?.answer23?.answer4}
                </Checkbox>
              </div>
            </div>

            <div className="flex justify-center">
              <Button onClick={() => handleSend()} className="w-1/5" color="primary">
                Send
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Survey;
