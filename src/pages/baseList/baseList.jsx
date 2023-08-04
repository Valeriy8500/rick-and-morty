import React, { lazy } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import { useListElements } from "../../hooks/useListElements";

const CharactersCard = lazy(() => import("../charactersCard/charactersCard").then((module) => ({
  default: module.CharactersCard
})));
const EpisodeCard = lazy(() => import("../episodeCard/episodeCard").then((module) => ({
  default: module.EpisodeCard
})));
const LocationCard = lazy(() => import("../locationCard/locationCard"));
const NotFound = lazy(() => import("../../components/notFound/notFound"));
const Home = lazy(() => import("../home/home"));

export function BaseList({ page, url }) {
  const { loading, elements } = useListElements(url);

  const list = React.useMemo(() => {
    if (page === "home") {
      return (
        <Home />
      );
    } else if (page === "characters") {
      const charactersList = elements.map((item, idx) => {
        if (elements.length === idx + 1) {
          return (
            <NavLink
              to={`/characters/${item.id}`}
              key={item.id}
              className="nav-container_navlink"
              style={({ isActive }) => isActive ? { color: '#9d97f8' } : { color: 'white' }}
            >
              <span>{item.name}</span>
            </NavLink>
          )
        } else {
          return (
            <NavLink
              to={`/characters/${item.id}`}
              key={item.id}
              className="nav-container_navlink"
              style={({ isActive }) => isActive ? { color: '#9d97f8' } : { color: 'white' }}
            >
              <span>{item.name}</span>
            </NavLink>
          )
        }
      });
      return (
        <>{charactersList}</>
      )
    } else if (page === "episode") {
      const episodeList = elements.map((item, idx) => {
        if (elements.length === idx + 1) {
          return (
            <NavLink
              to={`/episode/${item.id}`}
              key={item.id}
              className="nav-container_navlink"
              style={({ isActive }) => isActive ? { color: '#9d97f8' } : { color: 'white' }}
            >
              <span>{item.name}</span>
            </NavLink>
          )
        } else {
          return (
            <NavLink
              to={`/episode/${item.id}`}
              key={item.id}
              className="nav-container_navlink"
              style={({ isActive }) => isActive ? { color: '#9d97f8' } : { color: 'white' }}
            >
              <span>{item.name}</span>
            </NavLink>
          )
        }
      });
      return (
        <>{episodeList}</>
      )
    } else if (page === "location") {
      const locationList = elements.map((item, idx) => {
        if (elements.length === idx + 1) {
          return (
            <NavLink
              to={`/location/${item.id}`}
              key={item.id}
              className="nav-container_navlink"
              style={({ isActive }) => isActive ? { color: '#9d97f8' } : { color: 'white' }}
            >
              <span>{item.name}</span>
            </NavLink>
          )
        } else {
          return (
            <NavLink
              to={`/location/${item.id}`}
              key={item.id}
              className="nav-container_navlink"
              style={({ isActive }) => isActive ? { color: '#9d97f8' } : { color: 'white' }}
            >
              <span>{item.name}</span>
            </NavLink>
          )
        }
      });
      return (
        <>{locationList}</>
      )
    }
  }, [page, elements]);

  const routes = React.useMemo(() => {
    if (page === "characters") {
      const charactersRoutes = elements.map((item) => {
        return (
          <Route
            key={item.id}
            path={`${item.id}`}
            element={
              <CharactersCard
                name={item.name}
                status={item.status}
                species={item.species}
                type={item.type}
                gender={item.gender}
                image={item.image}
                created={item.created}
              />
            }
          />
        )
      });
      return (
        <Routes>
          <Route
            index
            element={
              !loading && <div className="tooltip">Выберите элемент</div>
            }
          />
          {charactersRoutes}
          <Route path="*" element={<NotFound />} />
        </Routes>
      )
    } else if (page === "episode") {
      const episodeRoutes = elements.map((item) => {
        return (
          <Route
            key={item.id}
            path={`${item.id}`}
            element={
              <EpisodeCard
                name={item.name}
                airDate={item.air_date}
                episode={item.episode}
                created={item.created}
              />
            }
          />
        )
      });
      return (
        <Routes>
          <Route
            index
            element={
              !loading && <div className="tooltip">Выберите элемент</div>
            }
          />
          {episodeRoutes}
          <Route path="*" element={<NotFound />} />
        </Routes>
      )
    } else if (page === "location") {
      const locationRoutes = elements.map((item) => {
        return (
          <Route
            key={item.id}
            path={`${item.id}`}
            element={
              <LocationCard
                name={item.name}
                type={item.type}
                dimension={item.dimension}
                created={item.created}
              />
            }
          />
        )
      });
      return (
        <Routes>
          <Route
            index
            element={
              !loading && <div className="tooltip">Выберите элемент</div>
            }
          />
          {locationRoutes}
          <Route path="*" element={<NotFound />} />
        </Routes>
      )
    }
  }, [page, elements, loading]);

  return (
    <div className="baselist">
      <div className={page === "home" ? "nav-container-default" : "nav-container"}>
        {list}
        {loading && <span className="loading">Loading...</span>}
      </div>
      {routes}
    </div>
  )
};
