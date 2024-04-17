import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Product from "../pages/Product";
import Pricing from "../pages/Pricing";
import HomePage from "../pages/HomePage";
import PageNotFound from "../pages/PageNotFound";
import AppLayout from "../pages/AppLayout";
import Login from "../pages/Login";
import CityList from "../components/CityList";
import { useEffect, useState } from "react";
import CountryList from "../components/CountryList";
import City from "../components/City";
import Form from "../components/Form";

const BASE_URL = "http://localhost:9000";

const App = () => {
  const [cities, setCities] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${BASE_URL}/cities`);
        const data = await response.json();

        setCities(data);
      } catch (err) {
        console.error(`Error while fetching cities: ${err.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCities();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="cities" />}></Route>
          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={isLoading} />}
          ></Route>
          <Route path="cities/:id" element={<City />}></Route>
          <Route
            path="countries"
            element={<CountryList cities={cities} isLoading={isLoading} />}
          ></Route>
          <Route path="form" element={<Form />}></Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
