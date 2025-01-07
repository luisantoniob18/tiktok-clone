import { useEffect, useRef, useState } from 'react'
import styles from './styles.module.css'
import clsx from 'clsx'
import VideoPlayerActions from './VideoPlayerActions'
import VideoDescription from '../VideoDescription'

export default function VideoPlayer({albumCover, autor, description, src, songTitle}){
    const [playing, setPlaying] = useState(false)
    const video = useRef(null)

    const handlePlay = () => {
        //const {current: videoEl} = video
        const videoEl = video.current;

        playing ? 
        videoEl.pause()
        : videoEl.play()
        
        setPlaying(!playing)
    }

    useEffect(() => {

    }, [])

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
         <VideoPlayerActions/>
         <VideoDescription         
         autor={autor}
         albumCover={albumCover}
         description={description}
         songTitle={songTitle}
         />
        </div>
        
    )
}