"use client";
import { useState } from "react";
import { linkItem } from "@/types";
import ItemCard from "../../app/components/ItemCard";
import "../../app/styles/Cards.css"

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
        {/* TODO: render categories dynamically from constants */}
        <option value="">All</option>
        <option value="1">UI</option>
        <option value="2">Design</option>
        <option value="3">Code</option>
      </select>
      <ul>
        {/* TODO: create Item component */}
        {getFilteredData(data, query, category)?.map((item: linkItem) => (
          <ItemCard
            className="item-card"
            key={item.id}
            name={item.title}
            desc={item.description}
            tag1={item.categoryName}
            date={item.releaseDate}
          ></ItemCard>
        ))}
      </ul>
    </div>
  );
};

export default Search;
