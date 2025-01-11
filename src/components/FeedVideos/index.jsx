import { useEffect, useState } from "react"
import VideoPlayer from "../VideoPlayer"
import styles from './styles.module.css'
import { getVideos } from '../../services/index'

export default function FeedVideos(){
    const [videos, setVideos] = useState([])
    const [error, setError] = useState(null)
    
    useEffect(() => {
        getVideos().then(([error, videos]) => {
            console.log(videos)
            if(error) return setError(error)
            setVideos(videos)
        })
    }, [])

    if(error) {
        return (
            <span>{error}</span>
        )
    }

    return(
                videos.map(video => {
                    const {users = {}} = video
                    const {avatar, username = {}} = users

                    return (
                        <div key={video.id} className={styles.item}>
                            <VideoPlayer { ...video}
                            username={username}
                            avatar={avatar}/>
                        </div>
                    )                
                    
                })        
    )
}