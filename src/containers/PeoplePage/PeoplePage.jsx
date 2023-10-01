import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import withApiError from "@hoc/hoc";
import { getApiResource, changeHTTP } from "@utils/network";
import { API_PEOPLE } from "@constants/api";
import {
  getPeopleId,
  getPeopleImage,
  getPeoplePageId,
} from "@services/getPeopleData";
import PeopleList from "@components/PeoplePage/PeopleList/PeopleList";
import { useQueryParams } from "../../hooks/useQueryParams";
import PeopleNavigation from "@components/PeoplePage/PeopleNavigation/PeopleNavigation";
import Preloader from '../../components/Preloader/Preloader';

const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = useState([]);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [counterPage, setCounterPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const query = useQueryParams();
  const queryPage = query.get("page");

  const getResource = async (url) => {
    const res = await getApiResource(url);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);

        return {
          // name: name, url: url
          name,
          id,
          img,
        };
      });
      setPeople(peopleList);
      setPrevPage(changeHTTP(res.previous));
      setNextPage(changeHTTP(res.next));
      setCounterPage(getPeoplePageId(url));
      setErrorApi(false);
      setIsLoading(true);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResource(API_PEOPLE + queryPage);
  }, []);

  return (
    <>
      <PeopleNavigation
        getResource={getResource}
        prevPage={prevPage}
        nextPage={nextPage}
        counterPage={counterPage}
      />
      {(people.length > 0 && <PeopleList people={people} />) || (isLoading && <Preloader />)}
    </>
  );
};

PeoplePage.propTypes = {
  people: PropTypes.array,
};

export default withApiError(PeoplePage);
