// Функции, которые используются только в этом приложении
import {
  SWAPI_PEOPLE,
  HTTP,
  HTTPS,
  SWAPI_ROOT,
  GUIDE_PEOPLE_EXTENSION,
  GUIDE_IMG_PERSON,
  SWAPI_PARAM_PAGE,
} from "@constants/api";

const checkProtocol = (url) => {
  if (url.indexOf(HTTPS) !== -1) {
    return HTTPS;
  }

  return HTTP;
};

const getId = (url, category) => {
  const protocol = checkProtocol(url);

  const id = url
    .replace(protocol + SWAPI_ROOT + category, "")
    .replace(/\//g, "");

  return id;
};

export const getPeopleId = url => getId(url, SWAPI_PEOPLE);

export const getPeopleImage = (id) =>
  `${GUIDE_IMG_PERSON}/${id}${GUIDE_PEOPLE_EXTENSION}`;
// 'https://starwars-visualguide.com/assets/img/characters/${id}.jpg'

export const getPeoplePageId = (url) => {
  const pos = url.lastIndexOf(SWAPI_PARAM_PAGE);
  const id = url.slice(pos + SWAPI_PARAM_PAGE.length, url.length);
  return Number(id);
};
