import { lazy, useEffect, useState, Suspense } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { getApiResource } from "@utils/network";
import styles from "./PersonPage.module.css";
import { API_PERSON } from "@constants/api";
import ErrorMessage from "@components/ErrorMessage/ErrorMessage";
import { getPeopleImage } from "@services/getPeopleData";
import PersonPhoto from "@components/PersonPage/PersonPhoto/PersonPhoto";
import PersonInfo from "@components/PersonPage/PersonInfo/PersonInfo";
import PersonLinkBack from "@components/PersonPage/PersonLinkBack/PersonLinkBack";
import UiPreloader from "@components/UI-Kit/UiPreloader/UiPreloader";

const PersonFilms = lazy(() =>
  import("@components/PersonPage/PersonFilms/PersonFilms")
);

const PersonPage = () => {
  const [personId, setPersonId] = useState(null);
  const [errorApi, setErrorApi] = useState(false);
  const [personInfo, setPersonInfo] = useState([]);
  const [personName, setPersonName] = useState(null);
  const [personPhoto, setPersonPhoto] = useState(null);
  const [personFilms, setPersonFilms] = useState(null);
  const [personFavorite, setPersonFavorite] = useState(false);

  const { id } = useParams();

  const storeData = useSelector((store) => store.favoriteReducer);

  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PERSON}/${id}`);

      storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false);
      setPersonId(id);

      if (res) {
        setErrorApi(false);
        setPersonInfo([
          { title: "Height", data: res.height },
          { title: "Mass", data: res.mass },
          { title: "Hair Color", data: res.hair_color },
          { title: "Skin Color", data: res.skin_color },
          { title: "Eye Color", data: res.eye_color },
          { title: "Birth Year", data: res.birth_year },
          { title: "Gender", data: res.gender },
        ]);
        setPersonName(res.name);
        setPersonPhoto(getPeopleImage(id));
        // res.films
      } else {
        setErrorApi(true);
      }
      res.films.length && setPersonFilms(res.films);
    })();
  }, [id]);

  return (
    <>
      {errorApi ? (
        <ErrorMessage />
      ) : (
        <>
          <PersonLinkBack />
          <section className={styles.wrapper}>
            <h2 className={styles.title}>{personName}</h2>
            <div className={styles.container}>
              <PersonPhoto
                personFavorite={personFavorite}
                setPersonFavorite={setPersonFavorite}
                personPhoto={personPhoto}
                personName={personName}
                personId={personId}
              />
              {personInfo && <PersonInfo personInfo={personInfo} />}
              {personFilms && (
                <Suspense fallback={<UiPreloader />}>
                  <PersonFilms personFilms={personFilms} />
                </Suspense>
              )}
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default PersonPage;
