
import styles from "../styles/top5Games.module.css"
import eyeIco from "@/public/assets/eye.png"
import { Games } from "@/app/components/interfaces/game"
import like from "@/public/assets/likes.png"
import Image from "next/image"
import Link from "next/link"
import gamedata from "@/public/games.json"
export default function TopFiveGames(props:any){
    const games:Games[]=gamedata
    let page=props.page
    return(
        <div className={page=="home"?styles.a:styles.b}>
            <ul className={styles.topRow}>
            <p id={styles.topGames}>Top 5 Games</p>
                {games.map((game)=>
                <li key={game.game_id}><Link href={"/games/"+game.game_id}><div className={styles.memberBox}><Image id={styles.Poster} alt={game.game_id+"'s Poster"} src={game.game_poster} width={400} height={400}/>
                </div></Link>
                <Image src={eyeIco} id={styles.eyeIco} width={20} height={20} alt="Eye"/><p id={styles.viewCount}>{game.game_views}</p>
                <Image src={like} width={20} height={20} id={styles.likeIco} alt="Eye"/><p id={styles.likeCount}>{game.game_rating}</p>
                </li>)}
            </ul>
        </div>
    )

}