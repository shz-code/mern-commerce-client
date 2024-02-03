import { Loader2 } from "lucide-react";

const Loader = () => {
  return (
    <div className="flex justify-between items-center">
      <h3 className="text-sm font-bold">Loading...</h3>
      <Loader2 className="animate-spin" />
    </div>
  );
};

export default Loader;
