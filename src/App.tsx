import './App.css'
import GameInfo from './components/GameInfo'

function App() {
  const images = ["title.png", "room.png", "battle.png"]
  const bulletpoints = ["Made using gamemaker", "Card based combat with fluid animation", "Sprites made using LibreSprite", "Original music made with LMMS"]
  return (
    <div className='main'>
        <section id="aboutme">
          <div className='about'>
            <h2>Owen Johnston</h2>
          <p>I am a senior studying computer science at Carroll University, with minors in math and art. Programming is my strongsuit, 
            and I chose an art minor to broaden my skillset and improve one of my weak points in game development. This portfolio contains just my game work, for  
            more specific information on my skillsets and to see my non-game projects, view my full portfolio <a href='https://ikimo431.github.io/Portfolio-Site/index.html'>here.</a>
          </p>
          </div>
          
          <ul id="links">
            <li><a>Itch.io</a></li>
            <li><a>Github</a></li>
            <li><a>LinkedIn</a></li>
            <li>Contact Me: owenj120@gmail.com</li>
          </ul>
        </section>
        <GameInfo title="Death's Janitor" description="Play as death's janitor in this deckbuilding RPG. Gain new cards and grow stronger as 
                        you explore the crypts and clean up the undead." 
        images={images} bulletpoints={bulletpoints} link="https://ikimo431.itch.io/deaths-janitor"
        mainBg='#827e7d' headerBg='#735b30' galleryBg='#4d2020' infoBg='#733232'
        caseStudy="Death'sJanitor_CaseStudyDTCT.pdf"
        ></GameInfo>
        <GameInfo title= "Rhythm Pillars" description = "Move and hit the pillars to the beat!" link="https://ikimo431.itch.io/rhythm-pillars"
        images = {["RhythmPillarsTitle.png", "RhythmPillarsGif.gif", "RhythmPillarsEnd.png"]} bulletpoints={["Created using GameMaker", "Scripting done in GML", "Art and animations created using LibreSprite", 
          "Music made in LMMS and Ableton Live"]}
        mainBg='#431a54' headerBg='#956fa6' galleryBg='#654175' infoBg='#935bab' buttonBg='#b46cd1ff'
          />
    </div>
  )
}

export default App
