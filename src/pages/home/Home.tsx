import { useLoaderData } from "react-router-dom";
import "../../mock-api/server";
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
  const [movies, setMovies] = useState<Props[]>([]);

  useEffect(() => {
    fetch("/api/movies")
      .then((res) => res.json())
      .then((json) => setMovies(json));
  }, []);
  console.log(movies);

  // const data = useLoaderData();
  // console.log(data);
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
            {movies &&
              movies.map((mov) => (
                <>
                  <p>{mov.name}</p>
                  <p>{mov.id}</p>
                  <p>{mov.year}</p>
                </>
              ))}
          </Subtitle>
        </MainTitleContainer>
      </ContentWrapper>
    </Main>
  );
}

export default Home;
