import React from "react";
import Appcontext from "./Context";

const Appprovider = ({Children}) => {
    <Appcontext.Provider value={"anuj"}>
        {Children}
    </Appcontext.Provider>
}

export default Appprovider ;

