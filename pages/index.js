import Main from "../components/main";
import Head from "next/head";
import { newsKey, weatherKey } from "../config";

function Index({ newsData, weatherData }) {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&family=Roboto+Slab&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Main weather={weatherData} news={newsData} />
      {/* <script
        src="https://apis.google.com/js/platform.js?onload=init"
        async
        defer
      ></script> */}
    </div>
  );
}

export default Index;

export async function getStaticProps(context) {
  const res = await fetch(
    `https://api.nytimes.com/svc/topstories/v2/us.json?api-key=${newsKey}`
  );
  const newsData = await res.json();

  const locId = "5391760";
  const weatherRes = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?id=${locId}&units=imperial&appid=${weatherKey}`
  );
  const weatherData = await weatherRes.json();

  if (!newsData || !weatherData) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      newsData,
      weatherData,
    }, // will be passed to the page component as props
  };
}
