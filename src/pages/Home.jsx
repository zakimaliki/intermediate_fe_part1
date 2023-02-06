import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSearch = () => {
    if (search !== "" && sort !== "") {
      setSearchParams({
        keyword: search,
        sort: sort,
      });
    } else if (search !== "") {
      setSearchParams({
        keyword: search,
      });
    } else if (sort !== "") {
      setSearchParams({
        sort: sort,
      });
    } else {
      setSearchParams({});
    }
    
  };
  const handleSort = (e) => {
    setSort(e.currentTarget.value);
  };
  useEffect(() => {
    console.log(searchParams.get("keyword"));
  }, [searchParams]);
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <select onChange={handleSort}>
          <option value="">Pilih Option</option>
          <option value="ASC">A-Z</option>
          <option value="DESC">Z-A</option>
        </select>
      </div>
      <input
        type="text"
        name="search"
        placeholder="search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>cari</button>
      <p>
        hasil pencarian adalah = {searchParams.get("keyword")}{" "}
        {searchParams.get("sort")}
      </p>
    </div>
  );
};

export default Home;
