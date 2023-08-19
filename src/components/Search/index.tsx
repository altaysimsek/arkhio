'use client'
import { useState } from 'react'
import { linkItem } from "@/types"

//TODO: improve search props type
interface SearchProps {
    data: linkItem[]
}

const getFilteredData = (data: linkItem[], query: string | undefined, category: string | undefined) => {
    if(!query && !category) return data
    if(!query && category) return data.filter(item => item.categoryId === parseInt(category))
    if(query && !category) return data.filter(item => item.title.toLowerCase().includes(query.toLowerCase()))
    if(query && category) return data.filter(item => item.title.toLowerCase().includes(query.toLowerCase()) && item.categoryId === parseInt(category))
}



export const Search = ({data}: SearchProps) => {
    const [query, setQuery] = useState()
    const [category, setCategory] = useState()
  return (
    <div> 
        <input type="text" placeholder="Search..." onChange={(e: any) => setQuery(e.target.value)} />
        <select onChange={(e: any) => setCategory(e.target.value)}>
            {/* TODO: render categories dynamically from constants */}
            <option value="">All</option>
            <option value="1">Category 1</option>
            <option value="2">Category 2</option>
            <option value="3">Category 3</option>
        </select>
        <ul>
            {/* TODO: create Item component */}
            {getFilteredData(data, query, category)?.map((item: linkItem) => <li key={item.id}>{item.title}</li>)}
        </ul>
    </div>
  )
}

export default Search



