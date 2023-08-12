'use client'
import useSWR from 'swr'

const fetcher = (...args: any) => fetch(...args).then(res => res.json())

export default  function Home() {
const { data, error, isLoading } = useSWR('/api/links', fetcher)
 
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  // render data
  return <div>hello!
    {data.posts.map((post: any) =>(<div key={post.id}>{post.title}</div>))}
  </div>
  
}
