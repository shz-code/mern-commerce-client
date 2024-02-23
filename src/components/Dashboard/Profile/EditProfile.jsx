import Button from "../../ui/Button";
import Input from "../../ui/Input";
import TextArea from "../../ui/TextArea";

const EditProfile = ({ setModalOpen }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("editProfileModal")) setModalOpen(false);
  };
  return (
    <div
      className="fixed top-0 left-0 h-full w-full bg-slate-950/30 editProfileModal z-10 cursor-pointer overflow-y-scroll px-4"
      onClick={(e) => handleClick(e)}
    >
      <div className="max-w-[500px] mx-auto my-8 sm:my-24 bg-slate-50/80 backdrop-blur rounded cursor-default ">
        <form>
          <div className="p-4">
            <div>
              <h3 className="text-3xl font-bold">Update User Information</h3>
              <p className="text-sm">Enter the details of your product.</p>
            </div>
            <div>
              <div className="space-y-1 mt-4">
                {/* Name */}
                <div className="space-y-1">
                  <label className="text-sm font-medium" htmlFor="name">
                    Name
                  </label>
                  <Input
                    className="py-2 rounded shadow-none bg-transparent border-2 border-slate-200 text-black"
                    id="name"
                    placeholder="Ex: Shanto"
                    type="text"
                  />
                </div>
                {/* Phone */}
                <div className="space-y-1">
                  <label className="text-sm font-medium" htmlFor="phone">
                    Phone
                  </label>
                  <Input
                    className="py-2 rounded shadow-none bg-transparent border-2 border-slate-200 text-black"
                    id="phone"
                    placeholder="Ex: 01766****73"
                    type="text"
                  />
                </div>
                {/* Address */}
                <div className="space-y-1">
                  <label className="text-sm font-medium" htmlFor="address">
                    Address
                  </label>
                  <TextArea
                    className="py-2 rounded shadow-none bg-transparent border-2 border-slate-200 text-black"
                    id="address"
                    placeholder="Ex: Uttara"
                  />
                </div>
                {/* State */}
                <div className="space-y-1">
                  <label className="text-sm font-medium" htmlFor="state">
                    State
                  </label>
                  <Input
                    className="py-2 rounded shadow-none bg-transparent border-2 border-slate-200 text-black"
                    id="state"
                    placeholder="Ex: Dhaka"
                    type="text"
                  />
                </div>
                {/* City */}
                <div className="space-y-1">
                  <label className="text-sm font-medium" htmlFor="city">
                    City
                  </label>
                  <Input
                    className="py-2 rounded shadow-none bg-transparent border-2 border-slate-200 text-black"
                    id="city"
                    placeholder="Ex: Dhaka"
                    type="text"
                  />
                </div>
                {/* Postcode */}
                <div className="space-y-1">
                  <label className="text-sm font-medium" htmlFor="postcode">
                    Postcode
                  </label>
                  <Input
                    className="py-2 rounded shadow-none bg-transparent border-2 border-slate-200 text-black"
                    id="postcode"
                    placeholder="Ex: 1200"
                    type="number"
                  />
                </div>
                {/* Country */}
                <div className="space-y-1">
                  <label className="text-sm font-medium" htmlFor="country">
                    Country
                  </label>
                  <Input
                    className="py-2 rounded shadow-none bg-transparent border-2 border-slate-200 text-black"
                    id="country"
                    placeholder="Ex: Bangladesh"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2 px-4 pb-4">
            <Button title="Submit" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
