import {
  collection,
  getFirestore,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { INewHotel } from "../types/hotel";
import { app } from "./firebase";

export const firestore = getFirestore(app);

export const hotelsCollection = collection(firestore, "hotels");

export const addNewHotel = async (hotelData: INewHotel) => {
  await addDoc(hotelsCollection, { ...hotelData });
};

export const deleteHotel = async (
  hotelId: string | undefined,
  navigate: any
) => {
  const document = doc(firestore, `hotels/${hotelId}`);
  await deleteDoc(document);
  navigate("/");
};

export const updateHotel = async (
  hotelId: string | undefined,
  updatedData: any
) => {
  const document = doc(firestore, `hotels/${hotelId}`);
  await updateDoc(document, updatedData, { merge: true });
};
