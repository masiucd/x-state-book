import {revalidatePath} from "next/cache";
import {cookies} from "next/headers";
import Link from "next/link";
import * as v from "valibot";

import {icons} from "@/components/icons";
import {Paragraph, Strong} from "@/components/typography";
import {cn} from "@/lib/styles";

let MachineSchema = v.object({
  title: v.string(),
  description: v.string(),
  url: v.string(),
  blogUrl: v.string(),
  rating: v.number(),
  created: v.string(),
});

type MachineType = v.Input<typeof MachineSchema>;

let MachineData = Object.freeze([
  {
    title: "Toggle",
    description: "A simple toggle machine",
    url: "/machines/toggle",
    blogUrl: "/blog/toggle",
    rating: 5,
    created: "2023-09-01",
  },
  {
    title: "Pagination",
    description: "Using X-state to create a pagination component",
    url: "/machines/pagination",
    blogUrl: "/blog/pagination",
    rating: 3,
    created: "2023-10-12",
  },
  {
    title: "Fetch",
    description: "Fetch data from an API using X-state",
    url: "/machines/fetch",
    blogUrl: "/blog/fetch",
    rating: 5,
    created: "2023-10-22",
  },
  {
    title: "Form",
    description: "A form component using X-state",
    url: "/machines/form",
    blogUrl: "/blog/form",
    rating: 4,
    created: "2023-10-24",
  },
  {
    title: "Confirm Dialog",
    description: "A confirm dialog component using X-state",
    url: "/machines/confirm-dialog",
    blogUrl: "/blog/confirm-dialog",
    rating: 4,
    created: "2023-11-10",
  },
  {
    title: "Timer",
    description: "A timer component using X-state",
    url: "/machines/timer",
    blogUrl: "/blog/timer",
    rating: 2,
    created: "2023-11-22",
  },
  {
    title: "Movie order Wizard",
    description: "Order tickets to a movie using X-state",
    url: "/machines/movie-order-wizard",
    blogUrl: "/blog/movie-order-wizard",
    rating: 3,
    created: "2023-12-12",
  },
]);

async function setSortValue(formData: FormData) {
  "use server";
  let sort = formData.get("sort");
  let cookieStore = cookies();
  if (sort) {
    cookieStore.set("sort", String(sort));
  }
  revalidatePath("/");
}

async function getSortValue() {
  "use server";
  let cookieStore = cookies();
  let sort = cookieStore.get("sort");
  return sort?.value ?? "popular";
}

export async function Machines() {
  let sort = await getSortValue();
  return (
    <div className="px-2 md:px-0">
      <form
        className="flex items-center justify-end gap-3  px-1 py-2"
        action={setSortValue}
      >
        <Strong>Sort:</Strong>
        <button
          className={cn(
            "relative rounded-sm border border-gray-500 bg-gray-100 px-2 py-1 text-sm font-semibold transition-opacity duration-75 hover:opacity-45 active:top-1 active:ring-2 active:ring-gray-900",
            sort === "popular" && "bg-main-500 text-white"
          )}
          type="submit"
          name="sort"
          value="popular"
        >
          Popular
        </button>
        <button
          className={cn(
            "relative rounded-sm border border-gray-500 bg-gray-100 px-2 py-1 text-sm font-semibold transition-opacity duration-75 hover:opacity-45 active:top-1 active:ring-2 active:ring-gray-900",
            sort === "name" && "bg-main-500 text-white"
          )}
          type="submit"
          name="sort"
          value="name"
        >
          Name
        </button>
        <button
          className={cn(
            "relative rounded-sm border border-gray-500 bg-gray-100 px-2 py-1 text-sm font-semibold transition-opacity duration-75 hover:opacity-45 active:top-1 active:ring-2 active:ring-gray-900",
            sort === "created" && "bg-main-500 text-white"
          )}
          type="submit"
          name="sort"
          value="created"
        >
          Created
        </button>
      </form>
      <div className="my-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        <MachineItems sort={sort} />
      </div>
    </div>
  );
}

function MachineItems({sort = "popular"}: {sort?: string}) {
  let result = v.parse(v.array(MachineSchema), MachineData);
  switch (sort) {
    case "popular":
      return result
        .toSorted((a, b) => b.rating - a.rating)
        .map((machine) => <MachineItem key={machine.url} machine={machine} />);
    case "name":
      return result
        .toSorted((a, b) => a.title.localeCompare(b.title))
        .map((machine) => <MachineItem key={machine.url} machine={machine} />);
    case "created":
      return result
        .toSorted((a, b) => b.created.localeCompare(a.created))
        .map((machine) => <MachineItem key={machine.url} machine={machine} />);
    default:
      return null;
  }
}

function MachineItem({machine}: {machine: MachineType}) {
  return (
    <div
      key={machine.url}
      className="flex h-32  flex-col justify-between gap-1 rounded-sm border border-gray-200/50 bg-gray-50 p-2 shadow-md"
    >
      <Paragraph>
        <span className="relative z-10 p-[1px] font-semibold underline decoration-gray-800 underline-offset-4 after:absolute after:inset-0 after:z-[-1] after:w-full after:rotate-[-2deg] after:rounded-[0.25rem] after:bg-main-200 after:shadow-md after:content-['']">
          {machine.title}
        </span>
      </Paragraph>
      <Paragraph>{machine.description}</Paragraph>
      <Link
        href={machine.url}
        className="ml-auto transition-colors duration-100 hover:text-main-500"
      >
        <icons.ArrowRight />
      </Link>
    </div>
  );
}
