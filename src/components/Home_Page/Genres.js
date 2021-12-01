import "./Genres.css";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

function Genres() {
  return (
    <div>
      <Container>
        <div class="py-5 px-3">
          <h6>
            <strong> Recomended genres</strong>
          </h6>
          <button class="button">Technology</button>
          <button class="button">Money</button>
          <button class="button">Health</button>
          <button class="button">education</button>
        </div>
      </Container>
    </div>
  );
}

export default Genres;
