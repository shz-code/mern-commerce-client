import MobileCartItem from "./MobileCartItem";

const MobileCartContainer = ({ cart }) => {
  const { products } = cart;

  let content = products.map((item) => (
    <MobileCartItem key={item._id} product={item} />
  ));
  return <div className="mobileCartContainer">{content}</div>;
};

export default MobileCartContainer;
