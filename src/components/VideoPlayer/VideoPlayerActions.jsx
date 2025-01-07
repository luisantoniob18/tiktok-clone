import { Comment } from "../Icons/Comment";
import { Heart } from "../Icons/Heart";
import { Share } from "../Icons/Share";
import styles from './styles.module.css'

export default function VideoPlayerActions ({likes = 12, comments = 123, shares = 234, hearted = false}) {
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