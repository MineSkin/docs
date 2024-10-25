import React from 'react';
import { Provider } from 'react-redux';
import MethodEndpoint from "@theme/ApiExplorer/MethodEndpoint";
import openApiStore from "../../store";


const CustomMethodEndpoint = ({method, path}) => {
    return (
        <Provider store={ openApiStore }>
            <div class={"inline-endpoint"}>
                <MethodEndpoint method={ method } path={ path }/>
            </div>
        </Provider>
    );
};

export default CustomMethodEndpoint;