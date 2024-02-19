import { useEffect } from "react";
import CheckBox from "./Checkbox";
import { useState } from "react";

function App() {
  const [courseModules, setCourseModules] = useState([
    { _id: 1, moduleName: "HTML" },
    { _id: 2, moduleName: "CSS" },
    { _id: 3, moduleName: "JS" },
    { _id: 4, moduleName: "React" },
  ]);

  let studentModules = [
    { _id: 1, moduleName: "HTML" },
    { _id: 2, moduleName: "CSS" },
    { _id: 3, moduleName: "JS" },
  ];

  useEffect(() => {
    const updatedCourseModules = courseModules.map((item) => {
      const moduleExists = studentModules.some((mod) => item._id === mod._id);
      if (moduleExists) {
        return { ...item, checked: true };
      }
      return { ...item, checked: false };
    });
    setCourseModules(updatedCourseModules);
  }, []);

  const inputChangeHandler = (e) => {
    let toCheck = false;
    if (e.target.checked) {
      toCheck = true;
    }
    const updatedCourseModules = courseModules.map((item) => {
      if (item._id == e.target.value) {
        return { ...item, checked: toCheck ? true : false };
      }
      return item;
    });

    setCourseModules(updatedCourseModules);
  };

  return (
    <div>
      <ul>
        {courseModules.map((module) => (
          <li>
            <CheckBox
              label={module.moduleName}
              value={module._id}
              checked={module.checked}
              onChange={inputChangeHandler}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
