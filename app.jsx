// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
const CSScourses = [
  {
    title: "CSS Basics",
    description: "CSS (Cascading Style Sheets) is a style sheet language that describes the presentation of web pages. Whereas HTML is what forms the structure of a web page, CSS is what we use to style the HTML with colors, backgrounds, font sizes, layout, and more. As you'll soon learn, CSS is one of the core technologies for designing and building websites.",
    img_src:"https://achievement-images.teamtreehouse.com/badges_css_basics_stage6.png",
    id: "css-1"
  },
  {
    title: "CSS Selectors",
    description: "In this course, we're going to go beyond the basic selector concepts covered in CSS Basics. Besides the common ways to select elements with type, ID and class selectors, we're able to target elements based on their attributes, position in the HTML document, even their relation to other elements.",
    img_src: "https://achievement-images.teamtreehouse.com/badges_css_selectors_stage01.png",
    id: "css-2"
  },
  {
    title: "Responsive Layouts",
    description: "Responsive web design is a collection of techniques for building websites that work on multiple screen sizes. In these lessons, we're going to use the foundational principles of responsive design as a framework for thinking about page layout. By the end, you should have a better understanding of how to approach common decisions in responsive design.",
    img_src: "https://achievement-images.teamtreehouse.com/badges-CSS-ResponsiveLayouts-stage3.png",
    id: "css-3"
  },
  {
    title: "CSS Flexbox Layout",
    description: "Flexbox is a set of CSS properties that give you a flexible way to lay out content. With flexbox you can change the direction, alignment, size and order of elements, regardless of their original size and order in the HTML. You can even stretch and shrink elements and distribute space, all with just a few lines of CSS!",
    img_src: "https://achievement-images.teamtreehouse.com/badges_css_flexbox_layout_stage1.png",
    id: "css-4"
  },
  {
    title: "CSS Transitions and Transforms",
    description: "CSS transitions and transforms can create simple animations that enhance user interactions in websites and apps. In this course, you'll build an interactive image gallery using CSS transitions and transforms.",
    img_src: "https://achievement-images.teamtreehouse.com/css-transitions-and-transforms-badge-02.png",
    id: "css-5"
  },
  {
    title: "Bootstrap 4 Basics",
    description: "Learn to use Bootstrap 4, one of the most popular open source front end frameworks, to help you build a functional design and layout in little time.",
    img_src: "https://achievement-images.teamtreehouse.com/badge_bootstrap-4-basics_stage01.png",
    id: "css-6"
  }
  ];
  
 const HTMLCourses =[
    {
      title: "How to Make a Website",
      description: "If you’ve never built a website before and you have no coding or design experience, this is the place to start. In this project, we learn how to build a modern portfolio website for desktops, tablets, and mobile devices. We start with basic HTML and CSS syntax. Next, we learn how to build custom web pages with an image gallery and contact page. Finally, we walk through how to share a website live on the web.",
      img_src: "https://achievement-images.teamtreehouse.com/bagdes_html_howtobuildawebsite_stage02.png",
      id: "html-1"
    },
    {
      title: "HTML Forms",
      description: "The web is a two-way communication medium. There’s lots of HTML elements for displaying data and producing output, and conversely, there’s also lots of HTML elements for accepting input. Accepting input from the user means creating web forms. In this course, we’ll learn about all the most important form elements that web professionals use on a daily basis.",
      img_src: "https://achievement-images.teamtreehouse.com/badges_html_forms_stage1.png",
      id: "html-2"
    },
    {
      title: "HTML Video and Audio",
      description: "Text and images have always been the foundation of web content, but more than ever, video and audio are also a part of that content mix. Fortunately, we can now create standards-based video and audio players that don't require the use of plugins. Adding video and audio to a webpage is almost as easy as adding an image or formatting some text.",
      img_src: "https://achievement-images.teamtreehouse.com/badges-html-videoaudio-stage1.png",
      id: "html-3"
    },
    {
      title: "SVG Basics",
      description: "Scalable Vector Graphics (SVG) is an XML markup language for creating two-dimensional images using vectors. This is different from traditional raster-based image formats that use pixels, like JPEG and PNG. When used on web pages, SVG images provide an infinite level of detail, so they look sharp regardless of screen size or pixel density. ",
      img_src: "https://achievement-images.teamtreehouse.com/badges-html-svg-stage1.png",
      id: "html-4"
    },
    {
      title: "Responsive Images",
      description: "Using the new source-set and sizes attributes, and the new picture element, it's possible to create images that behave better in a responsive design. These new pieces of markup allow us to deliver the right image to the right device, based on resolution, pixel density, and other factors we define. This will help web pages load faster and look better, and the most capable devices will get the best looking images possible.",
      img_src: "https://achievement-images.teamtreehouse.com/badges_html_respimages_stage2.png",
      id: "html-5"
    },
    {
      title: "Introduction to HTML and CSS",
      description: "Get started creating web pages with HTML and CSS, the basic building blocks of web development. HTML, or Hypertext Markup Language, is a standard set of tags you will use to tell the web browser how the content of your web pages and applications are structured. Use CSS, or Cascading Style Sheets, to select HTML tags and tell the browser what your content should look like. ",
      img_src: "https://achievement-images.teamtreehouse.com/badges_intro_to_html_css_stage-01.png",
      id: "html-6"
    }
  ];
  
const JSCourses = [
  {
    title:"JavaScript Basics",
    description:"JavaScript is a programming language that drives the web: from front-end user interface design, to backend server-side programming, you'll find JavaScript at every stage of a web site and web application. In this course, you'll learn the fundamental programming concepts and syntax of the JavaScript programming language.",
    img_src:"https://achievement-images.teamtreehouse.com/badges_JavaScript_Basics_Stage1.png",
    id: "js-1"
  },
  {
    title:"JavaScript Loops, Arrays and Objects",
    description:"Storing, tracking and handling data is a large part of computer programming. Arrays provide a method for storing multiple values into a single variable. That makes an array a convenient way to pass around a list of items.",
    img_src:"https://achievement-images.teamtreehouse.com/badges_JavaScript_Basics_Stage5.png",
    id: "js-2"
  },
  {
    title: "jQuery Basics",
    description: "jQuery Basics covers why you'd want to use jQuery, what it is and how to include it in your projects. You'll build several projects over the course to give you the confidence to integrate jQuery in your own projects and add that level of flair and interactivity to any site you work on.",
    img_src: "https://achievement-images.teamtreehouse.com/badges_JavaScript_jQueryBasics_Stage1.png",
    id: "js-3"
  },
  {
    title: "AJAX Basics",
    description: "AJAX is an important front-end web technology that lets JavaScript communicate with a web server. It lets you load new content without leaving the current page, creating a better, faster experience for your web site's visitors. In this course, you'll learn how AJAX works and how you can use JavaScript to communicate with a web server.",
    img_src: "https://achievement-images.teamtreehouse.com/badges_JavaScript_AJAXBasics_Stage3.png",
    id: "js-4"
  },
  {
    title: "Interactive Web Pages with JavaScript",
    description: "In this course we’ll create a to-do list application using JavaScript alone, without using any third party libraries. You’ll get to grips with manipulating and traversing the DOM and adding event handlers to web page elements. The things that you can do with JavaScript are always increasing and this course will give you a solid footing going forward.",
    img_src: "https://achievement-images.teamtreehouse.com/bagdes-javascript-interactiveweb-stage-12.png",
    id: "js-5"
  },
  {
    title: "Node.js Basics",
    description: "In this course we will create a command line application to retrieve user's profile information from the Treehouse website. We'll be writing our application in JavaScript to run on the Node.js platform.",
    img_src: "https://achievement-images.teamtreehouse.com/badges_JavaScript_nodeBasics_Stage1.png",
    id: "js-6"
  }
];
// function courses() {
//   HTMLCourses.map((a,b) => {
//     return ( 
//       <div>
//       <h1>Courses</h1>
//       <div className="row">
//         <div className="courses">
//             <div className="col-md-2">
//               <img src={a.img_src} alt=""/>
//             </div>
//             <div className="col-md-10">
//               <p><b>{a.title}</b>
//               {a.description}
//               </p>
//             </div>
//         </div>
//       </div>
//       </div>
//     )
//   }) 
//   }
// WEBPACK FOOTER //,
// ./src/data/courses.js
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
class Teachers extends React.Component {
  render() {
    return (
      <div id="teachers">
        <div className="row">
          <div className=" col-md-6">
            <div className="card teacher">
              <img
                className="teacher-img "
                src="img/angie.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className=" col-md-6">
            <div className="card teacher">
              <img
                className="teacher-img "
                src="img/nodestradamus.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className=" col-md-6">
            <div className="card teacher">
              <img
                className="teacher-img "
                src="img/geo.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className=" col-md-6">
            <div className="card teacher">
              <img
                className="teacher-img "
                src="img/ecma.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className=" col-md-6">
            <div className="card teacher">
              <img
                className="teacher-img "
                src="img/jay.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className=" col-md-6">
            <div className="card teacher">
              <img
                className="teacher-img "
                src="img/json.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="#">
              <span className="material-icons">code</span>
            </a>
          </div>
          <div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav">
                <li>
                  <a href="#section1">HOME</a>
                </li>
                <li>
                <a href="#/about">ABOUT</a>
                </li>
                <li>
                  <a href='#/teachers'>TEACHERS</a>
                </li>
                <li>
                <a href="#/courses">COURSES</a>
                </li>
               
              </ul>
            </div>
          </div>
      </nav>
    )
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
      CurrentList = HTMLCourses.map((a,b) => {
        return ( 
          <li>

          <div>
          <h1>Courses</h1>
          <div className="row">
            <div className="courses">
                <div className="col-md-2">
                  <img src={a.img_src} alt=""/>
                </div>
                <div className="col-md-10">
                  <p><b>{a.title}</b>
                  {a.description}
                  </p>
                </div>
            </div>
          </div>
          </div>
          </li>
        )
      });
        
        //'html'
        // CurrentList = [
        //   "How to Make a Website",
        //   "HTML Forms"
        // ].map((item, index) => {
        //   return <li key={index}> {item} </li>;
        // });
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
      case "/teachers":
        Child = Teachers;
        break;
      case "/courses":
        Child = courses;
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
      <div className="container ">
        <div className="row">
        
          <div className="col-md-8 col-md-offset-2 course">
            <menu>
            <Nav/>  
            {propsForRepos ? <Child route={propsForRepos} /> : <Child />}

            </menu>
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("container"));
