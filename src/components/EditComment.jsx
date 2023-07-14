import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/userContext";

const EditComment = ({ com, setShowEdit, getComments }) => {
  const { user } = useContext(Context);
  const [comment, setComment] = useState("");

  useEffect(() => {
    setComment(com?.comment);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submit logic here
  };

  const handleEdit = (id) => {
    // Handle edit logic here
  };

  return (
    <div className="b__update-comment">
      <form onSubmit={handleSubmit}>
        <textarea
          rows="10"
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <button type="submit" onClick={() => handleEdit(com.comment_id)}>
          update
        </button>
      </form>
    </div>
  );
};

export default EditComment;
