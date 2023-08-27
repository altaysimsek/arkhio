"use client";
import { useState } from "react";
import { linkItem } from "@/types";
import ItemCard from "@/components/ItemCard"
import "@/styles/Cards.scss"
import { categoryMapper } from "@/utils/mapper";
import Header from "../Header";

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
      <Header/>
      <div className="search-container">
      <input
      className="search-input"
        type="text"
        placeholder="Search..."
        onChange={(e: any) => setQuery(e.target.value)}
      />
      <select className=" ml-4 focus:outline-none focus:bg-gray-300 focus:shadow-inner" onChange={(e: any) => setCategory(e.target.value)}>
        <option>All</option>
        {
          data.map(({categoryId}: linkItem) => (
            <option key={categoryId} value={categoryId}>{categoryMapper(categoryId)}</option>
          ))
        }
      </select>
      </div>
      
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
