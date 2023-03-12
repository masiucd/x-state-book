import Link from "next/link"
import {ReactNode} from "react"

import NavLink from "@/components/common/nav_link"
import MainFooter from "@/components/layout/main_footer"
import MainHeader from "@/components/layout/main_header"
import {PageWrapper} from "@/components/page_wrapper"
import {getMachineDirs} from "@/lib/utils/io"

interface Props {
  children: ReactNode
}

function buildMachinesList(machines: string[]) {
  const result = []
  for (const machine of machines) {
    console.log("machine", machine)
    switch (machine) {
      case "multi_step_form":
        result.push({machine: "multi step form", path: machine})
        break
      case "toggle":
        result.push({machine, path: machine})
        break
      default:
        break
    }
  }

  return result
}

export default async function XstateLayout({children}: Props) {
  const machines = buildMachinesList(await getMachineDirs())

  return (
    <>
      <MainHeader />
      <div className="grid flex-1 grid-cols-12 pt-2">
        <aside className="col-span-1 flex flex-col  border-r-2 border-slate-700/40 px-2">
          <strong className="text-sm md:text-xl">Machines</strong>
          <nav className="mt-10 mb-5">
            <ul className="flex flex-col gap-3">
              {machines.map(machine => (
                <li key={machine.machine}>
                  <NavLink href={`/machines/${machine.path}`}>
                    {machine.machine}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <PageWrapper className="col-span-10 flex-1 pl-2" fluid>
          {children}
        </PageWrapper>
      </div>
      <MainFooter />
    </>
  )
}
