import TopThree from "@/app/components/topThree"
import BigThreeImages from "./components/BigThreeImages"
import TopFiveGames from "./games/components/top5Game"
export default function Home(){
  
  return(
    <div>
      <BigThreeImages/>
      <TopThree/>
      <TopFiveGames page={"home"}/>
    </div>
  )
}