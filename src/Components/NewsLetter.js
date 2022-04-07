import React, { useState } from "react";

import newsLetter from "./../Assets/newsLetter/newsLetter.jpg";

const newsLetterDataJSON = {
  title: "Newsletter From Interio",
  description:
    "Get monthly and updates also Checkout out the latest and stylish furniture from our new collection",
  backgroundImage: newsLetter,
};

function NewsLetter() {
  const [newsLetterData,setNewsLetterData] =useState(newsLetterDataJSON)
  const [user, setUser] = useState({ username: "", email: "" });
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username: "", email: "" })
    console.log(user);
  };

  return (
    <div className="newsLetter__container">
      <div className="row newsLetter__block">
        <div className="col-5">
          <p className="newsLetter__title">{newsLetterData.title}</p>
          <p className="newsLetter__description">
            {newsLetterData.description}
          </p>
          <form onSubmit={handleChange} action="">
            <div className="form__field">
              <input
                type="text"
                id="username"
                name="username"
                className="input__field"
                placeholder="Your Name"
                value={user.username}
                onChange={handleChange}
              />
            </div>
            <div className="form__field">
              <input
                type="text"
                id="email"
                name="email"
                className="input__field"
                placeholder="Your Email"
                value={user.email}
                onChange={handleChange}
              />
            </div>
            <div className="form__field">
              <button
                type="submit"
                id="button"
                className="submit__button"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
