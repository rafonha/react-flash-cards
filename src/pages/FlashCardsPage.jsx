import { useState } from 'react'
import Buttons from '../components/Buttons'
import FlashCard from '../components/FlashCard'
import FlashCards from '../components/FlashCards'
import GenericHeader from '../components/GenericHeader'
import GenericMain from '../components/GenericMain'
import RadioButton from '../components/RadioButton'
import { allFlashCards } from '../data/allFlashCards'
import { helperShuffleArray } from '../helpers/arrayHelpers'

export default function FlashCardsPage() {

  const [allCards, setallCards] = useState(allFlashCards)
  const [showTitle, setshowTitle] = useState(true)

  function handleButtonClick() {
    const shuffleCards = helperShuffleArray(allCards)

    setallCards(shuffleCards);
  }

  function handleShowTitleClick() {
    setshowTitle(true);
  }

  function handleShowDescriptionClick() {
    setshowTitle(false);
  }

  return (
      <>
        <GenericHeader 
          pageTitle={"React Flash Cards"} 
          headerCntClass={"bg-blue-300 mx-auto p-4"}
        />
        <GenericMain>
          <div className='text-center m-4'>
            <Buttons onClickButton={handleButtonClick}>Embaralhar cards</Buttons>
          </div>
          <div className='flex flex-row items-center justify-center'>
            <RadioButton 
              id="radioButtonShowTitleId" 
              name="showInfo" 
              labelDescription="Título" 
              radioChecked={showTitle}
              onRadioClick={handleShowTitleClick} 
              />
            <RadioButton 
              id="radioButtonShowDescriptionId"  
              name="showInfo" 
              labelDescription="Descrição" 
              radioChecked={!showTitle} 
              onRadioClick={handleShowDescriptionClick} 
            />
          </div>
          <FlashCards>
            {allCards.map(({ id, title, description}) => {
              return (<FlashCard key={id} title={title} description={description} />);
            })}
          </FlashCards>
        </GenericMain>
      </>
  )
}
