import Link from "next/link";

interface SaveModalProps {
  triggleModal: (value: boolean) => void;
}
interface Login {
  handleLogin: (value: boolean) => void;
}

const Login = ({ handleLogin }: Login) => {
  const closeModal = () => {
    handleLogin(false);
  };

  return (
    <div className="fixed inset-0 z-10 flex  justify-center   ">
      <div className="absolute inset-0 bg-black opacity-85"></div>
      <dialog
        className="relative bg-gradient-to-b from-stone-400 to-gray-400  flex flex-col gap-1 rounded-box font-medium font-roboto p-16 border-1 border-base-200 shadow-2xl z-20"
        open
      >
        <article>
          <header>
            <svg
              onClick={closeModal}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-11 w-11 cursor-pointer bg-gray-200 rounded-full p-3 absolute top-3 right-3 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>

            <h1 className=" font-montserrat text-neutral font-semibold w-full mr-6 mt-6 mb-6  text-4xl">
              Your Wedding Awaits ...
            </h1>
          </header>
          <section className=" flex flex-col gap-4 ">
            <input
              type="text"
              placeholder="Email"
              className="placeholder-gray-600  text-sm h-16 px-3 font-montserrat rounded-lg  focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="placeholder-gray-600 text-sm h-16 px-3 rounded-lg  font-montserrat focus:outline-none  "
            />

            <button className=" hover:bg-blue-600 m-4 text-xl w-auto  flex justify-center  bg-blue-500  p-4 rounded-badge font-montserrat font-semibold text-slate-200    ">
              Login
            </button>
          </section>
        </article>
        <footer className=" text-sm flex gap-1 text-neutral font-montserrat    ">
          <p>Dont have an account?</p>
          <Link href="./navBtn/createAccount">SignUp</Link>
        </footer>
      </dialog>
    </div>
  );
};

export default Login;
