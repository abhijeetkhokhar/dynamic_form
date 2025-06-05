import React from "react";

const Section = ({ index, data, handleChange, handleDelete }) => {
  return (
    <div className="border p-4 rounded-lg bg-white shadow mb-4 relative">
      <h3 className="text-lg font-semibold mb-2">Section {index + 1}</h3>

      <label className="block mb-2">
        Title:
        <input
          type="text"
          name="title"
          value={data.title}
          onChange={(e) => handleChange(index, e)}
          className="w-full p-2 border rounded mt-1"
          required
        />
      </label>

      <label className="block mb-2">
        Description:
        <textarea
          name="description"
          value={data.description}
          onChange={(e) => handleChange(index, e)}
          className="w-full p-2 border rounded mt-1"
          rows={3}
          required
        />
      </label>

      <label className="block mb-4">
        Image:
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={(e) => handleChange(index, e)}
          className="mt-1"
        />
      </label>
      
      <button
        type="button"
        onClick={() => handleDelete(index)}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      >
        Delete Section
      </button>
    </div>
  );
};

export default Section;
