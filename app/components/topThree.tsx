import styles from "./styles/topThreestyles.module.css"
import Image from "next/image";
import eyeIco from "@/public/assets/eye.png"
import likesico from "@/public/assets/likes.png"
import gamesdata from "@/public/games.json"
import Link from "next/link";
import { Games } from "./interfaces/game";
export default function TopThree(){
    const games:Games[]=gamesdata.slice(0,3)
    console.log(games)
    return(
        <div className={styles.TopThree}>
            <ul>
           {games.map(game=><li key={game.game_id}>
            <Link href={"/games/"+game.game_id}>
            <div className={styles.gameCard}>
                <p className={styles.gameTitle}>{game.game_name}</p>
                <Image src={game.game_poster} className={styles.gameImage} alt="Top 3 Image" width={130} height={150}/>
                <Image className={styles.gameVeiws} src={eyeIco} alt="Eye" width={20} height={20}/>
                <p className={styles.views}>{game.game_views}</p>
                <Image className={styles.likesIco} src={likesico} alt="Likes" width={20} height={20}/>
                <p className={styles.gameLikes}>{game.game_rating}</p>
            </div>
            </Link>
            <br/>
           </li>)}
           </ul>
        </div>
    )
}