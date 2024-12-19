import { columns, Orders } from "@/components/Table/columns"
import { DataTable } from "@/components/Table/page";
import ChartComponent from "@/components/InsightsCharts/page";
import VsPastPeriodChart from "@/components/PastPeriod/page";
import Forecasts from "@/components/Forecast";
import AtAGlance from "@/components/Stats";
import Navbar from "@/components/Common/Navbar";
async function getData(): Promise<Orders[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      thumbnail: "/Avatar.svg",
      product: "Premium Package",
      date: "24' Apr 2024",
      timeSpent: "2h 30m",
      orderValue: 299.99,
      commission: 29.99,
    },
    {
      id: "482bf90a",
      thumbnail: "/Avatar.svg",
      product: "Basic Subscription",
      date: "24' Apr 2024",
      timeSpent: "1h 15m",
      orderValue: 149.99,
      commission: 14.99,
    },
  ]
}
export default async function Home() {

  const data = await getData()

  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2  sm:items-start items-center p-8">
        <Navbar/>
        <AtAGlance/>
        <div className="w-full">
          <h1 className="text-3xl font-semibold">Insights</h1>
          {/* <div className="flex w-[100vh]"> */}
          <div className="grid grid-cols-1 lg:grid-cols-3  gap-6 lg:gap-6">
              <div className="w-full h-full">
                <ChartComponent />
              </div>
              <div className="w-full h-full">
                <VsPastPeriodChart />
              </div>
              <div className="w-full h-96">
            <Forecasts />
              </div>
          </div>

        </div>
        <div className="flex flex-col gap-3 sm:my-0 my-2">
          <h1 className="text-3xl font-semibold">Orders</h1>
          <DataTable columns={columns} data={data} /></div>

      </main>

    // </div>
  );
}
