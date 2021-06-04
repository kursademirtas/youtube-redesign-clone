import React, { useEffect, useState } from "react";
import { Search } from "@material-ui/icons/";
import styled from "styled-components";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { API_URL } from "../lib/API_URI";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  margin-left: 10rem;

  ul {
    width: fit-content;
    height: 200px;
    list-style: none;
    background: white;
    padding: 2rem;
    z-index: 12;
    position: absolute;
    overflow-x: scroll;
    top: 110%;

    li {
      padding: 0.3rem;
    }
  }
`;
const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ebebeb;
  border-radius: 22px;
  margin-left: 2rem;
  padding: 0 1rem;
  width: fit-content;

  input {
    width: 100%;
    height: 100%;
    background-color: inherit;
    border: none;
    opacity: 0.4;
    font-size: 18px;
    font-weight: normal;
  }

  @media only screen and (max-width: 600px) {
   
    background: transparent;
    input {
      display: none;
    }
  }
`;

const SearchBar = () => {
  const { pathname } = useLocation();

  const [el, setEl] = useState('');
  const [videos, setVideos] = useState([]);

  const fetchAllVideos = () => {
    axios.get(API_URL+'/videos').then(function (response) {
      setVideos(
        response.data.filter((video) => {
          return video.title.includes(el);
        })
      );
    });
  };

  useEffect(() => {
    fetchAllVideos();
  }, []);

  useEffect(() => {
    setEl("");
  }, [pathname]);

  return (
    <Wrapper>
      <SearchBarContainer>
        <input
          type="text"
          placeholder="Search"
          value={el}
          onChange={(e) => setEl(e.target.value)}
        />
        <Search />
      </SearchBarContainer>
      {el && (
        <ul>
          {(videos === []) && <li>not found</li>}
          {videos.map((video) => {
            return (
              <Link
                onClick={() => setEl("")}
                to={{ pathname: `/video/${video.id}` }}
              >
                <li>{video.title}</li>{" "}
              </Link>
            );
          })}
        </ul>
      )}
    </Wrapper>
  );
};

export default SearchBar;
