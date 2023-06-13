"use client"
import { useState, useEffect } from 'react'
import PromptCard from '@components/PromptCard'



const Tag = ({params}) => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const fetchPosts = async () => {
          const response = await fetch(`/api/tag/${params.tag}`);
          const data = await response.json();
    
          setPosts(data);
        }
    
        if (params.tag) fetchPosts();
    }, [])

    return (
        <section className='w-full'>
          <h1 className='head_text text-left'>
            <span className='blue_gradient'># {params.tag} </span>
          </h1>
    
          <div className='mt-10 prompt_layout'>
            {posts.map((post) => (
              <PromptCard
                key={post._id}
                post={post}
              />
            ))}
          </div>
        </section>
    );
}

export default Tag