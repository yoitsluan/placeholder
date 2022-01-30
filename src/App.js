import './App.css';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { GoogleAuthProvider } from "firebase/auth";



const provider = new GoogleAuthProvider();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnT0a3m609fqxBUy5j2M3KiP_n562ndu8",
  authDomain: "steppingstone-44c9f.firebaseapp.com",
  projectId: "steppingstone-44c9f",
  storageBucket: "steppingstone-44c9f.appspot.com",
  messagingSenderId: "78927862221",
  appId: "1:78927862221:web:7befcd5ea95907ca414c84"
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

const login = async () => {
  signInWithPopup(auth, provider)
};
const logout = () => {
  signOut(auth);
};

function App() {
  const [user, loading, error] = useAuthState(auth);


  return (
    <div className="App">
      <header className="Nav-Bar">
        <p>
          <a class="link">Stepping Stone</a>
        </p>

        <ul className="navigation">
        <li class="parent"><a class="link" href="#landingPage">Home</a></li>
        <li class="parent"><a class="link" href="#overviewPage">Overview</a></li>
        <li class="parent"><a class="link" href="#financialLiteracy">Financial Literacy</a></li>
        <li class="parent"><a class="link" href="#resourceHubFinder">Resource Hub Finder</a></li>
        <li class="parent"><a class="link" href="#emailModule">Email Module</a></li>
        <li class="parent"><a class="link" href="#aboutUs">About Us</a></li>

        </ul>
      </header>


      {user ? (
        <>
          <p href="#" onClick={() => auth.signOut()} class="Login">Sign out</p>;
          <p className="page">{user.email}'s Portal</p>
        </>
                ): (
                  console.log("hello")
                )}

      <div className="Landing-Page page" id="landingPage"> 
      <body>
    <section class="hero">
        <div class="container">
            <div class="left-col">
                <p class="subhead">Stepping Stone</p>
                <h1>Take your first step in rebuilding your life through remote learning.</h1>
                <h1>Click play on the video now!</h1>
                <div>
                {user ? (
                  <p href="#" onClick={() => auth.signOut()} class="Login">Sign out</p>
                ): (
                  <a href="#" onClick={() => login()} class="Login">Login</a>
                )}
                </div>
            </div>
            <div class="right-col">
                <p class="subhead">Press Play to start</p>
                <div class="video-right-col">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/HYqMaHieh1s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
                </div>
                <div>
                  <a href="#overviewPage">
                    <span class="bottom"></span>
                  </a>
                </div>
            </div>

        </div>

    </section>
</body>
      </div>

      <div className="Overview page" id='overviewPage'> 
      <h1 class="title is-1">Overview Page </h1>
      <div class="columns">
        <div class="column">
            <h1 class="title is-1">Learn Financial Literacy </h1>
            <div class="box">
                Learn about the financial skills and knowledge that you will carry until the near future
            </div>
        </div>
        <div class="column">
            <h1 class="title is-1">Locate Resource Hubs</h1>
            <div class="box">
                Find available resources closest to you. We have information for shelters, covid testing, food banks, and libraries.
            </div>
        </div>
        <div class="column">
            <h1 class="title is-1">Email Importance</h1>
            <div class="box">
                There are many benefits to having an email and we can help walk you through that process!
            </div>
        </div>
        <div class="column">
            <h1 class="title is-1">About Us </h1>
            <div class="box">
                Learn about our story and why we truly believe in providing beneficial opportunities. 
            </div>
        </div>
    </div>
      </div>

      <div className="Financial-Literacy page" id='financialLiteracy'> 
      <h1 class="title is-1">Financial Literacy </h1>
      <div id="div1">
        <p>THE IMPORTANCE OF FINANCIAL LITERACY

           ---- Financial literacy desrcibes the ability to understand and use financial skills. These video playlists </p>
    </div>

    <div id="div2">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/1V_5R6dHNFE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div id="div3">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/4j2emMn7UaI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div id="div4"> 
        <iframe width="560" height="315" src="https://www.youtube.com/embed/i7ul4LNTnfI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
      </div>

      <div className="Resource-Hub-Finder page" id='resourceHubFinder'>
      <h1 class="title is-1">Resource Hub Finder </h1>
      <div class="columns">
        <div class="column">
            FOOD BANKS 
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d54938.46754955058!2d-96.36032731949238!3d30.61551486628666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sfood%20banks!5e0!3m2!1sen!2sus!4v1643528400139!5m2!1sen!2sus" width="200" height="300" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
        </div>
        <div class="column">
            COVID CENTERS
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d54938.137566972364!2d-96.35809576053848!3d30.616096413404822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scovid%20testing%20near%20me!5e0!3m2!1sen!2sus!4v1643528476673!5m2!1sen!2sus" width="200" height="300" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
        </div>
        <div class="column">
           Shelters
           <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d54929.08820624283!2d-96.35157266716051!3d30.632040732516348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sshelters!5e0!3m2!1sen!2sus!4v1643528542055!5m2!1sen!2sus" width="200" height="300" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
        </div>
        <div class="column">
            Libraries 
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d54931.69284575541!2d-96.35826749980158!3d30.627452314197967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sLibraries!5e0!3m2!1sen!2sus!4v1643528585074!5m2!1sen!2sus" width="200" height="300" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
        </div>
      </div>
      </div>

      <div className="Email-Module page" id="emailModule"> 
        Email Module
      </div>

      <div className="About-Us page" id="aboutUs"> 
      <div class="square" id="left_align"></div>
        <div class="square" id="right_align"></div>
        <div class="navhead1" class="textstyle2">
            <h1>ABOUT US</h1>
        </div>
        <div class="first-bar">
            <div class="headersbar1">
                <div class="header1left">
                    <h1 class="textstyle">To give the less fortunate the stepping stone to rebuild their lives through self-development and remote learning.</h1>
            </div>
            </div>
            <div class="writings1">
                <div class="left1">
                    <p class="textstyle">Our Story</p>
                </div>
                <div class="middle1">
                    <p class="textstyle" id="left_align">Our story began when we started volunteering in our community. We realized that everyone’s effort towards helping neighborhood by neighborhood hugely impacts people’s lives. The pandemic furthered accelerated our realization towards this. Before the pandemic, none of us had given a second thought at the issue of homelessness across the nation. However, after the lockdowns started and millions of people were losing their source of income, we as a group had started to realize that the importance of having a healthy lifestyle is of utmost importance.</p>
                <img src="testimage.png" id="right_align" width="640" height="480"/>
                </div>
            </div>
        </div>
      </div>

    </div>
  );
}

export default App;


