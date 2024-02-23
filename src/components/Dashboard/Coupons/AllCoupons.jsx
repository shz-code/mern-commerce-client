import { useGetCouponsQuery } from "../../../features/coupon/couponApi";
import Error from "../../ui/Error";
import Loader from "../../ui/Loader";
import CouponCard from "./CouponCard";

const AllCoupons = () => {
  const { data, isLoading, isError, error } = useGetCouponsQuery();

  let content = null;
  if (isLoading) content = <Loader />;
  else if (!isLoading && isError) content = <Error message={error.status} />;
  else if (!isLoading && !isError && !data.length)
    content = <Error message="Nothing Found" />;
  else if (!isLoading && !isError && data.length)
    content = data.map((item) => <CouponCard key={item._id} coupon={item} />);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
      {content}
    </div>
  );
};

export default AllCoupons;
