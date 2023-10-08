import Item from './Item'

const ItemList = ({ itemList, handleDelete }) => {
  return (
    <ul id="itemList">
      {itemList.map((color, index) => <Item src={color} key={index} />)}
    </ul>
  );
};

export default ItemList;