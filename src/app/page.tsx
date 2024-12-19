import Image from "next/image";
import {columns, Orders} from "@/components/Table/columns"
import { DataTable } from "@/components/Table/page";
async function getData(): Promise<Orders[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      thumbnail:"/Avatar.svg",
      product: "Premium Package",
      date: "24' Apr 2024",
      timeSpent: "2h 30m",
      orderValue: 299.99,
      commission: 29.99,
    },
    {
      id: "482bf90a",
      thumbnail:"/Avatar.svg",
      product: "Basic Subscription",
      date: "24' Apr 2024",
      timeSpent: "1h 15m",
      orderValue: 149.99,
      commission: 14.99,
    },
    // ... more orders can be added here
  ]
}
export default async function Home() {

  const data = await getData()

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div className="flex flex-col gap-3">
      <h1 className="text-3xl">Orders</h1>
        <DataTable columns={columns} data={data} />
        </div>

      </main>
      
    </div>
  );
}
