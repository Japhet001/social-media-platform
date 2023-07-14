import { useState, useEffect, useContext } from "react";
import Appideas from "../Appideas";
import AddIdea from "../components/AddIdea";
import { Outlet } from "react-router-dom";

import load from "../images/loader.svg";

import Loader from "../components/Loader";
import NoIdeas from "../components/NoIdeas";
import { Context } from "../context/userContext";

const IdeaLayout = () => {
  const { user, fetchAllIdeas, ideas } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchIdeas = async () => {
    try {
      setLoading(true);
      await fetchAllIdeas();
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.message);
      alert(err.message);
    }
  };

  useEffect(() => {
    fetchIdeas();
  }, []);

  const [toggleProfile, setToggleProfile] = useState(false);

  return (
    <>
      {user?.token && <AddIdea fetchIdeas={fetchIdeas} />}
      {ideas?.length ? (
        <Appideas ideas={ideas} fetchIdeas={fetchIdeas} />
      ) : (
        <>
          <NoIdeas />
          <Loader error={error} loading={loading} load={load} />
        </>
      )}
      <Outlet />
    </>
  );
};

export default IdeaLayout;
