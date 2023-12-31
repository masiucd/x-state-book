"use client";
import {useMachine} from "@xstate/react";

import {H2} from "@/components/typography";
import {cn} from "@/lib/styles";

import {toggleMachine} from "./machine";

export default function Toggle() {
  let [snapShot, send] = useMachine(toggleMachine);
  let {value} = snapShot;
  return (
    <div className=" flex flex-col items-center justify-center gap-2 bg-green-300 px-2 py-5">
      <H2 className=" text-2xl">
        State is = <span>{value as string}</span>
      </H2>
      <Bulb
        className={
          value === "inactive"
            ? "rotate-2 bg-transparent"
            : "fill-yellow-500 stroke-gray-950"
        }
      />
      <button
        className="relative rounded-sm border border-gray-500 bg-gray-50 px-2 py-1 text-sm font-semibold transition-opacity duration-75 hover:opacity-45 active:top-1 active:ring-2 active:ring-gray-900"
        onClick={() => {
          send({type: "TOGGLE"});
        }}
      >
        {snapShot.value === "inactive" ? "Off" : "On"}
      </button>
    </div>
  );
}

function Bulb({className}: {className?: string}) {
  return (
    <svg
      className={cn("h-24 w-24 ", className)}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      ></path>
    </svg>
  );
}
