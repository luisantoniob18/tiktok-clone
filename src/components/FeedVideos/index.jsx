import VideoPlayer from "../VideoPlayer"
import styles from './styles.module.css'

const VIDEOS = [
    {
    id: 1,
    autor: 'luiz907',
    description: 'atardecer',
    likes: 123,
    shares: 234,
    comments: 456,
    songTitle: 'I Want to Break Free, Queen',
    albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/a615ef82b4130bc7bd6ff6a74d3044d9~c5_100x100.jpeg?lk3s=a5d48078&nonce=29337&refresh_token=d9912d3f6eca239cfa4481e2d8fbf00e&x-expires=1735927200&x-signature=vHoD1opFDvusv7FbPsfuPBp5DcU%3D&shp=a5d48078&shcp=81f88b70',
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
    albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/a615ef82b4130bc7bd6ff6a74d3044d9~c5_100x100.jpeg?lk3s=a5d48078&nonce=29337&refresh_token=d9912d3f6eca239cfa4481e2d8fbf00e&x-expires=1735927200&x-signature=vHoD1opFDvusv7FbPsfuPBp5DcU%3D&shp=a5d48078&shcp=81f88b70',
    src: 'https://videos.pexels.com/video-files/8898141/8898141-sd_640_360_30fps.mp4'
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