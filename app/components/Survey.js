"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/react";
import { DatePicker } from "@nextui-org/react";
import { Slider } from "@nextui-org/react";
import { useState } from "react";
import { RadioGroup, Radio } from "@nextui-org/react";
import NumberChanger from "./NumberChanger";

function Survey() {
  const [peopleNumber, setPeopleNumber] = useState(1);
  const [age, setAge] = useState(20);
  const [deposit, setDeposit] = useState(1000);
  const [rent, setRent] = useState(50);
  const [junseDeposit, setJunseDeposit] = useState(5000);
  const [salePrice, setSalePrice] = useState(10000);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-md">
        {/* <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Share Your Real Estate Details with Us
        </h2> */}

        <div className="space-y-8 flex flex-col justify-center items-center">
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <div>❓ 입주 가능일</div>
            <div className="flex w-full">
              <DatePicker className="w-1/2 md:w-1/3" />
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
            <div>❓ 당신의 성별과 거주인원</div>
            <div className="flex gap-4 flex-col items-baseline">
              <RadioGroup defaultValue="남">
                <Radio value="남">남</Radio>
                <Radio value="여">여</Radio>
              </RadioGroup>
              <NumberChanger
                number={peopleNumber}
                setNumber={setPeopleNumber}
              ></NumberChanger>
            </div>
          </div>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <div>❓ 당신의 상태는</div>
            <div className="flex w-full ">
              <RadioGroup defaultValue="학생">
                <Radio value="학생">학생</Radio>
                <Radio value="직장인">직장인</Radio>
                <Radio value="사업자">사업자</Radio>
              </RadioGroup>
            </div>
          </div>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <div>❓ 당신의 나이는</div>
            <div className="flex gap-4 flex-col items-baseline">
              <RadioGroup defaultValue="남">
                <Radio value="20">20~25</Radio>
                <Radio value="25">25~30</Radio>
                <Radio value="30">30~35</Radio>
                <Radio value="35">35~45</Radio>
                <Radio value="45">45~</Radio>
              </RadioGroup>
            </div>
          </div>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <div>❓ 당신이 지불할 보증금은</div>
            <NumberChanger
              number={deposit}
              setNumber={setDeposit}
              step={1000}
            ></NumberChanger>
          </div>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <div>❓ 당신이 지불할 월세는</div>
            <NumberChanger number={rent} setNumber={setRent}step={10}></NumberChanger>
          </div>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <div>❓ 당신이 원하는 방의 모습</div>
            <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-4">
              <Checkbox size="md">제일 싼방을 보여주세요</Checkbox>
              <Checkbox size="md">금액에 상관 없이 좋은방을 찾아요</Checkbox>
              <Checkbox size="md">혼자살기 적당한방을 찾아요</Checkbox>
              <Checkbox size="md">지하철역이 가까왔으면 좋갰어요</Checkbox>
              <Checkbox size="md">깨끗한방을 찾아요</Checkbox>
              <Checkbox size="md">저층이좋아요</Checkbox>
              <Checkbox size="md">고층이 좋아요</Checkbox>
              <Checkbox size="md">주차장이 있어야해요</Checkbox>
              <Checkbox size="md">조용한 곳이 좋아요</Checkbox>
              <Checkbox size="md">
                해가 잘들어오고 환기가 잘되는 곳이 좋아요
              </Checkbox>
              <Checkbox size="md">대학교와 가까운 곳이면 좋겠어요 </Checkbox>
            </div>
          </div>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <div>❓ 방의 형태</div>
            <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-4">
              <Checkbox size="md">방1 (화장실+욕실) 1 (오픈형원룸)</Checkbox>
              <Checkbox size="md">
                방1 (화장실+욕실)1 부엌 (분리형원룸)
              </Checkbox>
              <Checkbox size="md">방2 (화장실+욕실)1 거실 부엌</Checkbox>
              <Checkbox size="md">방3 (화장실+욕실)2 거살 부엌</Checkbox>
            </div>
          </div>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <div>❓ 집의 상태</div>
            <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-4">
              <Checkbox size="md">신축</Checkbox>
              <Checkbox size="md">구축</Checkbox>
              <Checkbox size="md">구축 리모델링</Checkbox>
            </div>
          </div>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <div>❓ 주거형태</div>
            <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-4">
              <Checkbox size="md">아파트</Checkbox>
              <Checkbox size="md">다가구</Checkbox>
              <Checkbox size="md">빌라</Checkbox>
              <Checkbox size="md">오피스텔</Checkbox>
            </div>
          </div>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <div>❓ 입주가능일</div>
            <div className="flex w-full ">
              <DatePicker className="w-1/2 md:w-1/3" />
            </div>
          </div>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <div>❓ 입주확정일</div>
            <div className="flex w-full ">
            <DatePicker className="w-1/2 md:w-1/3" />
            </div>
          </div>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <div>❓ 전세보증금</div>
            <NumberChanger
              number={junseDeposit}
              setNumber={setJunseDeposit}
              step={1000}
            ></NumberChanger>
          </div>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <div>❓ 주거형태</div>
            <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-4">
              <Checkbox size="md">아파트</Checkbox>
              <Checkbox size="md">다가구</Checkbox>
              <Checkbox size="md">빌라</Checkbox>
              <Checkbox size="md">오피스텔</Checkbox>
            </div>
          </div>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <div>❓ 집의 상태</div>
            <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-4">
              <Checkbox size="md">신축</Checkbox>
              <Checkbox size="md">구축</Checkbox>
              <Checkbox size="md">구축 리모델링</Checkbox>
            </div>
          </div>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <div>❓ 집의 형태</div>
            <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-4">
              <Checkbox size="md">방1 (화장실+욕실) 1 (오픈형원룸)</Checkbox>
              <Checkbox size="md">
                방1 (화장실+욕실)1 부엌 (분리형원룸)
              </Checkbox>
              <Checkbox size="md">방2 (화장실+욕실)1 거실 부엌</Checkbox>
              <Checkbox size="md">방3 (화장실+욕실)2 거살 부엌</Checkbox>
            </div>
          </div>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <div>❓ 매매가능일</div>
            <div className="flex w-full ">
            <DatePicker className="w-1/2 md:w-1/3" />
            </div>
          </div>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <div>❓ 매매가능금액</div>
            <NumberChanger number={salePrice} setNumber={setSalePrice} step={1000}></NumberChanger>
          </div>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <div>❓ 주거형태</div>
            <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-4">
              <Checkbox size="md">아파트</Checkbox>
              <Checkbox size="md">다가구</Checkbox>
              <Checkbox size="md">빌라</Checkbox>
              <Checkbox size="md">오피스텔</Checkbox>
            </div>
          </div>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <div>❓ 주택투자용</div>
            <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-4">
              <Checkbox size="md">아파트</Checkbox>
              <Checkbox size="md">다가구</Checkbox>
              <Checkbox size="md">빌라</Checkbox>
              <Checkbox size="md">오피스텔</Checkbox>
              <Checkbox size="md">분양권</Checkbox>
              <Checkbox size="md">갭투자</Checkbox>
            </div>
          </div>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <div>❓ 주택임대용</div>
            <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-4">
              <Checkbox size="md">아파트</Checkbox>
              <Checkbox size="md">다가구</Checkbox>
              <Checkbox size="md">빌라</Checkbox>
              <Checkbox size="md">오피스텔</Checkbox>
            </div>
          </div>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <div>❓ 집의상태</div>
            <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-4">
              <Checkbox size="md">신축</Checkbox>
              <Checkbox size="md">구축</Checkbox>
              <Checkbox size="md">구축 리모델링</Checkbox>
            </div>
          </div>
          <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
            <div>❓ 집의형태</div>
            <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-4">
              <Checkbox size="md">방1 (화장실+욕실) 1 (오픈형원룸)</Checkbox>
              <Checkbox size="md">
                방1 (화장실+욕실)1 부엌 (분리형원룸)
              </Checkbox>
              <Checkbox size="md">방2 (화장실+욕실)1 거실 부엌</Checkbox>
              <Checkbox size="md">방3 (화장실+욕실)2 거살 부엌</Checkbox>
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
