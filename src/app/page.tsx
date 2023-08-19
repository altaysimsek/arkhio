
import { readJsonFile } from "@/utils/reader"
import { Search } from "@/components/Search"



export default async function Home() {

  const linkData = await readJsonFile('src/json/links.json')
  
  return <div>
    <Search data={linkData} />
  </div>
  
}
