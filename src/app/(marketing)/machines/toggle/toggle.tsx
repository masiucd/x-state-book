"use client";
import {useMachine} from "@xstate/react";

import {H2} from "@/components/typography";
import {cn} from "@/lib/styles";

import {toggleMachine} from "./machine";

export default function Toggle() {
  let [snapShot, send] = useMachine(toggleMachine);
  let {value} = snapShot;
  return (
    <div className="border">
      <H2>{value as string}</H2>
      <button
        onClick={() => {
          send({type: "TOGGLE"});
        }}
      >
        {snapShot.value === "inactive" ? "Off" : "On"}
      </button>
      <Bulb
        className={
          value === "inactive"
            ? "rotate-2 bg-transparent"
            : "fill-yellow-500 stroke-gray-950"
        }
      />
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
