import React, { useState,useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Card from "react-bootstrap/Card";
import './Home.css';

// import { Link } from "react-router-dom";
// import { isHtmlElement } from "react-router-dom";

// import { isHtmlElement } from "react-router-dom/dist/dom";

const Home = () => {
  const [movie, setMovie] = useState([]);
  const [query, setQuery] = useState('');

  const searchMovies = async () => {
    try {
      // const url = `https://api.themoviedb.org/3/search/movie?api_key=7cc3e9b5288a94ba892aaea983bb1f57&query=Jack+Reacher://`;
      const url = `https://api.themoviedb.org/3/search/movie?api_key=7cc3e9b5288a94ba892aaea983bb1f57&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      setMovie(data.results);
    } catch (error) {
      console.log("Error");
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  // useEffect(() => {
  //   fetch("https:// ")
  //     .then((res) => res.json()
  //     .then((data) => setMovie(data.results));
  // });

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7cc3e9b5288a94ba892aaea983bb1f57&page=1`)
      .then((res) => res.json())
      .then((data) => setMovie(data.results));
  },[]);

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Movies</Nav.Link>
              {/* <Nav.Link href="#action2"> <Link to ={'/'}>TV Shows</Link></Nav.Link> */}
              <Nav.Link href="#action2"> TV Shows</Nav.Link>
              <Nav.Link href="#" disabled>
                People
              </Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={searchMovies}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={query}
                onChange={handleChange}
              />
              <Button variant="outline-success" type={"submit"}>
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Carousel>
        {movie && movie.map((item)=>{
            return(
                <header className="Homeheader" style={{height:'700px'}}>
                    <div className="headerdiv">
                        <p className="legend">
                            <h1>{item.original_title}</h1>
                            <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt=""></img>
                            <p className="legend">
                                <h1>{item.original_title}</h1>
                                <p>{item.overview}</p>
                                <p>{item.vote_average}<i class="fa-solid fa-star fa-beat" style={{color:"yellow"}}></i></p>
                            </p>
                        </p>
                    </div>
                </header>
            )
        })}
    </Carousel>

    <section className="cardsec">
        {movie &&
          movie.map((item) => {
            return (
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            );
          })}
      </section>

    {/* <div>
    {movie && movie.map((item)=>{
      return(     
        <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/original/${item.background_path}`}
        />
        <Card.Body>
          <Card.Title>{isHtmlElement.original_title}</Card.Title>
          <Card.Text>{isHtmlElement.overview}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      )
    })}

      </div> */}
    </div>
  );
};

export default Home;
