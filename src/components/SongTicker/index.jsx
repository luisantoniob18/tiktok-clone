import Marquee from "react-fast-marquee";
import MusicIcon from "../Icons/MusicIcon";
import styles from './styles.module.css'
import Ticker from "react-ticker";

export default function SongTicker({songTitle}) {
    return (
        <div className={styles.song}>            
            <MusicIcon />
            <Marquee gradient={false} speed={30}>
                {songTitle}
            </Marquee>
        </div>
    )
}