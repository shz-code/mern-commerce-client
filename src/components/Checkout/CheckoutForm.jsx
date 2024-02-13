import Button from "../ui/Button";
import CheckBox from "../ui/CheckBox";
import Input from "../ui/Input";
import TextArea from "../ui/TextArea";

const CheckoutForm = () => {
  return (
    <form className="customerInfo w-full text-sm">
      <div className="space-y-2">
        <h4 className="font-semibold text-lg">Customer information</h4>
        <p>Welcome back</p>
      </div>
      <div className="space-y-2 mt-4">
        <h4 className="font-semibold text-lg">Billing details</h4>
        {/* Full name */}
        <div className="w-full space-y-2">
          <label
            className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="email"
          >
            Email/ Username
          </label>
          <Input
            className="py-2 rounded shadow-none bg-transparent border-2 border-slate-200 text-black"
            id="email"
            placeholder="contact@shahidulalam.xyz / shz"
            required
            type="text"
          />
        </div>
        {/* Address */}
        <div className="w-full space-y-2">
          <label
            className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="email"
          >
            Address
          </label>
          <TextArea
            className="py-2 rounded shadow-none bg-transparent border-2 border-slate-200 text-black"
            placeholder="Great Product"
            id="desc"
          />
        </div>
        <div className="w-full flex justify-between gap-4">
          {/* State */}
          <div className="w-full space-y-2">
            <label
              className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="state"
            >
              State
            </label>
            <Input
              className="py-2 rounded shadow-none bg-transparent border-2 border-slate-200 text-black"
              id="state"
              placeholder="Dhaka"
              required
              type="text"
            />
          </div>
          {/* City */}
          <div className="w-full space-y-2">
            <label
              className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="city"
            >
              City
            </label>
            <Input
              className="py-2 rounded shadow-none bg-transparent border-2 border-slate-200 text-black"
              id="city"
              placeholder="Dhaka"
              required
              type="text"
            />
          </div>
          {/* Postcode */}
          <div className="w-full space-y-2">
            <label
              className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="postcode"
            >
              Postcode
            </label>
            <Input
              className="py-2 rounded shadow-none bg-transparent border-2 border-slate-200 text-black"
              id="postcode"
              placeholder="1200"
              required
              type="text"
            />
          </div>
        </div>
        {/* Phone */}
        <div className="w-full space-y-2">
          <label
            className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="phone"
          >
            Phone
          </label>
          <Input
            className="py-2 rounded shadow-none bg-transparent border-2 border-slate-200 text-black"
            id="phone"
            placeholder="01766****93"
            required
            type="text"
          />
        </div>

        <div className="space-y-2 mt-4">
          <h4 className="font-semibold text-lg">Payment</h4>
          <div className="p-4 border-2 rounded text-slate-800 text-center">
            Your payment will be processed by SSL Commerz
            <div className="w-32 mx-auto mt-2">
              <img
                src="https://securepay.sslcommerz.com/public/image/sslcommerz.png"
                alt="SSL Commerz Logo"
              />
            </div>
          </div>
        </div>
        <div className="space-y-2 pt-2">
          <p className="text-xs">
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our privacy policy.
          </p>
          <div className="-ms-2">
            <CheckBox
              id="agree"
              label="I have read and agree to the website terms and conditions"
            />
          </div>
          <div className="pt-2">
            <Button
              className="w-full"
              title={`Place order ${200}৳`}
              type="submit"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
