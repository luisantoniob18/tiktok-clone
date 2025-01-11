import { useRef } from 'react'
import styles from './styles.module.css'
import clsx from 'clsx'
import VideoPlayerActions from './VideoPlayerActions'
import VideoDescription from '../VideoDescription'
import useIntersectionVideoPlayer from '../../hooks/useIntersectionVideoPlayer'
  
export default function VideoPlayer({albumCover, username, description, src, songTitle, likes, comments, shares, avatar}){
    const video = useRef(null)  
    const {playing, handlePlay} = useIntersectionVideoPlayer({video})  
    
    const playerClassName = clsx(styles.player, {
        [styles.hidden]: playing,
    })

    return(
        <div className={styles.wrapper}>
            <video
        className={styles.video} 
        src={src}
        loop 
        controls={false}
        ref={video}
        onClick={handlePlay}
         />
         <i className={playerClassName} onClick={handlePlay}/>
         <VideoPlayerActions
         username={username}
         avatar={avatar}
         likes={likes}
         comments={comments}
         shares={shares}
         />
         <VideoDescription         
         username={username}
         albumCover={albumCover}
         description={description}
         songTitle={songTitle}
         />
        </div>
        
    )
}