import React, {useState} from 'react';
import './App.scss';
import Nav from './comps/Nav';
import Hero from './comps/Hero';
import Project from './comps/Projects';
import About from './comps/About';
import Contact from './comps/Contact';
import ProjectPage from './comps/Projects/ProjectPage';

function App() {

// pass project values into pop up
const [pickProject, setPickProject] = useState(0);

var PTitle = null,
    PRole = null,
    PSkills = null,
    Pdescr = null,
    PImgs = null;

if(pickProject === 0){
  PTitle = 'Happihour';
  PRole = 'Front-End Developer';
  PSkills = ['React Native', 'PHP', 'MySQL'];
  Pdescr = ['Happihour is an app made to combat the increasing levels of loneliness and isolation amongst working professionals in the city of Vancouver. Happihour does this by promoting social bonding in a affordable and fun environment. No longer will you have to choose between convenience and affordability. With Happihour you can have both. ',
            'When Designing Happihour our teams approach was to make an easy to use and proffesional looking apoplication. Our team began by sketching out low-fidelity prototypes. After sketching out low-fidelity prototypes we continued by creating wireframes. The wireframes were then turned into the final mock ups. They would undergo adjustments based on the user testing conducted.',
            'To develop Happihour we began by identifying certain comps that could be reused in the application (like the menubar). After identifying them we would begin coding them out and use them to build out the individual screens. The app made extensive use of useStates and fetch requests.'];
  PImgs = ['P1_img0','P1_img1','P1_img2','P1_img3'];
} else
if(pickProject === 1){
  PTitle = 'Dino-World';
  PRole = 'JavaScript Developer';
  PSkills = ['HTML', 'CSS', 'JavaScript'];
  Pdescr = ['Dino-World is a web application to teach kids about the wonderful world of dinosaurs. Kids can explore differant time periods and learn about a variety of dinosaurs, they can feed them, and even watch them grow! Whenever you fully grow a dinosaur it will be added to your Dino-Dex. Grow all the dinosaurs and become the Dino-King!',
            'When designing Dino-World my team had to make sure it was colourful and fun. after creating the styleguide and wireframes, we built our mock ups. The majority of the time was spent designing the nearly 50 dinosaurs (excluding egg and baby dinosaurs) with Adobe Illustrator.',
            'For development I focused on the Javascript functionality to make the game interactive and dynamic. This included creating new elements that would appear ons screen when someone tries to feed the dinosaur, making the dinosaur grow when eating the food, as well as adding audio. For this project I made use of proxies to update the user interface.'];
  PImgs = ['P2_img0','P2_img1','P2_img2','P2_img3'];
} else
if(pickProject === 2){
  PTitle = 'Pokemon TCG';
  PRole = 'Front-End Developer';
  PSkills = ['HTML', 'CSS', 'JavaScript'];
  Pdescr = ['Pokemon TCG is an interactive web application game that promotes pokemon trading cards. The project was made as part of a school assignment. The initial requirements were to make an interactive page that shows off various products. I decided to try creating a mini pokemon game as it would be a fun way to challenge myself wiht JavaScript.Inside the game there is a store where users can view the actual products',
            'The designs for Pokemon TCG were all made using Adobe Illustrator. Admittedly a lot of the assets could use some work, however, the priority of this particular project was furthering my development skills. In the future I would like to revisit this project and expand it significantly as well as giving it a make over.',
            'The develpment for Pokemon TCG was a lot of fun and challenging as it was my first use of JavaScript. It primarily consists of a lot of conditional statements. For example if you press a certain key move the character etc. Additional things I would like to add would include collision detection.'];
  PImgs = ['P3_img0','P3_img1','P3_img2','P3_img3'];
} else
if(pickProject === 3){
  PTitle = 'Gandalf Portrait';
  PRole = 'Digital Artist';
  PSkills = ['Adobe Photoshop', null, null];
  Pdescr = ['The Gandalf Portrait is a painting i made using Photoshop. I have always been a huge Tolkien fan and felt that this would be a nice tribute.',
            'To create this painting I used an initial reference image. The first step was to identify the highlights and shadows. After painting the lights I smudged the colours to make it blend more naturally. ',
            'After blending and smudging the colours, I went on to go over the details in the image. I would draw individual strands of hair and create a seperate brush of singular hairs for the beard. I would place these individually to cretae a bushy beard look. After applying all the details I did some touch ups with shading to complete the work.'];
  PImgs = ['','','',''];
} else
if(pickProject === 4){
  PTitle = 'Mecha Godzilla Poster';
  PRole = 'Digital Artist';
  PSkills = ['Adobe Photoshop'];
  Pdescr = ['Happihour is an app made to combat the increasing levels of loneliness and isolation amongst working professionals in the city of Vancouver. Happihour does this by promoting social bonding in a affordable and fun environment. No longer will you have to choose between convenience and affordability. With Happihour you can have both. ',
            'When Designing Happihour our teams approach was to make an easy to use and proffesional looking apoplication. Our team began by sketching out low-fidelity prototypes. After sketching out low-fidelity prototypes we continued by creating wireframes. The wireframes were then turned into the final mock ups. They would undergo adjustments based on the user testing conducted.',
            'To develop Happihour we began by identifying certain comps that could be reused in the application (like the menubar). After identifying them we would begin coding them out and use them to build out the individual screens. The app made extensive use of useStates and fetch requests.'];
  PImgs = ['','','',''];
} else
if(pickProject === 5){
  PTitle = 'PS4 Controller';
  PRole = 'Digital Artist';
  PSkills = ['Adobe Illustrator'];
  Pdescr = ['Happihour is an app made to combat the increasing levels of loneliness and isolation amongst working professionals in the city of Vancouver. Happihour does this by promoting social bonding in a affordable and fun environment. No longer will you have to choose between convenience and affordability. With Happihour you can have both. ',
            'When Designing Happihour our teams approach was to make an easy to use and proffesional looking apoplication. Our team began by sketching out low-fidelity prototypes. After sketching out low-fidelity prototypes we continued by creating wireframes. The wireframes were then turned into the final mock ups. They would undergo adjustments based on the user testing conducted.',
            'To develop Happihour we began by identifying certain comps that could be reused in the application (like the menubar). After identifying them we would begin coding them out and use them to build out the individual screens. The app made extensive use of useStates and fetch requests.'];
  PImgs = ['','','',''];
}

// open and close projet item pop ups
const [showProject, setShowProject] = useState(false);

var projectPop = null;

if(showProject == false){
  projectPop = null;
} else {
  projectPop = <ProjectPage setShowProject={setShowProject} title={PTitle} role={PRole} skills={PSkills} descr={Pdescr} imgs={PImgs} />
}

  return (
    <div style={{overflow:'hidden'}}>
      <Nav />
      <Hero id='hero'/>
      <Project id='project' setShowProject={setShowProject} setPickProject={setPickProject}/>
      <About id='about'/>
      <Contact id='contact'/>
      {projectPop}
    </div>
  );
}

export default App;
