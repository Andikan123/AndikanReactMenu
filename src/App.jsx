import { useState } from "react";
import Categories from "./Categories";
import data from "./data";
import Menu from "./Menu";
import Title from "./Title";
const allCategories = ["all", ...new Set(data.map((item) => item.category))];

const App = () => {
  const [menu, setMenu] = useState(data);
  const [cat, setCat] = useState(allCategories);

  const filterItem = (category) => {
    if (category === "all") {
      setMenu(data);
      return;
    }

    const newItem = data.filter((item) => item.category === category);
    setMenu(newItem);
  };
  return (
    <main className="menu">
      <Title text="Our Menu" />
      <Categories categories={cat} filterItem={filterItem} />
      <Menu menu={menu} />
    </main>
  );
};

export default App;
