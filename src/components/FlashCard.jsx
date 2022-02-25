import { useEffect, useState } from "react"

export default function FlashCard({
  title = 'Título do card',
  description = 'Descrição do card',
  showFlashCardTitle = true,
}) {

  const [showTitle, setshowTitle] = useState(showFlashCardTitle)

  useEffect(() => {
    setshowTitle(showFlashCardTitle)
  }, [showFlashCardTitle])
  
  
  const fontSizeClassName = showTitle ? 'text-xl' : 'text-md'

  function handleCardClick() {
    setshowTitle(currentShowTitle => !currentShowTitle)
  }

  return (
    <div className="shadow-lg p-4 m-2 w-80 h-48 flex flex-row items-center justify-center cursor-pointer" onClick={handleCardClick}>
      <p className={`font-semibold ${fontSizeClassName}`}>{showTitle ? title : description}</p>
    </div>
  )
}
