import "./BlogCard.css";
// import Card from "react-bootstrap/Card";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function BlogCard({ title, author, desc }) {
  return (
    <div className="py-3">
      {/* <Card>
        <Card.Header>{title}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>{desc}</p>
            <footer className="blockquote-footer">
              <cite title="Source Title">{author}</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card> */}
    </div>
  );
}
