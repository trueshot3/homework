const shirtRed = 'img/red.png';
const shirtOrange = 'img/orange.png';
const shirtYellow = 'img/yellow.png';

const Select = ({ handleSelect }) => {
  return (
    <select name="select" class="ctrl" onChange={handleSelect}>
      <option value={shirtRed}>Red</option>
      <option value={shirtOrange}>Orange</option>
      <option value={shirtYellow}>Yellow</option>
    </select>
  );
};

export default Select;