import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "India",
    state: "",
    zip: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotification: "",
  });

  function changeHandler(e) {
    const { name, value, checked, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log(formData);
  }
  return (
    <div className="flex items-center justify-center p-8 w-full shadow-lg">
      <form onSubmit={submitHandler}>
        <label className="font-medium" htmlFor="firstName">
          First Name
        </label>
        <br />
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={formData.firstName}
          placeholder="Enter your firstName"
          onChange={changeHandler}
          className="rounded-md outline-none border-2 border-blue-400 w-full p-2"
        />
        <br />

        <label className="font-medium" htmlFor="lastName">
          Last Name
        </label>
        <br />
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={formData.lastName}
          placeholder="Enter your lastName"
          onChange={changeHandler}
          className="rounded-md outline-none border-2 border-blue-400 w-full p-2"
        />
        <br />

        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          placeholder="Enter your email"
          onChange={changeHandler}
          className="rounded-md outline-none border-2 border-blue-400 w-full p-2"
        />
        <br />

        <label htmlFor="country">Country</label>
        <br />
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
        >
          <option>India</option>
          <option>Canada</option>
          <option>Australia</option>
        </select>
        <br />
        <label htmlFor="state">State</label>
        <br />
        <input
          type="text"
          name="state"
          id="state"
          value={formData.state}
          placeholder="Enter your  state"
          onChange={changeHandler}
          className="outline-blue-400 w-full p-2 hover:outline-blue-600"
        />
        <br />

        <label htmlFor="zip">ZIP/ Postal Code:</label>
        <br />
        <input
          type="text"
          name="zip"
          id="zip"
          value={formData.zip}
          placeholder="756115"
          onChange={changeHandler}
          className="outline-blue-400 w-full p-2 hover:outline-blue-600"
        />
        <br />

        <fieldset>
          <legend>By Email</legend>

          <div className="flex">
            <input
              id="comments"
              name="comments"
              type="checkbox"
              checked={formData.comments}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="comments">Comments</label>
              <p>Get notified when someones posts a comment on a posting.</p>
            </div>
          </div>

          <div className="flex">
            <input
              id="candidates"
              name="candidates"
              type="checkbox"
              checked={formData.candidates}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="candidates">Candidates</label>
              <p>Get notified when a candidate applies for a job.</p>
            </div>
          </div>

          <div className="flex">
            <input
              id="offers"
              name="offers"
              type="checkbox"
              checked={formData.offers}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="offers">Offers</label>
              <p>Get notified when a candidate accepts or rejects an offer.</p>
            </div>
          </div>
        </fieldset>
        <br />

        <fieldset>
          <legend>Push notification</legend>
          <p>These are delivered via SMS to your mobile phone.</p>

          <input
            type="radio"
            id="everything"
            name="pushNotification"
            value="everything"
            onChange={changeHandler}
          />
          <label htmlFor="everything">Everything</label>
          <br />
          <input
            type="radio"
            id="sameasemail"
            name="pushNotification"
            value="same as email"
            onChange={changeHandler}
          />
          <label htmlFor="sameasemail">Same as Email</label>
          <br />
          <input
            type="radio"
            id="nopush"
            name="pushNotification"
            value="No push Notification"
            onChange={changeHandler}
          />
          <label htmlFor="nopush">No Push Notification </label>
        </fieldset>

        <button className="bg-blue-500 px-4 py-2 text-white rounded hover:bg-blue-400">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
