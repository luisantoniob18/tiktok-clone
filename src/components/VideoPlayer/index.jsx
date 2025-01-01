import { useEffect, useRef, useState } from 'react'
import styles from './styles.module.css'

const SRC = 'https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/oEI6QABxRd3PAfDnpFxcfMD86qkEbE5QJRTTBA~tplv-photomode-zoomcover:720:720.avif?lk3s=b59d6b55&x-expires=1735862400&x-signature=rZ6BsuETcRIvwta%2B%2BgYOQQbq5GE%3D&shp=b59d6b55&shcp=-'

export default function VideoPlayer(){
    const [playing, setPlaying] = useState(false)
    const video = useRef()
    const handlePlay = () => {
        if(playing){
            video.current.pause()
        }else{
            video.current.play()
        }
        
        setPlaying(!playing)
    }
    useEffect(() => {

    }, [])

    return(
        <div>
            <video
        className={styles.video} 
        src={SRC} 
        controls={false}
        ref={video}
         />
         <button className={styles.player} onClick={handlePlay}/>
        </div>
        
    )
}