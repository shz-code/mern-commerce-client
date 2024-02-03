import RegisterForm from "./RegisterForm";
const Register = () => {
  return (
    <div className="w-full py-8 bg-slate-200 px-2">
      <div className="flex flex-col items-center justify-center h-full ">
        <div className="mx-auto max-w-md w-full p-3 sm:p-6 bg-white rounded-sm shadow-md">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Register</h1>
            <p className="text-sm">
              Enter your information to create an account
            </p>
          </div>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
