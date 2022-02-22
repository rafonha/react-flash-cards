import FlashCard from '../components/FlashCard'
import GenericHeader from '../components/GenericHeader'
import GenericMain from '../components/GenericMain'

export default function FlashCardsPage() {
  return (
      <>
        <GenericHeader 
          pageTitle={"React Flash Cards"} 
          headerCntClass={"bg-blue-300 mx-auto p-4"}
        />
        <GenericMain><FlashCard /></GenericMain>
      </>
  )
}
