import { useEffect, useState } from "react";
import { getApiResource } from "@utils/network";
import { API_SEARCH } from "@constants/api";
import withApiError from "@hoc/hoc";
import { getPeopleId, getPeopleImage } from "@services/getPeopleData";
import SearchPageInfo from "@components/SearchPage/SearchPageInfo/SearchPageInfo";
import SearchInput from "@components/SearchPage/SearchInput/SearchInput";

const SearchPage = ({ setErrorApi }) => {
  const [inputSearchValue, setInputSearchValue] = useState("");
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getResponse = async (param) => {
    const res = await getApiResource(API_SEARCH + param);

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
      setIsLoading(false);
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
      <SearchPageInfo people={people} isLoading={isLoading}/>
    </div>
  );
};

export default withApiError(SearchPage);
