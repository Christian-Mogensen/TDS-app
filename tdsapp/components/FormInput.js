import FormGrp from "./FormGrp";
import FormLabel from "./FormLabel";
import InputComponent from "./InputComponent";

const FormInput = () => {
  return (
    <form className="flex flex-col py-10 px-3  border-t border-b   overflow-hidden  bg-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:bg-[var(--gradient-bg-right)] font-secondary font-bold shadow-md shadow-white ">
      <h2 className="text-2xl pb-3 text-center">Sign In</h2>
      <FormGrp>
        <InputComponent type="email" placeholder="Enter email" />
        <FormLabel>Email address</FormLabel>
      </FormGrp>
      <FormGrp>
        <InputComponent type="password" placeholder="Enter password" />
        <FormLabel>Password</FormLabel>
      </FormGrp>
      

      <button
        type="submit"
        className="bg-green-500 mb-3 rounded text-white p-3 shadow-sm ring-1 ring-green-600"
      >
        Submit
      </button>
      <div className="flex justify-between">
      <button className="py-1 px-3 bg-gray-300 dark:bg-gray-900 rounded  shadow ring-1 ring-gray-400 dark:ring-gray-600">
        <a href="#">Create new user</a>
      </button>
      <button className="py-1 px-3 bg-gray-300 dark:bg-gray-900 rounded  shadow ring-1 ring-gray-400 dark:ring-gray-600">
        <a href="#">Forgot password?</a>
      </button>
      </div>
    </form>
  );
};

export default FormInput;
