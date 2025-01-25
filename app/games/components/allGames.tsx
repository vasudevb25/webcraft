import styles from "..//styles/allgames.module.css"
import Image from "next/image"
import Link from "next/link"
import { Games } from "@/app/components/interfaces/game"
import gamesdata from "@/public/games.json"
export default function AllGames(){
    const games:Games[]=gamesdata
    return(
        <>
            <div id={styles.AllGames}>
            <p id={styles.gamesheading}>{"All Games"}</p>
                <ul id={styles.all_games}>
                    {games.map(game=><li key={game.game_id}><Link href={"/games/"+game.game_id}><Image className={styles.gamePoster} src={game.game_poster} alt="game Poster" width={150} height={150}/></Link></li>)}
                </ul>
            </div>
        </>
    )
} 