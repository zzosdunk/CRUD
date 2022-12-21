import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { firestore } from "../lib/controller";
import { useState, useEffect } from "react";
import Information from "./Information";

function Details() {
  const [hotel, setHotel] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  const getHotel = doc(firestore, `hotels/${id}`);

  useEffect(() => {
    const fetchHotelData = async () => {
      setIsLoading(true);
      const docSnap = await getDoc(getHotel);
      if (docSnap.exists()) {
        const newHotelObj = {
          id: docSnap.id,
          ...docSnap.data(),
        };
        setHotel(newHotelObj);
        setIsLoading(false);
      }
    };

    fetchHotelData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) return <div className="load" />;

  return (
    <div className="hotel-details">
      {Object.keys(hotel) && Object.keys(hotel).length ? (
        <Information hotel={hotel} detailsPage />
      ) : null}
    </div>
  );
}

export default Details;
