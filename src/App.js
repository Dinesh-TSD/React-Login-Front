import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Nav_Components/Home";
import CartPage from "./Nav_Components/CartPage";
import Order from "./Nav_Components/Order";
import Dashboard from "./Nav_Components/Dashboard";
import Books from "./Nav_Components/Books";
import CreateAuthor from "./Crud_Components/AuthorCrud/CreateAuthor";
import CreateBook from "./Crud_Components/BookCrud/CreateBook";
import EditAuthor from "./Crud_Components/AuthorCrud/EditAuthor";
import ViewAuthor from "./Crud_Components/AuthorCrud/ViewAuthor";
import EditBook from "./Crud_Components/BookCrud/EditBook";
import ViewBook from "./Crud_Components/BookCrud/ViewBook";
import Login from "./Login_Components/Login";
import Portal from "./Portal/Portal";
import Register from "./Login_Components/Register";
import ForgotPassword from "./Login_Components/ForgotPassword";
import ResetPassword from "./Login_Components/ResetPassword";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot/password" element={<ForgotPassword />} />
          <Route path="/reset/password/:token" element={<ResetPassword />} />
          <Route path="/portal" element={<Portal />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="home" element={<Home />} />
            <Route path="books" element={<Books />} />
            <Route path="orders" element={<Order />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="create-author" element={<CreateAuthor />} />
            <Route path="edit-author/:id" element={<EditAuthor />} />
            <Route path="view-author/:id" element={<ViewAuthor />} />
            <Route path="upload-book" element={<CreateBook />} />
            <Route path="edit-book/:id" element={<EditBook />} />
            <Route path="view-book/:id" element={<ViewBook />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
