import { useEffect,useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/loader";
import AppRoutes from "./Routes/AppRoutes";
import AxiosService from "./components/utils/ApiService";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading, setPortfolioData } from "./redux/rootslice";
import  useTheme  from "./hooks/useTheme.jsx";

function App() {
    const { loading, portfolioData } = useSelector((state) => state.root);
    const dispatch = useDispatch();
  

    const getPortfolioData = async () => {
        try {
            dispatch(showLoading()); 
            const response = await AxiosService.get("/get-portfolio-data");
            dispatch(setPortfolioData(response.data));
            dispatch(hideLoading()); 
        } catch (error) {
            console.log(error);
            dispatch(hideLoading()); 
        }
    };

    useEffect(() => {
        getPortfolioData();
    }, []);


    return (
        <div className=" bg-white dark:bg-background_dark  h-screen sm:h-[100%]">
        <BrowserRouter>
            {loading ? (
                <Loader />
            ) : (
                <div>
                <AppRoutes />
                </div>
            )}
        </BrowserRouter>
        </div>
    );
}

export default App;
