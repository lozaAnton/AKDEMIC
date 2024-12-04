"use client"

import { Course } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal, Pencil } from "lucide-react"

import Link from "next/Link";

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";


export const columns: ColumnDef<Course>[] = [
    {
        accessorKey: "title",
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Titulo
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
        },
    },
    {
        accessorKey: "price",
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Precio
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
        },
        cell: ({ row }) => {
            const price = parseFloat(row.getValue("price") || 0);
            const formatted = new Intl.NumberFormat("en-PE", {
                style: "currency",
                currency: "PEN"
            }).format(price)


            return <div>{formatted}</div>
        }
    },
    {
        accessorKey: "isPublished",
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Publicado
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
        },
        cell: ({ row }) => {
            const isPublished = row.getValue("isPublished") || false;

            return (
                <Badge className= {cn(
                    "bg-slate-500", 
                    isPublished && "bg-sky-700"
                )}> 
                  {isPublished ? "Publicado" : "Borrador"}  
                </Badge>
            )
        }
    },
    {
        id: "actions",
        cell: ({ row }) =>{
            const { id } = row.original;

            return(
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-4 w-8 p-0">
                            <span className="sr-only">ABRIR MENU</span>
                            <MoreHorizontal className= "h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <Link>
                            <DropdownMenuItem>
                                <Pencil className= "h-4 w-4 mr-2" />
                                Editar
                            </DropdownMenuItem>
                        </Link>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
]