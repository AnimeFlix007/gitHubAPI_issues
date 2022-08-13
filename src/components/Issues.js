import React, { useEffect, useState } from "react";
import axios from "axios";
import TableIssues from "./TableIssues";
import "../assets/css/header.css";

const Issues = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://api.github.com/repos/PHP-FFMpeg/PHP-FFMpeg/issues?state=all"
      );
      setData(res.data);
      setFilteredData(res.data);
    };
    fetchData().catch((e) => {
      console.log(e);
    });
  }, []);

  const allHandler = () => {
    setFilteredData(data);
    setSearch("");
  };

  const filterDataHandler = (category) => {
    setFilteredData(
      data.filter((item) => {
        return item.state === category;
      })
    );
    setSearch("");
  };

  const searchHandler = (e) => {
    let searchField = e.target.value.toLowerCase();
    setSearch(searchField);
    setFilteredData(
      data.filter((item) => {
        return item.title.toLowerCase().includes(searchField);
      })
    );
  };

  return (
    <div>
      <div className="container">
        <h1 className="heading">GitHub Issues Section Table</h1>
        <div className="searchBox">
          <input
            type="text"
            name="issues"
            value={search}
            onChange={searchHandler}
            placeholder="Search...."
            className="searchField"
          />
        </div>
        <div className="filters">
          <p className="filter" onClick={allHandler}>
            All
          </p>
          <p className="filter" onClick={() => filterDataHandler("open")}>
            Open
          </p>
          <p className="filter" onClick={() => filterDataHandler("closed")}>
            Closed
          </p>
        </div>
      </div>
      <TableIssues data={filteredData} />
    </div>
  );
};

export default Issues;
