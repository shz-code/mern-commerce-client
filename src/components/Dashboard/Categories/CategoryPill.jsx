import { Tag } from "lucide-react";

const CategoryPill = ({ category }) => {
  return (
    <div className="bg-white rounded-full ps-3 pe-2 py-1 flex items-center gap-2">
      {category.name}
      <span className="inline-block p-1 rounded-full bg-slate-950 text-white">
        <Tag size={15} />
      </span>
    </div>
  );
};

export default CategoryPill;
