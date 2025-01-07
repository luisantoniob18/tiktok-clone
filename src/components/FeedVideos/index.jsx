import VideoPlayer from "../VideoPlayer"
import styles from './styles.module.css'

const VIDEOS = [
    {
    id: 1,
    autor: 'luiz907',
    description: 'Atardecer en Totonicapan',
    likes: 123,
    shares: 234,
    comments: 456,
    songTitle: 'I Want to Break Free, Queen',
    albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/3449ae07e0c66d3c5b14ed589482bcd4~c5_100x100.jpeg?lk3s=a5d48078&nonce=49499&refresh_token=8b2b05958f9a315504b165239b5c8cac&x-expires=1736128800&x-signature=CVBfurOP0yXUGpEg88DwZo84jAY%3D&shp=a5d48078&shcp=b59d6b55&quot',
    src: 'https://videos.pexels.com/video-files/2887458/2887458-hd_1920_1080_25fps.mp4'
},
{
    id: 2,
    autor: 'antonio97',
    description: 'anochecer',
    likes: 234,
    shares: 234,
    comments: 456,
    songTitle: 'I Want to Break Free, Queen',
    albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/3449ae07e0c66d3c5b14ed589482bcd4~c5_100x100.jpeg?lk3s=a5d48078&nonce=49499&refresh_token=8b2b05958f9a315504b165239b5c8cac&x-expires=1736128800&x-signature=CVBfurOP0yXUGpEg88DwZo84jAY%3D&shp=a5d48078&shcp=b59d6b55&quot',
    src: 'https://videos.pexels.com/video-files/8898141/8898141-sd_640_360_30fps.mp4'
}, 
{
    id: 3,
    autor: 'antonio97',
    description: 'anochecer',
    likes: 234,
    shares: 234,
    comments: 456,
    songTitle: 'I Want to Break Free, Queen',
    albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/3449ae07e0c66d3c5b14ed589482bcd4~c5_100x100.jpeg?lk3s=a5d48078&nonce=49499&refresh_token=8b2b05958f9a315504b165239b5c8cac&x-expires=1736128800&x-signature=CVBfurOP0yXUGpEg88DwZo84jAY%3D&shp=a5d48078&shcp=b59d6b55&quot',
    src: 'https://videos.pexels.com/video-files/18016084/18016084-sd_640_360_30fps.mp4'
}]

export default function FeedVideos(){
    return(
                VIDEOS.map(video => {
                    return (
                        <div key={video.id} className={styles.item}>
                            <VideoPlayer { ...video}/>
                        </div>
                    )                
                    
                })        
    )
}