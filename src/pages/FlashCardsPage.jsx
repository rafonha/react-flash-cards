import { useState } from 'react'
import Buttons from '../components/Buttons'
import FlashCard from '../components/FlashCard'
import FlashCards from '../components/FlashCards'
import GenericHeader from '../components/GenericHeader'
import GenericMain from '../components/GenericMain'
import { allFlashCards } from '../data/allFlashCards'
import { helperShuffleArray } from '../helpers/arrayHelpers'

export default function FlashCardsPage() {

  const [allCards, setAllCards] = useState(allFlashCards)

  function handleButtonClick() {
    const shuffleCards = helperShuffleArray(allCards)

    setAllCards(shuffleCards);
  }

  return (
      <>
        <GenericHeader 
          pageTitle={"React Flash Cards"} 
          headerCntClass={"bg-blue-300 mx-auto p-4"}
        />
        <GenericMain>
          <Buttons onClickButton={handleButtonClick}>Embaralhar cards</Buttons>
          <FlashCards>
            {allCards.map(({ id, title, description}) => {
              return (<FlashCard key={id} title={title} description={description} />);
            })}
          </FlashCards>
        </GenericMain>
      </>
  )
}
