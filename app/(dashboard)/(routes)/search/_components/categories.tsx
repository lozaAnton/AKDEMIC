"use client";
import { Category } from "@prisma/client";
import {
    FcEngineering,
    FcFilmReel,
    FcMultipleDevices,
    FcMusic,
    FcOldTimeCamera,
    FcSalesPerformance,
    FcSportsMode,
} from "react-icons/fc"; // Asegúrate de tener instalado react-icons
import { IconType } from "react-icons";
import { CategoryItem } from "./category-item";

// Props para el componente Categories
interface CategoriesProps {
    items: Category[];
}

// Mapa de íconos basado en el nombre de la categoría
const iconMap: Record<Category["name"], IconType> = {
    "Musica": FcMusic,
    "Fotografia": FcOldTimeCamera,
    "Fitness": FcSportsMode,
    "Contabilidad": FcSalesPerformance,
    "Ciencia de la computacion": FcMultipleDevices,
    "Filmacion": FcFilmReel,
    "Ingenieria": FcEngineering,

};

export const Categories = ({ items }: CategoriesProps) => {
    return (
        <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
            {items.map((item) => {
                return (
                    <CategoryItem
                        key={item.id}
                        label={item.name}
                        icon={iconMap[item.name]} // Renderiza el ícono como componente JSX
                        value={item.id}
                    />
                );
            })}
        </div>
    );
};

