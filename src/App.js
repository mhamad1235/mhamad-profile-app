import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function App() {
  
const [image,setimage]=useState(true);
const whatsup=()=>{
 var phoneNumber = '9647754812814';
 var whatsappLink = 'https://wa.me/' + phoneNumber;
 window.open(whatsappLink);
}

  const skills = [
    { category: 'Programming Languages', skills: ['JAVA', 'PYTHON', 'PHP', 'JAVASCRIPT'] },
    { category: 'Libraries & Frameworks', skills: ['LARAVEL', 'Express.js', 'Bootstrap','REACT','VUE','NODE'] },
    { category: 'Database', skills: ['MongoDB', 'MySQL'] },
    { category: 'Version Control', skills: ['Git', 'GitHub'] },
    { category: 'Other', skills: ['Responsive Design', 'RESTful APIs','AJAX','JQUERY','LIVEWIRE'] },
  ];
  
const sentgmail=()=>{
  const emailAddress = 'mhamadsalliim@gmail.com';
  const mailtoLink = `mailto:${emailAddress}?subject=Hello&body=Hi, I'm reaching out to you...`;
  window.location.href = mailtoLink;
 }
  return (
    <div>
    <div className="App">
      
       <div class="navbar">
        
    <div class="menu">
    <a href="#SKILL">Recent Work</a>
      <a href="#contact">Contact</a>
    
    </div>
    <div class="logo">
    <img className='App-logo' src="/images/newmhamad (4).png" alt="Mhamad" />

    </div>
  </div>
  
      <header className="App-header">
      <div class="moving-rectangle"></div>
  <div class="moving-rectangle2"></div>
      <div class="flex-container2">
       
    <div class="text-container">
    <p className='smalltext'>SOFTWARE ENGINEERING</p>
      <h2>HI, I AM A SOFTWARE ENGINEER and  WEB DEVELOPER</h2>
      <div class="flex-container2">
      <div class="button-container" onClick={whatsup} onMouseEnter={()=>setimage(!image)}
      onMouseLeave={()=>setimage(!image)}>
      <img width="48" height="48" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1"/>
    <span>LET'S CHAT ON WHATSAPP</span>
    </div>
       <button onClick={sentgmail} className='btn2' onMouseEnter={()=>setimage(!image)}
      onMouseLeave={()=>setimage(!image)}
      > OR SENT ME AN GMAIL</button>
    </div>
    
    </div>
   
    <div class="image-container">
      {
      image ?
     <img src="/images/test.jpg" alt="Image" />
     :<img src="/images/test2.jpg" alt="Image" />
      }
 
    </div>
    
  </div>
 
  
      </header>
      </div>
      <div class="academic-description">
        <h2> Description: </h2>
        <p>
        I am a highly motivated and accomplished professional with a strong educational background in Software Engineering. Holding a bachelor's in Software Engineering, I have acquired a comprehensive skill set in programming and information technology, positioning myself as a proficient and innovative contributor to the field.
        My academic journey has equipped me with a solid foundation in software development methodologies, algorithms, data structures, and programming languages such as <a href='#SKILL'>Click</a>. Throughout my studies, I have demonstrated an aptitude for solving complex problems and a passion for creating efficient, scalable, and user-friendly software solutions.
        </p>
       
    </div>
    <div id='SKILL' class="skills-container">
        <h2>Programming Skills</h2>
        <div class="skill-category">
            <h3>Languages</h3>
            <p>JAVA, PYTHON, PHP, JAVASCRIPT</p>
        </div>
        <div class="skill-category">
            <h3>Libraries & Frameworks</h3>
            <p>LARAVEL, NODE.JS EXPRESS.JS, BOOTSTRAP, REACT.JS, VUE.JS</p>
        </div>
        <div class="skill-category">
            <h3>Database</h3>
            <p>MongoDB, MySQL</p>
        </div>
        <div class="skill-category">
            <h3>Version Control</h3>
            <p>Git, GitHub</p>
        </div>
        <div class="skill-category">
            <h3>Other</h3>
            <p>Responsive Design, RESTful APIs, AJAX, JQUERY, LIVEWIRE</p>
        </div>
    </div>
    <div class="image-containernew">
        <h2>POS mangement system</h2>
        <div class="image-overlay">
            <img className='img1' src="/images/pos1.jpg" alt="Image 1" />
            <img className='img2'  src="/images/pos2.jpg"alt="Image 2" />
        </div>
    </div>
    <div class="image-containernew">
        <h2>Reseacrch lecturer point</h2>
        <div class="image-overlay">
            <img className='img1' src="/images/lec1.jpg" alt="Image 1" />
            <img className='img2'  src="/images/lec2.jpg"alt="Image 2" />
        </div>
    </div>
    <div class="image-containernew">
        <h2>GYM management system</h2>
        <div class="image-overlay">
            <img className='img1' src="/images/gym1.jpg" alt="Image 1" />
            <img className='img2'  src="/images/gym2.jpg"alt="Image 2" />
        </div>
    </div>
    <div class="image-containernew">
        <h2>QR code car scan</h2>
        <div class="image-overlay">
            <img className='img1' src="/images/car1.jpg" alt="Image 1" />
            <img className='img2'  src="/images/car2.jpg"alt="Image 2" />
        </div>
    </div>
    <div class="image-containernew">
        <h2>Live chat </h2>
        <div class="image-overlay">
            <img className='img1' src="/images/chart2.jpg" alt="Image 1" />
            <img className='img2'  src="/images/chat1.jpg"alt="Image 2" />
        </div>
    </div>
    <div class="image-containernew">
        <h2>Search work </h2>
        <div class="image-overlay">
            <img className='img1' src="/images/work1.png" alt="Image 1" />
            <img className='img2'  src="/images/work2.png"alt="Image 2" />
        </div>
    </div>
    <div class="footer-dark">
        <footer id='contact'>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li>Web design</li>
                            <li>Development</li>
                            <li>Hosting</li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Email</h3>
                        <ul>
                            <li onClick={sentgmail}>mhamadsalliim@gmail.com</li>
                         
                        </ul>
                    </div><div class="col-sm-6 col-md-3 item">
                        <h3>PhoneNumber</h3>
                        <ul>
                            <li onClick={whatsup}>0775 481 28 14</li>
                         
                        </ul>
                    </div>

                    <div class="col item social">
                      <a onClick={whatsup}><img width="48" height="48" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1"/>
                      </a><a href="https://www.facebook.com/mhamadkoye99"><img width="48" height="48" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new"/>
                      </a><a href="https://www.instagram.com/mhamad_s_hamad/"><img width="48" height="48" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new"/>
                      </a><a href="https://linkedin.com/in/muhamad-salim"><img width="48" height="48" src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin"/></a>
                      
                      </div>
                </div>
                
            </div>
        </footer>
    </div>
    
    </div>
  );
}

export default App;
