import { Link } from "react-router-dom";
import ProductsGrid from "../Shop/Products/ProductsGrid";
import Button from "../ui/Button";
import Input from "../ui/Input";

export const Home = () => {
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Welcome to MERN Commerce
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Discover our exclusive collection of unique items.
              </p>
            </div>
            <div className="space-x-4">
              <Link to="/shop">
                <Button title="Shop Now" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center">
            Featured Products
          </h2>
          <div className="mt-8">
            <ProductsGrid lodeMoreHidden />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-950 text-white">
        <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Subscribe to our Newsletter
            </h2>
            <p className="text-sm text-slate-400">
              Get the latest updates and offers.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <div className="w-full">
                <Input
                  className="py-2 rounded shadow-none bg-slate-800 border-2"
                  placeholder="Enter your email"
                  type="email"
                />
              </div>
              <Button
                type="submit"
                className="bg-slate-400/30 hover:bg-slate-400/50"
                title="Subscribe"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
