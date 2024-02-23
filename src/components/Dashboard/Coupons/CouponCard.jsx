import { Puzzle } from "lucide-react";

const CouponCard = ({ coupon }) => {
  const { name, description, expire, limit, used, discountType } = coupon;
  return (
    <div className="bg-white rounded p-4 w-full">
      <div className=" flex items-center justify-between gap-2">
        <span className="flex items-center gap-2 px-2 py-1 rounded bg-slate-950 text-white">
          {name}
          <Puzzle size={15} />
        </span>
        {description.length > 15
          ? `${description.slice(0, 15)}...`
          : description}
      </div>
      <div className="mt-2 flex justify-between">
        Expire:{" "}
        <span className="font-bold">{new Date(expire).toDateString()}</span>
      </div>
      <div className="mt-2 flex justify-between">
        Discount Type:{" "}
        <span className="font-bold">{discountType.toUpperCase()}</span>
      </div>
      <div className="mt-2 flex justify-between">
        Limit:
        <span className="font-bold">{limit}</span>
      </div>
      <div className="mt-2 flex justify-between">
        Used:
        <span className="font-bold">{used}</span>
      </div>
    </div>
  );
};

export default CouponCard;
