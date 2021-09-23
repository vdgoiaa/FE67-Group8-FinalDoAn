import axios from "axios";
import { CYBER_TOKEN } from "../utils/settings/config";

export const request=({method,url,data,params,headers})=>{
    const variables={
        method,
        url,
        data,
        params,
        headers,
    };

    const token=localStorage.getItem("accessToken");
    if(token)
    {
        variables.headers={
            Authorization: "Bearer " + token,
            TokenCybersoft: CYBER_TOKEN,
        };
    }
    else{
        variables.headers={
            TokenCybersoft:CYBER_TOKEN,
        }
    }
    // console.log(variables);

    return axios(variables);
};