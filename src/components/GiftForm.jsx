import { useState } from "react";

function GiftForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("");
  const [money, setMoney] = useState();
  const [code, setCode] = useState("");

  const handleChange = (e) => {
    if (e.target.id === "firstName") {
      setName();
    } else if (e.target.id === "email") {
      setEmail(e.target.value);
    } else {
      setAbout(e.target.value);
    }
  };

  const handleMoney = (e) => {
    let data = e.target.innerHTML;
    let money = data.replace("£", "");
    setMoney(money);
  };

  const handleBlur = (e) => {
    e.preventDefault();
    if (name !== "" && money !== "" && email !== "" && about !== "") {
      let code = (Math.random() + 1).toString(36).substring(7);
      setCode(code);
    }
  };

  return (
    <>
      <div className="h-80 w-1/3 flex justify-end">
        <div className="h-64 w-96 gift-card  bg-cover bg-center rounded-3xl ml-10 flex flex-col space-y-5 justify-end items-center">
          {/* <!-- <h1 className="self-end justify-self-start">Hello Food</h1> --> */}
          <p id="toWho" className=" text-2xl">
            To: {name}
          </p>
          <p id="amount" className="text-xl">
            Amount: {money}£
          </p>
          <p id="code" className="text-xl">
            Code: {code}
          </p>
        </div>
      </div>
      <div className="h-80 w-1/3">
        <h1>How much would you like to gift?</h1>
        <p>
          Recipients can use your gift towards any meal plan and recipes of
          their choice.
        </p>
        <div className="space-x-20 mt-5">
          <button
            onClick={handleMoney}
            className="border-2 border-greens px-8 py-2 hover:bg-lightGreen active:bg-mediumGreen"
          >
            29.99£
          </button>
          <button
            onClick={handleMoney}
            className="border-2 border-greens px-8 py-2 hover:bg-lightGreen active:bg-mediumGreen"
          >
            36.99£
          </button>
        </div>
        <div className="space-x-20 mt-5">
          <button
            onClick={handleMoney}
            className="border-2 border-greens px-8 py-2 hover:bg-lightGreen active:bg-mediumGreen"
          >
            41.99£
          </button>
          <button
            onClick={handleMoney}
            className="border-2 border-greens px-8 py-2 hover:bg-lightGreen active:bg-mediumGreen"
          >
            45.99£
          </button>
        </div>
      </div>
      <div className="h-80 w-1/3">
        <h1>Who should we send it to?</h1>
        <form onBlur={handleBlur}>
          <div className="">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    value={name}
                    onChange={handleChange}
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    value={email}
                    id="email"
                    onChange={handleChange}
                    name="email"
                    type="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Add a personal messages
                </label>
                <div className="mt-2">
                  <textarea
                    value={about}
                    onChange={handleChange}
                    id="about"
                    name="about"
                    rows="3"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default GiftForm;
