import { Formik } from "formik";
import { PlusCircle, X } from "lucide-react";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { useGetCategoriesQuery } from "../../../features/categories/categoriesApi";
import { useAddProductMutation } from "../../../features/products/productsApi";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import TextArea from "../../ui/TextArea";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Product Name Missing";
  }
  if (values.price <= 0) {
    errors.price = "Invalid Product Price";
  }
  if (values.desc <= 0) {
    errors.desc = "Product Description Missing";
  }
  if (values.quantity <= 0) {
    errors.quantity = "Invalid Product Quantity";
  }
  return errors;
};

const Products = () => {
  const [productPreview, setProductPreview] = useState("");
  const [productFile, setProductFile] = useState("");

  const { data: categories, isLoading: categoriesLoading } =
    useGetCategoriesQuery();

  const [addProduct] = useAddProductMutation();

  const ref = useRef();

  const handleFileSelect = (e) => {
    e.preventDefault();
    const files = e.target.files;
    const file = files[0];
    setProductFile(file);
    setProductPreview(URL.createObjectURL(file));
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    const file = files[0];
    setProductFile(file);
    setProductPreview(URL.createObjectURL(file));
  };

  const handleClick = () => {
    ref.current.click();
  };

  return (
    <main>
      <Formik
        initialValues={{
          name: "",
          price: 0,
          desc: "",
          category: "",
          quantity: 0,
        }}
        validate={validate}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setSubmitting(true);

          const formData = new FormData();
          formData.append("name", values.name);
          formData.append("description", values.desc);
          formData.append("price", values.price);
          formData.append("category", values.category);
          formData.append("photo", productFile);
          formData.append("quantity", values.quantity);
          const res = await addProduct(formData);
          if (res.data) {
            toast.success("Added Successfully");
            resetForm();
            setProductFile("");
            setProductPreview("");
          } else {
            toast.error(res.error?.data);
          }
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          handleReset,
          /* and other goodies */
        }) => (
          <form className="bg-white shadow rounded" onSubmit={handleSubmit}>
            <div className="p-4">
              <div>
                <h3 className="text-3xl font-bold">Product Details</h3>
                <p className="text-sm">Enter the details of your product.</p>
              </div>
              <div>
                {productPreview && (
                  <div className="w-40 rounded relative my-4">
                    <img
                      src={productPreview}
                      className="rounded"
                      alt="product photo"
                    />
                    <span
                      className="absolute -top-2 -right-2 p-1 bg-slate-950 text-white rounded-full cursor-pointer"
                      onClick={() => setProductPreview("")}
                    >
                      <X size={15} />
                    </span>
                  </div>
                )}
                <div className="space-y-1 mt-4">
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="text-sm font-medium" htmlFor="name">
                      Product Name
                    </label>
                    <Input
                      className="py-2 rounded shadow-none bg-transparent border-2 border-slate-200 text-black"
                      id="name"
                      placeholder="HOCO W35"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                    <p className="text-xs text-red-400 font-bold">
                      {errors.name && touched.name && errors.name}
                    </p>
                  </div>
                  {/* Price */}
                  <div className="space-y-1">
                    <label className="text-sm font-medium" htmlFor="price">
                      Price
                    </label>
                    <Input
                      className="py-2 rounded shadow-none bg-transparent border-2 border-slate-200 text-black"
                      id="price"
                      placeholder="1500"
                      type="number"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.price}
                    />
                    <p className="text-xs text-red-400 font-bold">
                      {errors.price && touched.price && errors.price}
                    </p>
                  </div>
                  {/* Quantity */}
                  <div className="space-y-1">
                    <label className="text-sm font-medium" htmlFor="quantity">
                      Quantity
                    </label>
                    <Input
                      className="py-2 rounded shadow-none bg-transparent border-2 border-slate-200 text-black"
                      id="quantity"
                      placeholder="10"
                      type="number"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.quantity}
                    />
                    <p className="text-xs text-red-400 font-bold">
                      {errors.quantity && touched.quantity && errors.quantity}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium" htmlFor="desc">
                      Description
                    </label>
                    <TextArea
                      className="py-2 rounded shadow-none bg-transparent border-2 border-slate-200 text-black"
                      placeholder="Great Product"
                      id="desc"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.desc}
                    />
                    <p className="text-xs text-red-400 font-bold">
                      {errors.desc && touched.desc && errors.desc}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-medium" htmlFor="category">
                      Category
                    </label>
                    <div className="w-full">
                      {!categoriesLoading && categories.length && (
                        <Select
                          className="w-full border-gray-200 rounded py-2"
                          id="category"
                          name="category"
                          selectItem={categories}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.category}
                        />
                      )}
                      <p className="text-xs text-red-400 font-bold">
                        {errors.category && touched.category && errors.category}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {!productPreview && (
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
              )}
            </div>
            <div className="flex gap-2 p-4">
              <Button
                title="Submit"
                type="submit"
                disabled={!productPreview || isSubmitting}
                loading={isSubmitting}
              />
              <Button
                className="bg-white text-black border-2 border-slate-200 hover:bg-slate-200"
                title="Reset"
                type="reset"
                onClick={() => {
                  handleReset();
                  setProductPreview("");
                  toast.success("Reset Done");
                }}
              />
            </div>
          </form>
        )}
      </Formik>
    </main>
  );
};

export default Products;
