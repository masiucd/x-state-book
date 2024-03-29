import {PageWrapper} from "@/components/page-wrapper";
import {H1, H2, Paragraph} from "@/components/typography";

import {Machines} from "./machines";

export default function Home() {
  return (
    <PageWrapper>
      <div className="relative flex flex-1 flex-col justify-center gap-1 text-balance bg-shape bg-auto bg-center  bg-no-repeat md:bg-undraw">
        <div className="flex flex-col gap-1 bg-gray-950/60 p-2 text-gray-200">
          <H1>
            <span className="relative after:absolute after:bottom-3 after:left-0 after:z-[-1]  after:h-5 after:w-full after:rotate-1 after:rounded-[0.25rem] after:bg-main-200 after:shadow-md after:content-['']">
              X-state
            </span>{" "}
            stuff
          </H1>
          <H2>
            <span className="text-main-500">X-state</span> is a library for
            creating, interpreting, and executing finite state machines and
            statecharts.
          </H2>
          <Paragraph>
            This is a collection of examples and patterns for using{" "}
            <a
              href="https://xstate.js.org/docs/"
              target="_blank"
              rel="noopener noreferrer"
              className=" relative p-[5px] font-semibold underline decoration-main-400 underline-offset-4 after:absolute after:inset-0 after:z-[-1] after:w-full after:rotate-[-5deg] after:rounded-[0.25rem] after:bg-main-200 after:shadow-md after:content-[''] hover:text-main-400 hover:decoration-gray-200"
            >
              X state
            </a>{" "}
            in React.
          </Paragraph>
        </div>
      </div>
      <Machines />
    </PageWrapper>
  );
}
