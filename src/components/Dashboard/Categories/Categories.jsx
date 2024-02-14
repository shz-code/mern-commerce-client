import { useState } from "react";
import { useAddCategoryMutation } from "../../../features/categories/categoriesApi";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import AllCategories from "./AllCategories";

const Categories = () => {
  const [name, setName] = useState("");

  const [addCategory, { isLoading }] = useAddCategoryMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addCategory({ name: name });
    setName("");
  };

  return (
    <main className="space-y-2">
      <AllCategories />
      <form className="bg-white shadow rounded" onSubmit={handleSubmit}>
        <div className="p-4">
          <div>
            <h3 className="text-3xl font-bold">Category Details</h3>
            <p className="text-sm">Enter the details of your category.</p>
          </div>
          <div>
            <div className="space-y-1 mt-4">
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-2 pb-4 px-4">
          <Button
            title="Submit"
            type="submit"
            disabled={!name || isLoading}
            loading={isLoading}
          />
        </div>
      </form>
    </main>
  );
};
export default Categories;
