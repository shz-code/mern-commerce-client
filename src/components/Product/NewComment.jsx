import { Star } from "lucide-react";
import { useState } from "react";
import { useAddCommentMutation } from "../../features/products/productsApi";
import Button from "../ui/Button";
import TextArea from "../ui/TextArea";

const RenderStar = ({ preSelect, ind, setFormData }) => {
  const handleClick = () => {
    setFormData((prev) => ({ ...prev, rating: ind + 1 }));
  };

  return (
    <div
      className={`p-1 border ${
        preSelect && "border-yellow-400"
      } rounded cursor-pointer`}
      onClick={handleClick}
    >
      <Star
        className={` stroke-none ${
          preSelect ? "fill-yellow-400" : "fill-slate-200"
        }`}
        size={20}
      />
    </div>
  );
};

const NewComment = ({ product, profile }) => {
  const [stars] = useState([0, 1, 2, 3, 4]);
  const [formData, setFormData] = useState({
    rating: 5,
    text: "",
  });

  const [addComment, { isLoading }] = useAddCommentMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addComment({
      id: product._id,
      body: {
        user: profile.user._id,
        text: formData.text,
        rating: Number(formData.rating),
      },
    });
    setFormData({
      rating: 5,
      text: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-medium">Add a review</h2>
      <div className="flex gap-1 mt-1">
        {stars.map((star) => (
          <RenderStar
            key={star}
            ind={star}
            setFormData={setFormData}
            preSelect={star < formData.rating}
          />
        ))}{" "}
        <div className="ps-2">
          {formData.rating} {formData.rating === 1 ? "Star" : "Stars"}
        </div>
      </div>
      <div className="mt-2">
        <TextArea
          className="py-2 rounded shadow-none bg-transparent border-2 border-slate-200 text-black"
          id="review"
          placeholder="Ex: Great Product"
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, text: e.target.value }))
          }
          value={formData.text}
        />
      </div>
      <div className="flex gap-2">
        <Button
          title="Submit"
          type="submit"
          disabled={isLoading || !formData.text}
          loading={isLoading}
        />
      </div>
    </form>
  );
};

export default NewComment;
