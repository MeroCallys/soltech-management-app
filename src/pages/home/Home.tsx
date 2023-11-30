import { useLoaderData } from "react-router-dom";
import axios, { CanceledError } from "axios";
import {
  ContentWrapper,
  Main,
  MainTitle,
  MainTitleContainer,
  Subtitle,
} from "./Home.styled";
import { useEffect, useState } from "react";

type Props = {
  id: number;
  name: string;
  year: number;
};

function Home() {
  const [movies, setMovies] = useState<Props>();
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    axios
      .get<Props>("/api/movie", { signal: controller.signal })
      .then((response) => setMovies(response.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => {
        console.log("This is working!");
      });
    return () => controller.abort();
  }, []);
  const data = useLoaderData();
  console.log(movies);

  return (
    <Main>
      <ContentWrapper>
        <MainTitleContainer>
          <MainTitle>SolTech, Management App</MainTitle>
          <Subtitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            numquam, velit atque vero ipsam tempore dicta natus ad qui cum
            doloremque quam rerum distinctio fugiat? Tempora amet ratione
            aperiam repellendus!
          </Subtitle>
        </MainTitleContainer>
      </ContentWrapper>
    </Main>
  );
}

export default Home;
