import { useEffect, useState, useCallback } from "react"

const options = {
    root: document.querySelector('main'),
    rootMargin: "0px",
    threshold: 0.9,
  }

  const observer = new window.IntersectionObserver((entries) => {
      entries
      .forEach(entry => {
          const {target, isIntersecting} = entry
          target._onIntersect(isIntersecting)
          
      })
  }, options)

  export default function useIntersectionVideoPlayer ({video}) {
    const [playing, setPlaying] = useState(false)

    useEffect(() => {
            if(!video.current) return 

            observer.observe(video.current)
            video.current._onIntersect = (isIntersecting) => {
                const {current: videoEl} = video
    
                isIntersecting
                ? videoEl.play()
                : videoEl.pause()
    
                setPlaying(!videoEl.paused)
            }
        }, [video.current])

    const handlePlay = () => {
        //const {current: videoEl} = video
        const { current: videoEl } = video

        playing ? 
        videoEl.pause()
        : videoEl.play()

        setPlaying(!playing)
    }

    return {
        handlePlay,
        playing
    }
  }