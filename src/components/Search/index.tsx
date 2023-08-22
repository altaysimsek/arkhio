"use client";
import { useState } from "react";
import { linkItem } from "@/types";
import ItemCard from "@/components/ItemCard"
import "@/styles/Cards.scss"
import { categoryMapper } from "@/utils/mapper";

//TODO: improve search props type
interface SearchProps {
  data: linkItem[];
}

const getFilteredData = (
  data: linkItem[],
  query: string | undefined,
  category: string | undefined
) => {
  if (!query && !category) return data;
  if (!query && category)
    return data.filter((item) => item.categoryId === parseInt(category));
  if (query && !category)
    return data.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
  if (query && category)
    return data.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) &&
        item.categoryId === parseInt(category)
    );
};

export const Search = ({ data }: SearchProps) => {
  const [query, setQuery] = useState();
  const [category, setCategory] = useState();
  return (
    <div className="cards-container">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e: any) => setQuery(e.target.value)}
      />
      <select onChange={(e: any) => setCategory(e.target.value)}>
        <option>All</option>
        {
          data.map(({categoryId}: linkItem) => (
            <option key={categoryId} value={categoryId}>{categoryMapper(categoryId)}</option>
          ))
        }
      </select>
      <ul>
        {getFilteredData(data, query, category)?.map((item: linkItem) => (
          <ItemCard
            className="item-card"
            key={item.id}
            name={item.title}
            desc={item.description}
            tag={item.categoryId}
            date={item.releaseDate}
          ></ItemCard>
        ))}
      </ul>
    </div>
  );
};

export default Search;
