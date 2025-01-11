import { Comment } from "../Icons/Comment";
import { Heart } from "../Icons/Heart";
import { Share } from "../Icons/Share";
import styles from './styles.module.css'

export default function VideoPlayerActions ({username, avatar, likes, comments, shares, hearted = false}) {
    const handleLike = () => {
        alert('like')
    }

    const handleComment = () => {
        alert('comment')
    }

    const handleShare = () => {
        alert('share')
    }
    
    return(
        <aside className={styles.actions}>
            <div className={styles.user}>
                <img src={avatar} alt={username} />
                    <svg className={styles.plus} width="23" data-e2e="" height="23" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#RedPlusCircleColor_filter0_d)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M14 25C20.6274 25 26 19.6274 26 13C26 6.37258 20.6274 1 14 1C7.37258 1 2 6.37258 2 13C2 19.6274 7.37258 25 14 25Z" fill="#FE2C55"></path></g>
                    <path d="M9.5 14C9.22386 14 9 13.7761 9 13.5V12.5C9 12.2239 9.22386 12 9.5 12H18.5C18.7761 12 19 12.2239 19 12.5V13.5C19 13.7761 18.7761 14 18.5 14H9.5Z" fill="white"></path>
                    <path d="M13 8.5C13 8.22386 13.2239 8 13.5 8H14.5C14.7761 8 15 8.22386 15 8.5V17.5C15 17.7761 14.7761 18 14.5 18H13.5C13.2239 18 13 17.7761 13 17.5V8.5Z" fill="white"></path>
                    <defs>
                    <filter id="RedPlusCircleColor_filter0_d" x="0" y="0" width="28" height="28" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="1"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs></svg>
            </div>

            <button onClick={handleLike} className={styles.action}>
                <Heart width='45'/>
                <span title="like">{likes}</span>
            </button>

            <button onClick={handleComment} className={styles.action}>
                <Comment width='45'/>
                <span title="comment">{comments}</span>
            </button> 

            <button onClick={handleShare} className={styles.action}>
                <Share width='45'/>
                <span title="shares">{shares}</span>
            </button>              
        </aside>
    )
}