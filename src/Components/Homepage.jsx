import {useEffect, useState } from "react";
import Wallpaper from "./Wallpaper";
import Quicksearch from "./Quicksearch";
import axios from "axios";

// declaring Homepage component.
function Homepage() {
  const [locations, setLocation] = useState([]);
  const [mealtypes, setMealtypes] = useState([]);

  useEffect( async () => {
    sessionStorage.clear();

    // making api call to fetching the locations data.
    let location = await axios({
      method: "GET",
      url: "https://server-lake-zeta.vercel.app/locations",
      headers: { "content-type": "application/json" },
    });
    // update locations variable in state.
    setLocation(location.data);

    // making another api call to fetching mealtypes data.
    let mealtype = await axios({
      method: "GET",
      url: "https://server-lake-zeta.vercel.app/mealtypes",
      headers: { "content-type": "application/json" },
    });
    //  update mealtypes variable in state.
    setMealtypes(mealtype.data);

  }, []);

  return (
    <div>
      {/* Rendering the wallpaper and quicksearch component  */}
      <Wallpaper ddlocations={locations} />
      <Quicksearch quicksearch={mealtypes} />
    </div>
  );
}

// exporting to router component.
export default Homepage;
