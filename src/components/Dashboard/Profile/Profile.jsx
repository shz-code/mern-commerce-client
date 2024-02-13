import { useState } from "react";
import { useSelector } from "react-redux";
import { useGetProfileQuery } from "../../../features/profile/profileApi";
import EditProfile from "./EditProfile";

const Profile = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const { _id } = useSelector((state) => state.user);

  const { data } = useGetProfileQuery(_id);

  return (
    <div className="w-full lg:w-auto">
      <div className="rounded bg-white shadow p-4">
        <div className="border-b space-y-2">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">User</h3>
            <span
              className="text-xs underline cursor-pointer"
              onClick={() => setModalOpen((prev) => !prev)}
            >
              Edit
            </span>
          </div>
          <div className="text-sm">
            <div className="space-y-1 pb-2">
              <span className="text-slate-600 underline">
                {data?.user?.name}
              </span>
              <div>{data?.orders} total order(s)</div>
            </div>
          </div>
        </div>
        <div className="border-b mt-2 pb-2">
          <h3 className="text-xl font-semibold">Contact information</h3>
          <div className="text-sm">
            <div className="space-y-1">
              <span className="text-slate-600">{data?.user?.email}</span>
              <div className="text-gray-500 ">0{data?.user?.phone}</div>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <div>
            <h3 className="text-xl font-semibold">Address</h3>
          </div>
          <div className="text-sm">
            <div>Sophia Anderson 1234 Main St. Anytown, CA 12345</div>
          </div>
        </div>
      </div>
      {/* Modal */}
      {modalOpen && <EditProfile setModalOpen={setModalOpen} />}
    </div>
  );
};

export default Profile;
