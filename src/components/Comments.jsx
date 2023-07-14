import React, { useContext, useEffect, useState } from "react";
import { FaCommentSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Context } from "../context/userContext";
import Comment from "./Comment";

const Comments = ({ idea_id }) => {
  const { user } = useContext(Context);
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    // Code for fetching comments
  };

  useEffect(() => {
    getComments();
  }, []);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // Code for submitting a new comment
  };

  return (
    <div className="b__comments">
      <div className="add_comment">
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
            {...register("comment", { required: "Add a comment!!" })}
            placeholder="Enter a comment..."
          ></textarea>
          {errors && <p className="errors">{errors?.comment?.message}</p>}
          <button type="submit">add comment</button>
        </form>
      </div>
      <div className="view_comment">
        {comments.length === 0 ? (
          <div className="no-comment">
            <FaCommentSlash className="no-comment_icon" />
            <span>No comments!! add one</span>
          </div>
        ) : (
          comments.map((com) => (
            <Comment key={com.comment_id} com={com} getComments={getComments} />
          ))
        )}
      </div>
    </div>
  );
};

export default Comments;
