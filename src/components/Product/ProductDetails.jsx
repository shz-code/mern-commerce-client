import { Star, Tag } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useUpdateCartMutation } from "../../features/cart/cartApi";
import { useGetProductQuery } from "../../features/products/productsApi";
import { useGetProfileQuery } from "../../features/profile/profileApi";
import { toggleCartSlideOpen } from "../../features/utility/utilitySlice";
import Button from "../ui/Button";
import Error from "../ui/Error";
import Loader from "../ui/Loader";
import Comments from "./Comments";
import NewComment from "./NewComment";

const ProductDetails = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useGetProductQuery(id);

  const dispatch = useDispatch();
  const [updateCart] = useUpdateCartMutation();

  const { _id } = useSelector((state) => state.user);
  const {
    data: profile,
    isLoading: profileLoading,
    isError: profileError,
  } = useGetProfileQuery(_id);

  let content = null;
  if (isLoading) content = <Loader />;
  else if (!isLoading && isError) content = <Error message={error.data} />;
  else if (!isLoading && !isError)
    content = (
      <>
        <div className="md:flex gap-4">
          <div className="w-full relative">
            <img
              alt="Product Image"
              src={`${import.meta.env.VITE_API_URL}/product/photo/${data._id}`}
            />
            <div className="absolute top-0 left-0 w-full h-full hover:bg-slate-800/10 transition-all"></div>
          </div>
          <div className="md:w-3/4">
            <div className="sticky top-2 space-y-4">
              <h1 className="mt-6 text-3xl font-bold">{data.name}</h1>
              <span className="w-fit bg-slate-800 rounded-full px-3 pt-1 pb-2 text-white flex gap-2 items-center">
                <Tag size={15} />
                {data.category.name}
              </span>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                {data.description}
              </p>
              <p className="flex -ms-2">
                <Star className="fill-yellow-500 stroke-none" />
                <Star className="fill-yellow-500 stroke-none" />
                <Star className="fill-yellow-500 stroke-none" />
                <Star className="fill-yellow-500 stroke-none" />
                <Star className="fill-yellow-500 stroke-none" />
              </p>
              <div className="mt-4 text-2xl font-extrabold">{data.price}৳</div>
              <div className="flex justify-between">
                <div>
                  Available:{" "}
                  <span className="font-semibold">
                    {data.quantity - data.sold}
                  </span>{" "}
                </div>
                <div>
                  Sold: <span className="font-semibold">{data.sold}</span>
                </div>
              </div>
              <div>
                {data.quantity - data.sold > 0 ? (
                  <>
                    <Button
                      className="w-full"
                      title="Add to cart"
                      onClick={async () => {
                        await updateCart({
                          product: id,
                          price: data.price,
                          name: data.name,
                        });
                        dispatch(toggleCartSlideOpen());
                      }}
                    />
                  </>
                ) : (
                  <Button
                    title="Not in stock"
                    className="disabled:bg-red-800 w-full"
                    disabled
                  />
                )}
              </div>
              <div className="space-y-2">
                <div className="p-4 border-2 rounded text-slate-800 text-center">
                  Your payment will be processed by SSL Commerz
                  <div className="w-32 mx-auto mt-2">
                    <img
                      src="https://securepay.sslcommerz.com/public/image/sslcommerz.png"
                      alt="SSL Commerz Logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {!profileLoading &&
          !profileError &&
          !isLoading &&
          !isError &&
          profile.orderItems.includes(id) && (
            <div className="mt-4 p-4 rounded border-2 shadow-sm">
              <NewComment product={data} profile={profile} />
            </div>
          )}
        <div className="p-4">
          <h2 className="text-2xl font-medium">Customer Reviews</h2>
          {data.comments.length ? (
            <Comments comments={data.comments} />
          ) : (
            <div>
              <p className="mt-4">No Reviews Yet!</p>
              <p className="flex -ms-1">
                <Star className="fill-slate-200 stroke-none" />
                <Star className="fill-slate-200 stroke-none" />
                <Star className="fill-slate-200 stroke-none" />
                <Star className="fill-slate-200 stroke-none" />
                <Star className="fill-slate-200 stroke-none" />
              </p>
            </div>
          )}
        </div>
      </>
    );

  return (
    <div className="container mx-auto px-2 py-8">
      <main className="max-w-[1000px] w-full mx-auto bg-white rounded shadow p-4">
        {content}
      </main>
    </div>
  );
};

export default ProductDetails;
