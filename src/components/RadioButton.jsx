import { getNewId } from "../services/idService";

export default function RadioButton({
    id = getNewId(),
    name = 'radioName',
    labelDescription = 'label do botão',
    radioChecked = false,
    onRadioClick = null
}) {

    function handleRadioButtonChange() {
        if (onRadioClick) {
            onRadioClick();
        }
    }
  return (
    <div className="flex flex-row items-center space-x-2 mx-2">
        <input type="radio" name={name} id={id} checked={radioChecked} onChange={handleRadioButtonChange} />
        <label htmlFor="radio">{labelDescription}</label>
    </div>
  )
}
