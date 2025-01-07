import AlbumDisk from "../VideoDescription/AlbumDisk";
import styles from './styles.module.css'

export default function VideoDescription ({albumCover, autor, description}) {
    return(
        <footer className={styles.description}>
            <div>                
                <strong>{autor}</strong>
                <p>{description}</p>
            </div>

            <div>
            <AlbumDisk albumCover={albumCover}/>
            </div>
        </footer>
    )
}