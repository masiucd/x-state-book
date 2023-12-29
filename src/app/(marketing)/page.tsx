import {PageWrapper} from "@/components/page-wrapper";
import {H1, H2, Paragraph} from "@/components/typography";

export default function Home() {
  return (
    <PageWrapper>
      <div className="flex flex-1 flex-col justify-center gap-1 border border-red-500">
        <H1>
          <span className="relative p-[2px]  after:absolute after:inset-0 after:z-[-1] after:w-full after:rotate-6 after:rounded-[0.25rem] after:bg-main-200 after:shadow-md after:content-['']">
            X-state
          </span>{" "}
          stuff
        </H1>
        <H2>
          <span className="text-main-500">X state</span> is a library for
          creating, interpreting, and executing finite state machines and
          statecharts.
        </H2>
        <Paragraph>
          This is a collection of examples and patterns for using{" "}
          <a
            href="https://xstate.js.org/docs/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative p-[5px] underline decoration-gray-800 underline-offset-4 after:absolute after:inset-0 after:z-[-1] after:w-full after:rotate-[-5deg] after:rounded-[0.25rem] after:bg-main-200 after:shadow-md after:content-['']"
          >
            X state
          </a>{" "}
          in React.
        </Paragraph>
      </div>
    </PageWrapper>
  );
}
