import SideBar from "./components/SideBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  function handleClick() {
    setShowModal(!showModal);
  }

  async function fetchApiData() {
    const NASA_KEY = "f0XMzPDUgjcfzfkn0Z0EAhQrRaEkfg3F1BqgsJVI";
    const url = "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_KEY}`;
    try {
      const res = await fetch(url);
      const apiData = await res.json();
      setData(apiData);
      console.log("DATA\n", apiData);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    fetchApiData();
  }, []);

  return (
    <>
      {data ? (
        <Main data={data} />
      ) : (
        <div className="loadingState">
          <i className="bx bxs-cog"></i>
        </div>
      )}
      {showModal && <SideBar data={data} handleClick={handleClick} />}
      {data && <Footer data={data} handleClick={handleClick} />}
    </>
  );
}
