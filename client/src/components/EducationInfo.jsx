import React from "react";

function EducationInfo({formData, setFormData}) {
  return (
    <div className="sign-up-container">
      <input
        type="text"
        placeholder="Institute Name..."
        value={formData.InstituteName}
        onChange={(event) =>
          setFormData({ ...formData, InstituteName: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Marks..."
        value={formData.Marks}
        onChange={(event) =>
          setFormData({ ...formData, Marks: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Stream..."
        value={formData.Stream}
        onChange={(event) =>
          setFormData({ ...formData, Stream: event.target.value })
        }
      />
      <label>Start Date:</label>
      <input
        type="date"
        value={formData.StartDate}
        onChange={(event) =>
          setFormData({ ...formData, StartDate: event.target.value })
        }
      />
      <label>End Date:</label>
      <input
        type="date"
        value={formData.EndDate}
        onChange={(event) =>
          setFormData({ ...formData, EndDate: event.target.value })
        }
      />
    </div>
  );
}

export default EducationInfo;
