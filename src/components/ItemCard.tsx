"use client";
import { categoryMapper } from "@/utils/mapper";

interface ItemCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  desc: string;
  tag: number;
  date: string;
};


const ItemCard = ({ name, desc, tag, date }: ItemCardProps) => {
  return (
    <div className="item-card-container">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src="https://placehold.co/600x400" className="w-full" alt="" />

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center">{name}</div>
          <p className="text-gray-700 text-base text-center">{desc}</p>
        </div>

        <div className="px-6 pt-4 pb-2 text-center">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {categoryMapper(tag)}
          </span>
        </div>
        <p className="text-center p-4">{date}</p>
      </div>
    </div>
  );
};

export default ItemCard;
