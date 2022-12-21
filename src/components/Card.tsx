import { useState, useEffect } from "react";

import { onSnapshot, QuerySnapshot, DocumentData } from "firebase/firestore";

import { hotelsCollection } from "../lib/controller";
import { IHotel } from "../types/hotel";
import Information from "./Information";

function Card() {
  const [hotels, setHotels] = useState<IHotel[]>([]);

  useEffect(() => {
    onSnapshot(hotelsCollection, (snapshot: QuerySnapshot<DocumentData>) => {
      setHotels(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        })
      );
    });
  }, []);

  return (
    <div className="card">
      <h2 className="title">All hotels</h2>
      {hotels && hotels.length ? (
        <div>
          {hotels?.map((hotel) => (
            <Information key={hotel.id} hotel={hotel} />
          ))}
        </div>
      ) : (
        <h2 className="no-hotels">There are no hotels. Please add one</h2>
      )}
    </div>
  );
}

export default Card;
