import { createClient } from 'contentful'
import { useEffect, useState } from 'react'

const client = createClient({
  space: 'w9emuk3ybfai',
  environment: 'master',
  accessToken: import.meta.env.VITE_API_KEY,
})// dùng để truy cập vào content trong space đã tạo trong contentful

const useFetchProjects = () => {
    const [loading, setLoading] = useState(true)
    const [projects, setProjects] = useState([])
    const getData = async() => {
        try {
            const response = await client.getEntries({ content_type: 'projects' }) // lay du lieu
            const projects = response.items.map((item) => {
                const {title, url, image} = item.fields
                const id = item.sys.id
                const img = image?.fields?.file?.url
                return {id, title, url, img}
            } ) 
            setProjects(projects)
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }

    useEffect(() => {
        getData()
    }, []) 
    return {loading, projects} 
}

export default useFetchProjects



