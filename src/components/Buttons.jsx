export default function Buttons({
    children: description = 'Descrição do botão',
    onClickButton = null,
}) {

    function handleButtonClick() {
        if (onClickButton) {
            onClickButton();
        }
    }

    return (
      <button className="bg-red-300 border p-2 m-2" onClick={handleButtonClick}>{description}</button>
  )
}
