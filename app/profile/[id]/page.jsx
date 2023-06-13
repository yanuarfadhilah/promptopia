"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

import Profile from "@components/Profile"

const OtherProfile = ({params}) => {
    const [posts, setPosts] = useState([])
    const [user, setUser] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
          const response = await fetch(`/api/users/${params.id}/posts`);
          const data = await response.json();
          setUser(data[0].creator)
          setPosts(data);
        }
    
        if (params.id) fetchPosts();
    }, [])
    
    return (
        <Profile 
            name={user.username}
            desc={"Welcome to "+user.username+"'s profile"}
            data={posts}
            other={true}
        />
    )
}

export default OtherProfile