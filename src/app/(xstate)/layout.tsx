import Link from "next/link"
import {ReactNode} from "react"

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
    switch (machine) {
      case "register":
        result.push({machine, path: machine})
        break
      case "timer":
        result.push({machine, path: machine})
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
        <aside className="col-span-2 border-r border-slate-900">
          <h4>Machines</h4>
          <nav>
            <ul>
              {machines.map((machine) => (
                <li key={machine.machine}>
                  {" "}
                  <Link href={`/machines/${machine.path}`}>
                    {machine.machine}
                  </Link>{" "}
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
