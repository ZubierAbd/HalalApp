import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [isDisplayed, showDisplayed] = useState(false);
  return (
    <div className="main">
      <Container>
        <Title className="title" title="Is it Halal?"></Title>
        <TextBoxOne></TextBoxOne>
        <SearchBoxArea></SearchBoxArea>
      </Container>
    </div>
  );
}

export default App;

function Title(props) {
  return <h1>{props.title}</h1>;
}

function TextBoxOne() {
  return (
    <div className="textBoxOne">
      <p>
        We know how difficult it is to find Halal eating options in Canada. We
        wanted to make it easier.
      </p>
      <p>Try searching below.</p>
    </div>
  );
}

class SearchBoxArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    };
  }

  handleChangeText(event) {
    this.setState({ searchText: event.target.value });
  }

  handleSubmit(event) {
    if (event.keyCode === 13) {
      alert("this is the end");
    }
  }

  render() {
    return (
      <div className="searchBoxArea">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <span>
            <span
              style={{ color: "white" }}
              class="glyphicon glyphicon-search"
            ></span>
            <input
              type="text"
              name="searchText"
              value={this.state.searchText}
              onChange={this.handleChangeText.bind(this)}
              placeholder="Enter a restaurant name here"
            ></input>
          </span>
        </form>
        <FancySearchButton></FancySearchButton>
      </div>
    );
  }
}

function FancySearchButton() {
  function handleClick() {
    alert("something hapned");
  }
  return (
    <div style={{ color: "white", fontSize: "15px", marginTop: "20px" }}>
      <Button
        variant="outline-success"
        size="lg"
        onClick={handleClick.bind(this)}
      >
        Submit
      </Button>
    </div>
  );
}
