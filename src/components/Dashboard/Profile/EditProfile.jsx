import Button from "../../ui/Button";
import Input from "../../ui/Input";

const EditProfile = ({ setModalOpen }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("editProfileModal")) setModalOpen(false);
  };
  return (
    <div
      className="fixed top-0 left-0 h-full w-full bg-slate-950/30 editProfileModal z-10 flex justify-center items-center"
      onClick={(e) => handleClick(e)}
    >
      <div className=" bg-slate-50/80 backdrop-blur rounded">
        <form>
          <div className="p-4">
            <div>
              <h3 className="text-3xl font-bold">Update User Information</h3>
              <p className="text-sm">Enter the details of your product.</p>
            </div>
            <div>
              <form className="space-y-1 mt-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium" htmlFor="name">
                    Name
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
                  <label className="text-sm font-medium" htmlFor="name">
                    Address
                  </label>
                  <Input
                    className="py-2 rounded shadow-none bg-transparent border-2 border-slate-200 text-black"
                    id="name"
                    placeholder="HOCO W35"
                    required
                    type="text"
                  />
                </div>
              </form>
            </div>
          </div>
          <div></div>
          <div className="flex gap-2 px-4 pb-4">
            <Button title="Submit" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
