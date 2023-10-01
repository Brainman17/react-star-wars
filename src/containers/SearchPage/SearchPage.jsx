import { useCallback, useEffect, useState } from "react";
import cn from "classnames";
import { getApiResource } from "@utils/network";
import { API_SEARCH } from "@constants/api";
import withApiError from "@hoc/hoc";
import { getPeopleId, getPeopleImage } from "@services/getPeopleData";
import SearchPageInfo from "@components/SearchPage/SearchPageInfo/SearchPageInfo";
import SearchInput from "@components/SearchPage/SearchInput/SearchInput";
import styles from "./SearchPage.module.css";

const SearchPage = ({ setErrorApi }) => {
  const [inputSearchValue, setInputSearchValue] = useState("");
  const [people, setPeople] = useState([]);

  const getResponse = async (param) => {
    const res = await getApiResource(API_SEARCH + param);

    console.log(res);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);

        return {
          id,
          img,
          name,
        };
      });
      setPeople(peopleList);
      setErrorApi(true);
    }
    setErrorApi(false);
  };

  useEffect(() => {
    getResponse("");
  }, []);

  const handleInputChange = (value) => {
    setInputSearchValue(value);
    getResponse(value);
  };

  return (
    <div>
      <h1 className="title">Search</h1>
      <SearchInput value={inputSearchValue} handleInputChange={handleInputChange} />
      <SearchPageInfo people={people} />
    </div>
  );
};

export default withApiError(SearchPage);
