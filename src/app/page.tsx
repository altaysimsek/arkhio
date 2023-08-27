
import { readJsonFile } from "@/utils/reader"
import { Search } from "@/components/Search"


export default async function Home() {

  const linkData = await readJsonFile('src/json/links.json')
  
  return <div>
    <title>Arkhio</title>
    <Search data={linkData} />
    
    
  </div>
  
}
