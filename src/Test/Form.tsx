import { ChangeEvent, FormEvent, useState } from "react";
import type { Users } from "./hook";

interface Props {
  setData: React.Dispatch<React.SetStateAction<Users[]>>;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Form = ({ setData, setShow }: Props) => {
  const [formValue, setFormValue] = useState<Users>({
    name: "",
    email: "",
    address: {
      city: "",
    },
  });

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === "address.city") {
      setFormValue((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          city: value,
        },
      }));
    } else {
      setFormValue((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !formValue.name?.trim() ||
      !formValue.email?.trim() ||
      !formValue.address?.city?.trim()
    ) {
      alert("All fields are required!");
      return;
    }

    setData((prev) => [
      ...prev,
      {
        ...formValue,
        id: Date.now(),
      },
    ]);

    setShow(false);
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 flex justify-center items-center"
      onClick={() => setShow(false)}
    >
      <form
        onSubmit={handleSubmit}
        onClick={(event) => event.stopPropagation()}
        className="bg-white rounded-2xl p-6 w-full max-w-md shadow-lg"
      >
        <h1 className="text-xl font-bold text-center mb-5">User Form</h1>

        <div className="mb-4">
          <label className="block mb-1">Name</label>

          <input
            type="text"
            name="name"
            required
            onChange={handleInput}
            className="w-full border rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Email</label>

          <input
            type="email"
            name="email"
            required
            onChange={handleInput}
            className="w-full border rounded-md p-2"
          />
        </div>

        <div className="mb-5">
          <label className="block mb-1">City</label>

          <input
            type="text"
            name="address.city"
            required
            onChange={handleInput}
            className="w-full border rounded-md p-2"
          />
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="border px-4 py-2 rounded-md hover:bg-gray-100"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};