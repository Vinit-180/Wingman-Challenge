"use client"
import { ColumnDef } from "@tanstack/react-table"
 
export type Orders = {
  id: string;
  thumbnail:string
  product:string;
  date:string;
  timeSpent:string;
  orderValue: number;
  commission:number;
}

export const columns: ColumnDef<Orders>[] = [

  {
    accessorKey: "product",
    header: "Product",
    cell: ({ row }) => {
        const thumbnail: string = row.original.thumbnail
        const product: string = row.getValue("product")
        
        return (
          <div className="flex items-center gap-3">
            {typeof thumbnail === "string" && (
              <img 
                src={thumbnail} 
                alt={`${product} thumbnail`}
                className="w-10 h-10 object-cover rounded"
              />
            )}
            <span>{product}</span>
          </div>
        )
      },
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "timeSpent",
    header: "Time Spent",
  },
  {
    accessorKey: "orderValue",
    header: "Order Value",
    cell: ({ row }) => {
        const amount:number = row.getValue("orderValue")
        return <span>${amount}</span>
      },
  },
  {
    accessorKey: "commission",
    header: "Commission",
    cell: ({ row }) => {
        const amount:number = row.getValue("orderValue")
        return <span>${amount}</span>
      },
  },
]