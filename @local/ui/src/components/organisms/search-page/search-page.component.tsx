import React from "react";
import Input from "../../atoms/input/input.component";


const searchPage = () => {
    return (
      <div className="search-popup">
          <Input type="text" defaultValue="ابحث هنا" />
      </div>
    );
  };

  export default searchPage;