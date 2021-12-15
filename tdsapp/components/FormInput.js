import FormGrp from "./FormGrp";
import FormLabel from "./FormLabel";
import InputComponent from "./InputComponent";

const FormInput = () => {
  return (
    <form className="flex flex-col py-10 px-3 mx-3  border-t border-b border-r overflow-hidden bg-gray-50 dark:border-gray-700 dark:bg-gray-900 font-secondary font-bold shadow-md shadow-white h-96 justify-between">
      <h2 className="text-2xl pb-3 text-center">Sign In</h2>
      <FormGrp>
        <InputComponent type="email" placeholder="Enter email" />
        <FormLabel>Email address or phone number</FormLabel>
      </FormGrp>
      <div className="flex justify-between">
      <button className="w-28 mb-3 rounded text-white p-3 shadow-sm ring-transparent ring-1">
        <a href="#">Forgot email</a>
      </button>
      <button
        type="submit"
        className="bg-green-500 w-28 mb-3 rounded text-white p-3 shadow-sm ring-1 ring-green-600"
      >
        Submit
      </button>
      </div>
      
      <button className="py-1 px-3 bg-gray-300 dark:bg-gray-900 rounded  shadow ring-1 ring-gray-400 dark:ring-gray-600">
        <a href="#">Create new user</a>
      </button>
      
    </form>
  );
};

export default FormInput;
