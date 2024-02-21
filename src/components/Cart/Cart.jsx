import { useGetCartQuery } from "../../features/cart/cartApi";
import ProductsGrid from "../Shop/Products/ProductsGrid";
import Error from "../ui/Error";
import Loader from "../ui/Loader";
import CartSummary from "./CartSummary";
import DesktopCartContainer from "./DesktopCartContainer";
import MobileCartContainer from "./MobileCartContainer";

const Cart = () => {
  const { data, isError, isLoading, error } = useGetCartQuery();

  let content = null;
  let total = 0;
  if (isLoading) content = <Loader />;
  else if (!isLoading && isError) content = <Error message={error.data} />;
  else if (!isLoading && !isError && !data.price)
    content = <Error message="Nothing in Cart" />;
  else if (!isLoading && !isError && data.price) {
    total = data.price;
    content = (
      <>
        <DesktopCartContainer cart={data} />
        <MobileCartContainer cart={data} />
      </>
    );
  }
  return (
    <div className="container mx-auto px-2 py-8">
      <div className="lg:flex gap-4 space-y-6 lg:space-y-0">
        {content}
        <div className="cartSummary w-full lg:w-2/4">
          <CartSummary total={total | 0} />
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none pb-8">
          Related Products
        </h1>
        <ProductsGrid lodeMoreHidden query="order=desc&sort=price" mini />
      </div>
    </div>
  );
};

export default Cart;
