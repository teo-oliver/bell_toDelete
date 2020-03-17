import Head from "next/head";
import "../styles/styles.scss";

import Button from "../components/Button";
import FormQuestion from "../components/FormQuestion";
import RadioOptions from "../components/RadioOptions";
import Tiles from "../components/Tiles";
import CounterControls from "../components/CounterControls";
import CounterInfo from "../components/CounterInfo";

const Home = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <CounterControls />
      <CounterInfo />
      <Button
        className="btn btn--medium btn--primary--solid"
        onClick={() => {
          console.log("You clicked on me!");
        }}
      >
        Click Me
      </Button>
      <Button className="btn btn--medium btn--primary--outline">
        Click Me
      </Button>
      <FormQuestion
        questionsArray={["Label 1", "Label 2", "Label 3", "Label 4"]}
      />

      <hr />

      <RadioOptions radioOptsArray={[1, 2, 3, 4]} />

      <br />
      <hr />

      <Tiles title="House" imgSrc="/house-vector-style.svg" />
    </main>

    <footer>
      <a
        href="https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by <img src="/zeit.svg" alt="ZEIT Logo" />
      </a>
    </footer>
  </div>
);

export default Home;
