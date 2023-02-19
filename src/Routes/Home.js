import { useEffect, useState } from "react";
import request from "request";
import { parseNewsData } from "../utils/parseNewsData";

function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=101"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const newsData = await response.text();
        setNews(parseNewsData(newsData)); // 웹사이트에서 가져온 데이터를 파싱하는 함수
      } catch (error) {
        console.error("There was an error:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>공고 알리미</h1>
      <h2> 원하는 기업을 추가해서 공고 알림을 받으세요</h2>
      <h2> 메일로 매일 아침 9시 공고가 뜬지 확인을 해서 보내드립니다</h2>
      <ul>
        {news.map((article) => (
          <li>{article.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
