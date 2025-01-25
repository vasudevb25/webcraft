'use client'
import Image from "next/image";
import games from "@/public/games.json"
import styles from "./styles/bigThree.module.css"
import { useState,useEffect } from "react";
import { Games } from "./interfaces/game";
export default function BigThreeImages(){
      let [count,setCount]=useState(0)
      const topthree:Games[]=games
      function changeImage(){
        count=count+1
        if(count>=3){
         count=0
        }
        setCount(count)
      }
      useEffect(()=>{
        setInterval(changeImage,3500)

      })
        return(
          <>
          <Image id={styles.TopGame} src={topthree[count].game_banner} alt="Game Poster" height={50} width={1050}></Image>
          <Image id={styles.TopPoster} height={260} width={260} alt="TopPoster" src={topthree[count].game_poster}/>
          </>
        )
      }
