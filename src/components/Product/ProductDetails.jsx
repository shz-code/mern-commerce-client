import { Star, Tag, User } from "lucide-react";
import Button from "../ui/Button";

const ProductDetails = () => {
  //   const { id } = useParams();
  return (
    <div className="container mx-auto px-2 py-8">
      <main className="max-w-[1000px] w-full mx-auto bg-white rounded shadow p-4">
        <div className="md:flex gap-4">
          <div className="w-full relative">
            <img
              alt="Product Image"
              src="https://erabanbd.com/wp-content/uploads/2024/01/qcy-watch-gt.png"
            />
            <div className="absolute top-0 left-0 w-full h-full hover:bg-slate-800/10 transition-all"></div>
          </div>
          <div className="md:w-3/4">
            <div className="sticky top-2 space-y-4">
              <h1 className="mt-6 text-3xl font-bold">The Trendy T-Shirt</h1>
              <span className="w-fit bg-slate-800 rounded-full px-3 pt-1 pb-2 text-white flex gap-2 items-center">
                <Tag size={15} />
                Category
              </span>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                The perfect blend of comfort and style, this trendy T-shirt is a
                must-have for your wardrobe.
              </p>
              <p className="flex -ms-2">
                <Star className="fill-yellow-500 stroke-none" />
                <Star className="fill-yellow-500 stroke-none" />
                <Star className="fill-yellow-500 stroke-none" />
                <Star className="fill-yellow-500 stroke-none" />
                <Star className="fill-yellow-500 stroke-none" />
              </p>
              <div className="mt-4 text-2xl font-extrabold">29.99৳</div>
              <div>
                <Button className="w-full" title="Add to cart" />
                <Button
                  title="Buy now"
                  className="w-full bg-slate-100 text-black hover:bg-slate-200 mt-2"
                />
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
        <div className="p-4">
          <h2 className="text-2xl font-medium">Customer Reviews</h2>
          <div className="mt-4 space-y-4">
            <div className="flex items-center gap-4">
              <span className="inline-block p-2 rounded-full bg-slate-200 cursor-pointe">
                <User size={20} />
              </span>
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <div className="text-sm font-medium">John Doe</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    2 days ago
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  I love this T-shirt! The material is very soft and it fits
                  perfectly. I will definitely be buying more!
                </p>
                <p className="flex">
                  <Star className="fill-yellow-500 stroke-none" />
                  <Star className="fill-yellow-500 stroke-none" />
                  <Star className="fill-yellow-500 stroke-none" />
                  <Star className="fill-yellow-500 stroke-none" />
                  <Star className="fill-yellow-500 stroke-none" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetails;
