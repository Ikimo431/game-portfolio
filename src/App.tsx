import './App.css'
import GameInfo from './components/GameInfo'

function App() {
  const images = ["title.png", "room.png", "battle.png"]
  const bulletpoints = ["Made using gamemaker", "Card based combat with fluid animation", "Sprites made using LibreSprite", "Original music made with LMMS"]
  return (
    <div className='main'>
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
