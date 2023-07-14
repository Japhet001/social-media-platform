import React, { useEffect } from "react";
import { domain } from "../utils/Utils";

const Message = ({ msg }) => {
  useEffect(() => {
    console.log(msg);
  }, []);

  const combinedData = [
    {
      id: 6,
      username: "otwoma",
      title: "Discover innovative ways to decorate",
      text: " We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
      postimage: "src/images/post-1.jpg",
      userimage: "src/images/user-1.jpg",
      likes: 0,
      votes: 0
    },
    {
      id: 5,
      username: "Wanjiku",
      title: "We are available all across the globe",
      text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
      postimage: "src/images/post-2.jpg",
      userimage: "src/images/user-2.jpg",
      likes: 0,
      votes: 0
    },
    {
      id: 4,
      username: "caleb",
      title: "Manufactured with the best materials",
      text: "Our modern furniture store provides a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience, we understand what customers want for their home and office.",
      postimage: "src/images/post-3.jpg",
      userimage: "src/images/user-3.jpg",
      likes: 0,
      votes: 0
    },
    {
      id: 1,
      username: "bossman",
      title: "Discover innovative ways to decorate",
      text: " We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
      postimage: "src/images/post-1.jpg",
      userimage: "src/images/user-1.jpg",
      likes: 0,
      votes: 0
    },
    {
      id: 2,
      username: "bieber",
      title: "We are available all across the globe",
      text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
      postimage: "src/images/post-2.jpg",
      userimage: "src/images/user-2.jpg",
      likes: 0,
      votes: 0
    },
    {
      id: 3,
      username: "khalid",
      title: "Manufactured with the best materials",
      text: "Our modern furniture store provides a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience, we understand what customers want for their home and office.",
      postimage: "src/images/post-3.jpg",
      userimage: "src/images/user-3.jpg",
      likes: 0,
      votes: 0
    }
  ];

  return (
    <>
      {combinedData.map((m) => (
        <div key={m.id} className="m_messages">
          <div className="m_messages-ui">
            <img
              width={30}
              height={30}
              src={domain + m.userimage}
              alt="message image"
            />
          </div>
          <div className="m_messages-msg">
            <h3>{m.title}</h3>
            <p>{m.text}</p>
          </div>
          <div className="m_messages-image">
            <img
              width={30}
              height={30}
              src={domain + m.postimage}
              alt="message image"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Message;
