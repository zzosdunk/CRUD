import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateHotel } from "../lib/controller";

interface EditProps {
  editDescription: boolean;
  setEditDescription: React.Dispatch<React.SetStateAction<boolean>>;
  id?: string;
}

function Edit({ editDescription, setEditDescription, id }: EditProps) {
  const [newDescription, setNewDescription] = useState("");

  const navigate = useNavigate();

  const handleUpdate = () => {
    updateHotel(id, { description: newDescription });
    setEditDescription(!editDescription);
    navigate("/");
  };

  return (
    <div className="edit">
      <label>Please enter the new hotel description below</label>
      <textarea
        required
        name="description"
        id="description"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      />
      <button className="update-button" onClick={() => handleUpdate()}>
        Update hotel
      </button>
    </div>
  );
}

export default Edit;
