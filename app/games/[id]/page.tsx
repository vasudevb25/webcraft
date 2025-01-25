"use client";

import React, { useState } from "react";
import Image from "next/image";
import gamedata from "@/public/games.json"
import { Games } from "@/app/components/interfaces/game";
import styles from "./gamepage.module.css";
export default function gamePage(params:any){
  const [rating, setRating] = useState(0)
  console.log(gamedata)
  const game=gamedata[parseInt(params.id)]
  const handleStarClick = (index: number) => {
    setRating(index + 1);
  };
  console.log(game)
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src={game.game_banner}
          alt="Movie Poster"
          className={styles.image}
        />
      </div>

      <main className={styles.main}>
        <div className={styles.Text}>
          <div className={styles.descriptionContainer}>
            <div className={styles.posterAndDescription}>
              <div className={styles.posterContainer}>
                <Image
                  src={game.game_poster}
                  alt="Game Poster"
                  width={300}
                  height={500}
                  className={styles.posterImage}
                />
              </div>
              <div className={styles.gameDescription}>
                <h2 className={styles.gameTitle}>{game.game_name}</h2>
                <div className={styles.tags}>
                  <span className={styles.tag}>Action</span>
                  <span className={styles.tag}>Adventure</span>
                </div>

                <div className={styles.rating}>
                  <span>Rating: </span>
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      className={index < rating ? styles.filledStar : styles.star}
                      onClick={() => handleStarClick(index)}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <div className={styles.commentSection}>
                  <textarea
                    placeholder="Leave a comment..."
                    className={styles.commentInput}
                  ></textarea>
                  <button className={styles.commentButton}>Post Comment</button>
                </div>
                <div className={styles.gameStats}>
                  <p><strong>Studio:</strong> {game.game_studio}</p>
                  <p><strong>Rating:</strong> {game.game_rating}/100</p>
                  <p><strong>Views:</strong> {game.game_views}  </p>
                </div>
               
              </div>
             
            </div>
           
          </div>
          <div className={styles.buyButtonContainer}>
    <button className={styles.buyButton}>Buy Now</button>
  </div>

       
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} PIXEL PHANTOM. All rights reserved.</p>
      </footer>
    </div>
  );
};
