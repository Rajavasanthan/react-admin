import logo from "./logo.svg";
import "./App.css";
import SideBar from "./Sidebar";
import TopBar from "./Topbar";
import Dashboard from "./Dashboard";
import UserList from "./UserList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserCreate from "./UserCreate";
import UserView from "./UserView";
import UserEdit from "./UserEdit";
import Demo from "./Demo";

function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <SideBar></SideBar>
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <TopBar></TopBar>
            <div class="container-fluid">
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/userlist" element={<UserList />} />
                <Route path="/usercreate" element={<UserCreate />} />
                <Route path="/demo" element={<Demo />} />
                <Route path="/userview/:id" element={<UserView />} />
                <Route path="/useredit/:id" element={<UserEdit />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
