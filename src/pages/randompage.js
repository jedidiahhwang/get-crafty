import React, {useEffect, useState, Suspense} from "react";

import CocktailResults from "../Components/CocktailResults.js";

const RandomPage = () => {
    const [status, setStatus] = useState(false);

    return (
        <Suspense fallback={<div>Loading</div>}>

                    <CocktailResults />

        </Suspense>
    )
}

export default RandomPage