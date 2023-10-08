const Item = ({ src, handleDelete }) => {
  return (
    <li className="item">
      <img src={src} alt="상품" />
    </li>
  );
};

export default Item;