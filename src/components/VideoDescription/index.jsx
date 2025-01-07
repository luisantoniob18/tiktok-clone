import MusicIcon from "../Icons/MusicIcon";
import AlbumDisk from "./AlbumDisk";
import styles from './styles.module.css'
import SongTicker from "../SongTicker";

export default function VideoDescription ({albumCover, autor, description, songTitle}) {
    return(
        <footer className={styles.description}>
            <div className={styles.textWrapper}>
                <section>
                    <strong>
                        <a className={styles.autor} href={`/user/${autor}`}> 
                            @{autor}
                        </a>
                    </strong>             
                
                <p className={styles.text}>{description}</p>
                </section>                      
                    <SongTicker songTitle={songTitle}/>                
            </div>

            <div>
            <AlbumDisk albumCover={albumCover}/>
            </div>
        </footer>
    )
}