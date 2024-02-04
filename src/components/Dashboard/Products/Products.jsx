import { PlusCircle } from "lucide-react";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import TextArea from "../../ui/TextArea";

const Products = () => {
  const [productPreview, setProductPreview] = useState("");

  const ref = useRef();

  const handleFileSelect = (e) => {
    e.preventDefault();
    const files = e.target.files;
    const fileArray = Array.from(files);
    const filePreviewsArray = fileArray.map((file) =>
      URL.createObjectURL(file)
    );
    setProductPreview(...filePreviewsArray);
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    const fileArray = Array.from(files);
    const filePreviewsArray = fileArray.map((file) =>
      URL.createObjectURL(file)
    );
    setProductPreview(...filePreviewsArray);
  };

  const handleClick = () => {
    ref.current.click();
  };

  return (
    <main>
      <form className="bg-white shadow rounded">
        <div className="p-4">
          <div>
            <h3 className="text-3xl font-bold">Product Details</h3>
            <p className="text-sm">Enter the details of your product.</p>
          </div>
          <div>
            <form className="space-y-1 mt-4">
              <div className="space-y-1">
                <label className="text-sm font-medium" htmlFor="name">
                  Product Name
                </label>
                <Input
                  className="py-2 rounded shadow-none bg-transparent border-2 border-slate-200 text-black"
                  id="name"
                  placeholder="HOCO W35"
                  required
                  type="text"
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium" htmlFor="price">
                  Price
                </label>
                <Input
                  className="py-2 rounded shadow-none bg-transparent border-2 border-slate-200 text-black"
                  id="price"
                  placeholder="1500"
                  required
                  type="number"
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium" htmlFor="desc">
                  Description
                </label>
                <TextArea
                  className="py-2 rounded shadow-none bg-transparent border-2 border-slate-200 text-black"
                  placeholder="Great Product"
                  id="desc"
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium" htmlFor="category">
                  Category
                </label>
                <div className="w-full">
                  <Select
                    className="w-full border-gray-200 rounded py-2"
                    selectItem={[{ value: "efault", label: "Default" }]}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div>
          {productPreview && "Uploaded"}
          <div
            className="border border-dashed rounded p-8 hover:bg-slate-100 transition-all cursor-pointer"
            onDragOver={(event) => event.preventDefault()}
            onDrop={handleFileDrop}
            onClick={handleClick}
          >
            <input
              ref={ref}
              type="file"
              className="hidden"
              accept=".jpg, .jpeg, .png"
              onChange={handleFileSelect}
            />
            <div className="flex flex-col items-center justify-center space-y-4">
              <PlusCircle />

              <p className="text-sm text-gray-500 dark:text-gray-400">
                Drag &amp; drop your images here or click to upload
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-2 p-4">
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

export default Products;
