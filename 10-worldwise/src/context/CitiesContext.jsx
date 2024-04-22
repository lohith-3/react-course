/* eslint-disable react/prop-types */
import { useCallback } from "react";
import { createContext, useEffect, useContext, useReducer } from "react";

const BASE_URL = "http://localhost:9000";

const CitiesContext = createContext();

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: "",
};

// "setCities" => "cities/loaded"
// will only include state for cities => will include for loading and cities

function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "loading":
      return { ...state, isLoading: true };
    case "cities/loaded":
      return { ...state, isLoading: false, cities: payload };

    case "city/loaded":
      return { ...state, isLoading: false, currentCity: payload };

    case "city/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, payload],
        currentCity: payload,
      };

    case "city/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((c) => c.id !== payload),
        currentCity: {},
      };

    case "rejected":
      return { ...state, isLoading: false, error: payload };

    default:
      return { ...state };
  }
}

function CitiesProvider({ children }) {
  const [{ cities, isLoading, currentCity }, dispatch] = useReducer(
    reducer,
    initialState
  );
  // const [cities, setCities] = useState({});
  // const [isLoading, setIsLoading] = useState(false);
  // const [currentCity, setCurrentCity] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      dispatch({ type: "loading" });

      try {
        const response = await fetch(`${BASE_URL}/cities`);
        const data = await response.json();

        dispatch({ type: "cities/loaded", payload: data });
      } catch (err) {
        dispatch({
          type: "rejected",
          payload: `Error while fetching cities: ${err.message}`,
        });
      }
    };

    fetchCities();
  }, []);

  const getCityById = useCallback(
    async function getCityById(id) {
      if (Number(id) === currentCity.id) return;
      try {
        dispatch({ type: "loading" });
        const response = await fetch(`${BASE_URL}/cities/${currentCity.id}`);
        const data = await response.json();

        dispatch({ type: "city/loaded", payload: data });
      } catch (err) {
        dispatch({
          type: "rejected",
          payload: `Error while fetching city by id: ${err.message}`,
        });
      }
    },
    [currentCity.id]
  );

  // const getCityById = async (id) => {
  //   try {
  //     dispatch({ type: "loading" });
  //     const response = await fetch(`${BASE_URL}/cities/${id}`);
  //     const data = await response.json();

  //     dispatch({ type: "city/loaded", payload: data });
  //   } catch (err) {
  //     dispatch({
  //       type: "rejected",
  //       payload: `Error while fetching city by id: ${err.message}`,
  //     });
  //   }
  // };

  const createCity = async (newCity) => {
    try {
      dispatch({ type: "loading" });
      const response = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      dispatch({ type: "city/created", payload: data });
    } catch (err) {
      dispatch({
        type: "rejected",
        payload: `Error while creating city: ${err.message}`,
      });
    }
  };

  const deleteCity = async (id) => {
    try {
      dispatch({ type: "loading" });
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });

      dispatch({ type: "city/deleted", payload: id });
    } catch (err) {
      dispatch({
        type: "rejected",
        payload: `Error while deleting city: ${err.message}`,
      });
    }
  };

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCityById,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);

  if (context === undefined)
    throw new Error("CitiesContext was used outside of the CitiesProvider");

  return context;
}

export { CitiesProvider, useCities };
