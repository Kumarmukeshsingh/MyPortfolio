import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

function Github() {
  const gitData = useLoaderData();
  console.log(gitData);
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/kumarmukeshsingh")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setdata(data);
      });
  }, []);
  return (
    <>
      <div>
        <h1 className="">My followers:-{data.followers}</h1>
        My login id :- {data.login}
        <img src={data.avatar_url} alt="github picture" width={300} />
        <p>puglic repo {data.public_repos}</p>
      </div>
    </>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/kumarmukeshsingh");
  return response.json();
};
