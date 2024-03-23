import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import { useContext, useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { Category as CategoryList } from "./components/Home/Category/Category";
import { Category } from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";
import ReadMore from "./components/ReadMore/ReadMore";
// import CategoryList from "./components/CategoryList/CategoryList";
import { Context } from "./utils/context";
import { fetchDataFromApi } from "./utils/api";

function App() {
  const { categories, setCategories } = useContext(Context);

  useEffect(() => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      setCategories(res);
    });
  }, []);
  return (
    <BrowserRouter>
      <AppContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/category"
            element={
              <CategoryList
                headingText={"Categories"}
                categories={categories}
              />
            }
          />
          <Route path="category/:id" element={<Category />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/readmore" element={<ReadMore />} />
        </Routes>
        <Newsletter />
        <Footer />
      </AppContext>
    </BrowserRouter>
  );
}
export default App;
