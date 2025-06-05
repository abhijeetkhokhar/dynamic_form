import React, { useState } from "react";
import Section from "./components/Section";

const App = () => {
  const [sections, setSections] = useState([
    { title: "", description: "", image: null },
  ]);

  const addSection = () => {
    setSections([...sections, { title: "", description: "", image: null }]);
  };

  const handleChange = (index, e) => {
    const { name, value, files } = e.target;
    const updated = [...sections];
    updated[index][name] = name === "image" ? files[0] : value;
    setSections(updated);
  };

  const handleDelete = (index) => {
    const updated = sections.filter((_, i) => i !== index);
    setSections(updated);
  };

  const handleSubmit = () => {
    const result = sections.map((s) => ({
      title: s.title,
      description: s.description,
      image: s.image ? s.image.name : null,
    }));
    console.log(JSON.stringify(result, null, 2));
    alert("Form submitted! Check console for output.");
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Dynamic Form</h1>

      {sections.map((section, i) => (
        <Section
          key={i}
          index={i}
          data={section}
          handleChange={handleChange}
          handleDelete={handleDelete}
        />
      ))}

      <div className="flex gap-4 mt-4">
        <button
          onClick={addSection}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Section
        </button>
        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default App;
