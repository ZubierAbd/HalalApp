import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showDetails: true,
      name: "Pizza Pizza",
      address: "181 Wynford Drive",
      halalness: true,
      rating: 5
    };
  }

  render() {
    return (
      <div>
        <div className="main">
          <Container>
            <Title className="title" title="Is it Halal?"></Title>
            <TextBoxOne></TextBoxOne>
            <SearchBoxArea></SearchBoxArea>
            {this.state.showDetails ? (
              <Results
                name={this.state.name}
                address={this.state.address}
                halalness={this.state.halalness}
                rating={this.state.rating}
              ></Results>
            ) : null}
          </Container>
        </div>
      </div>
    );
  }
}

export default App;

function Title(props) {
  return <h1>{props.title}</h1>;
}

function TextBoxOne() {
  return (
    <div className="textBoxOne">
      <p>
        We know how difficult it is to find Halal eating options in Canada.
        Let's make it easier.
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
    event.preventDefault();
    this.setState({ showDetails: true });
    console.log("this has been entered");
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="searchBoxArea">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <span>
            <span
              style={{ color: "white" }}
              className="glyphicon glyphicon-search"
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
    console.log("are we hitting this boy");
    axios
      .get(`http://localhost:4000/listall`)
      .then(res => console.log(res.data[0]))
      .catch(err => console.log(err));
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

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rating: this.props.rating };
  }

  render() {
    let rating = Math.ceil(this.state.rating);
    let array = [];
    for (var i = 1; i < rating + 1; i++) {
      array.push(i);
    }
    return (
      <div className="results">
        <h3>{this.props.name}</h3>
        {this.props.halalness ? (
          <div>
            {" "}
            <h3>
              {" "}
              <span id="Yes">Yes</span>{" "}
            </h3>
            <h4>It is Halal</h4>{" "}
          </div>
        ) : (
          <div>
            <h3>
              {" "}
              <span id="No">No</span>
            </h3>
            <h4>It's not Halal</h4>{" "}
          </div>
        )}
        <h5>{this.props.address}</h5>
        <div className="Stars">
          {array.map(index => {
            return (
              <span key={index} className="glyphicon glyphicon-star starry">
                {" "}
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}
