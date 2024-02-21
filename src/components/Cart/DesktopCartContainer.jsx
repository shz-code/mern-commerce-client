import DesktopCartItem from "./DesktopCartItem";

const DesktopCartContainer = ({ cart }) => {
  const { products } = cart;

  let content = products.map((item) => (
    <DesktopCartItem key={item._id} product={item} />
  ));
  return (
    <div className="cartContainer">
      <div className="relative w-full overflow-auto">
        <table className="cartTable ">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Price(TK)</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>{content}</tbody>
        </table>
      </div>
    </div>
  );
};

export default DesktopCartContainer;
