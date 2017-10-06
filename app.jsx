// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class Home extends React.Component {
  render() {
    return (
      <div className="main-content home">
        <h2>HOME</h2>
        <p>
          This fun directory is a project for the <em>React Router Basics</em>{" "}
          course on Treehouse.
        </p>
        <p>
          Learn front end web development and much more! This simple directory
          app offers a preview of our course library. Choose from many hours of
          content, from HTML to CSS to JavaScript. Learn to code and get the
          skills you need to launch a new career in front end web development.
        </p>
        <p>
          We have thousands of videos created by expert teachers on web design
          and front end development. Our library is continually refreshed with
          the latest on web technology so you will never fall behind.
        </p>
        <hr />
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="card mb-3">
                <img
                  className="card-img-top img-fluid"
                  src="images/nodestradamus.png"
                  alt="Card image cap"
                />
                <div className="card-block">
                  <h4 className="card-title">NodeStradamus</h4>
                  <p className="card-text">
                    NodeStra" is a software engineer and philosopher trying to
                    leave the world better than he found it. He codes for
                    non-profits, eCommerce, and large-scale web apps.{" "}
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card mb-3">
                <img
                  className="card-img-top img-fluid"
                  src="images/geo.png"
                  alt="Card image cap"
                />
                <div className="card-block">
                  <h4 className="card-title">Geo "Lo" Cation</h4>
                  <p className="card-text">
                    Geo is a JavaScript developer working on large-scale
                    applications. He's also a teacher who strives to support
                    students in removing all barriers to learning code and rock.{" "}
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card mb-3">
                <img
                  className="card-img-top img-fluid"
                  src="images/ecma.png"
                  alt="Card image cap"
                />
                <div className="card-block">
                  <h4 className="card-title">Ecma Scriptnstuff</h4>
                  <p className="card-text">
                    Ecma found her passion for computers and programming over 15
                    years ago. She is excited to introduce people to the
                    wonderful world of JavaScript.{" "}
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card mb-3">
                <img
                  className="card-img-top img-fluid"
                  src="images/jay.png"
                  alt="Card image cap"
                />
                <div className="card-block">
                  <h4 className="card-title">Jay Query</h4>
                  <p className="card-text">
                    Jay is a developer, author of CSS: The Missing Manual,
                    JavaScript &amp; jQuery: The Missing Manual, and web
                    development teacher.{" "}
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card mb-3">
                <img
                  className="card-img-top img-fluid"
                  src="images/json.png"
                  alt="Card image cap"
                />
                <div className="card-block">
                  <h4 className="card-title">Json Babel</h4>
                  <p className="card-text">
                    All of his professional life, Json has worked with computers
                    online; he is a polyglot programmer and likes using the
                    right tools for the job.{" "}
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class About extends React.Component {
  render() {
    return (
      <div className="main-content">
        <h2>About</h2>
        <p>
          The front end course directory lists many of the courses we teach on
          HTML, CSS, JavaScript and more! Be sure to visit the Teachers section
          to view a list of our talented teachers. Or visit the Courses section
          and select a topic -- HTML, CSS, or JavaScript -- to see a list of our
          courses.
        </p>
      </div>
    );
  }
}

class Repos extends React.Component {
  render() {
    const { route } = this.props;
    let CurrentList = null;
    switch (route) {
      case "css":
        CurrentList = ["How to Make a CSS", "HTML CSS"].map((item, index) => {
          return <li key={index}> {item} </li>;
        });
        break;
      case "javascript":
        CurrentList = ["How to Make a JS", "HTML JS"].map((item, index) => {
          return <li key={index}> {item} </li>;
        });
        break;
      default:
        //'html'
        CurrentList = [
          "How to Make a Website",
          "HTML Forms"
        ].map((item, index) => {
          return <li key={index}> {item} </li>;
        });
        break;
    }
    return (
      <div className="main-content courses">
        <div className="course-header group">
          <h2>REPOS</h2>
          <ul className="course-nav">
            <li>
              <a href="#/repos/html">HTML</a>
            </li>
            <li>
              <a href="#/repos/css">CSS</a>
            </li>
            <li>
              <a href="#/repos/javascript">JavaScript</a>
            </li>
          </ul>

          <ul>{CurrentList}</ul>
        </div>

        {/* Write routes here... */}
      </div>
    );
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: window.location.hash.substr(1)
    };
  }
  //  $(document).ready ()
  componentDidMount() {
    window.addEventListener("hashchange", () => {
      //<a href="#/about">About</a>
      //<li><a href='#/repos/html'>HTML</a></li>
      console.log(window.location.hash.substr(1));

      this.setState({
        route: window.location.hash.substr(1)
      });
    });
  }
  render() {
    let Child;
    let propsForRepos = null;
    switch (this.state.route) {
      case "/about":
        Child = About;
        break;
      case "/repos":
        Child = Repos;
        break;
      case "/repos/html":
        Child = Repos;
        propsForRepos = "html";
        break;
      case "/repos/css":
        Child = Repos;
        propsForRepos = "css";
        break;
      case "/repos/javascript":
        Child = Repos;
        propsForRepos = "javascript";
        break;
      default:
        Child = Home;
    }
    return (
      <div>
        <header>App</header> <Header />
        <menu>
          <ul>
            <li>
              <a href="#/about">About</a>
            </li>{" "}
            <li>
              <a href="#/repos">Repos</a>
            </li>
          </ul>{" "}
        </menu>
        {propsForRepos ? <Child route={propsForRepos} /> : <Child />}
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("container"));
