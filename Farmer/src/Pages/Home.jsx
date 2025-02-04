import React, { useEffect, useState } from "react";
import { GET } from "../Helpers/Api";
import { addToCart } from "../Helpers/CartHelpers";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart";
import { CircleUser, ShoppingCart } from "lucide-react"

function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  const handleAddToCart = (item) => {
    addToCart(item);
    toast.success("Item Added to cart");
    navigate("/cart")
  };

  const getCategories = async () => {
    try {
      const response = await GET("category/list");
      setCategories(response.categories);
    } catch (error) {
      alert(error);
    }
  };

  const getProducts = async () => {
    try {
      const response = await GET("product/list");
      setProducts(response.products);
      setFilteredProducts(response.products);
    } catch (error) {
      alert(error);
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null);
    if (category) {
      setFilteredProducts(products.filter((p) => p.categoryId === category._id));
    } else {
      setFilteredProducts(products);
    }
  };

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory);
    if (subcategory) {
      setFilteredProducts(products.filter((p) => p.subcategoryId === subcategory._id));
    } else {
      setFilteredProducts(products.filter((p) => p.categoryId === selectedCategory._id));
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <ToastContainer />

      {/* Category Filters */}
      <div className="flex items-center justify-between  flex-row py-4 gap-4">
        <div className="flex items-center justify-center flex-wrap gap-4  ">
        <button
          onClick={() => handleCategoryClick(null)}
          className="text-green-950 hover:text-white border border-green-950 bg-white hover:bg-green-800 rounded-full text-base font-medium px-5 py-2.5 transition"
        >
          All Categories
        </button>
        {categories.map((category) => (
          <div key={category._id} className="relative inline-block">
            <button
              onClick={() => handleCategoryClick(category)}
              className={`border border-gray-200 bg-white rounded-full text-base font-medium px-5 py-2.5 transition ${
                selectedCategory?._id === category._id ? "bg-gray-200" : ""
              }`}
            >
              {category.title}
            </button>
            {selectedCategory?._id === category._id && category.subcategories.length > 0 && (
              <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
                {category.subcategories.map((sub) => (
                  <button
                    key={sub._id}
                    onClick={() => handleSubcategoryClick(sub)}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200 w-full text-left"
                  >
                    {sub.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
        </div>

        <div className="flex flex-row gap-5">
          <CircleUser onClick={()=>navigate("/profile")} className="curosr-pointer"/>
          <ShoppingCart onClick={()=>navigate("/cart")} className="cursor-pointer"/>
        </div>
       
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            className="bg-white border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              className="w-full h-52 object-cover"
              src={product.images[0]}
              alt={product.title}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
              <p className="text-gray-600 text-sm">{product.quantity}</p>
              <p className="text-lg font-bold text-green-600">₹{product.mrp}</p>
              <div className="mt-4 flex justify-between">
                <button
                  type="button"
                  className="bg-green-950 hover:bg-green-800 text-white rounded-lg text-sm px-4 py-2 transition"
                >
                  Buy Now
                </button>
                <button
                  type="button"
                  onClick={() => handleAddToCart(product)}
                  className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 rounded-lg text-sm px-4 py-2 transition"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
