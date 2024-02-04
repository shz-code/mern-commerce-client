import toast from "react-hot-toast";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import AllCategories from "./AllCategories";

const Categories = () => {
  return (
    <main className="space-y-2">
      <AllCategories />
      <form className="bg-white shadow rounded">
        <div className="p-4">
          <div>
            <h3 className="text-3xl font-bold">Category Details</h3>
            <p className="text-sm">Enter the details of your category.</p>
          </div>
          <div>
            <form className="space-y-1 mt-4">
              <div className="space-y-1">
                <label className="text-sm font-medium" htmlFor="name">
                  Category Name
                </label>
                <Input
                  className="py-2 rounded shadow-none bg-transparent border-2 border-slate-200 text-black"
                  id="name"
                  placeholder="Fashion"
                  required
                  type="text"
                />
              </div>
            </form>
          </div>
        </div>

        <div className="flex gap-2 pb-4 px-4">
          <Button title="Submit" type="submit" />
          <Button
            className="bg-white text-black border-2 border-slate-200 hover:bg-slate-200"
            title="Reset"
            type="reset"
            onClick={() => {
              toast.success("Reset");
            }}
          />
        </div>
      </form>
    </main>
  );
};
export default Categories;
