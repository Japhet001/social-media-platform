import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Context } from "../context/userContext";
import { domain } from "../utils/Utils";

const UpdateIdea = ({ idea, setToggleUpdate, fetchIdeas }) => {
  const [text, setText] = useState("");
  const { user } = useContext(Context);

  useEffect(() => {
    setText(idea.idea_text);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Update idea logic
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="b__update-idea">
      <form onSubmit={handleSubmit}>
        <textarea
          name="idea_text"
          id="idea_text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button type="submit">update</button>
      </form>
    </div>
  );
};

export default UpdateIdea;
