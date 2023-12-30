import {Metadata} from "next/types";
import {type PropsWithChildren} from "react";

import {PageWrapper} from "@/components/page-wrapper";

export const metadata: Metadata = {
  title: "X-state stuff | Machines",
  description: "X-state stuff, by @masiucd, Machines",
};

export default function MachinesLayout({children}: PropsWithChildren) {
  return <PageWrapper>{children}</PageWrapper>;
}
