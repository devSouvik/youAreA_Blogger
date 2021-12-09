import "./Genres.css";
// mui imports
import { Container, Typography } from "@mui/material";

function Genres() {
  return (
    <>
      <Container>
        <Typography sx={{ mb: 3, fontWeight: "bold" }} variant="h6">
          Recomended Genres
        </Typography>

        <button class="button">Technology</button>
        <button class="button">Money</button>
        <button class="button">Health</button>
        <button class="button">education</button>
        <button class="button">Society</button>
        <button class="button">Literature</button>
        <button class="button">Culture</button>
        <button class="button">History</button>
      </Container>
    </>
  );
}

export default Genres;
