import { Comment } from "../Icons/Comment";
import { Heart } from "../Icons/Heart";
import { Share } from "../Icons/Share";
import styles from './styles.module.css'

export default function VideoPlayerActions ({likes = 12, comments = 123, shares = 234, hearted = false}) {
    return(
        <aside className={styles.actions}>
            <div className={styles.action}>
            <Heart/>
            <strong title="like">{likes}</strong>
            </div>

            <div className={styles.action}>
            <Comment/>
            <strong title="comment">{comments}</strong>
            </div>  

            <div className={styles.action}>
            <Share/>
            <strong title="shares">{shares}</strong>
            </div>              
        </aside>
    )
}