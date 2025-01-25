'use client'
import Image from "next/image"
import styles from "./styles/navBar.module.css"
import Link from "next/link"
import logo from "@/public/assets/icon.png"
import searchIco from "@/public/assets/search.png"
import Login from "./signuporlogin"
export default function NavBar(){
    return(
        <div id={styles.navBar}>
            <Link href={"/"}><Image id={styles.home_ico} src={logo} alt="Home" width={300} height={300}/></Link>
            <Link href={"/games"}><p className={styles.navOptions} id={styles.Games}>Games</p></Link>
            <p className={styles.navOptions} id={styles.Community}>Community</p>
            <p className={styles.navOptions} id={styles.About}>About</p>
            <div id={styles.searchBar}>
                <input type="text" placeholder="Search" name="searchBar" id={styles.searchBarInput}/>
                <Image id={styles.search_ico} src={searchIco} width={30} height={30} alt="s"/>
            </div>
            <Login/>
        </div>
    )
}