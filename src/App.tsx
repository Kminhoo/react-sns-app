import Layout from "components/Layout";

import { Outlet } from "react-router-dom";

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Layout>
      <Outlet />
      <ToastContainer />
    </Layout>
  );
}

export default App;
