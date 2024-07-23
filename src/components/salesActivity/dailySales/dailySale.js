import { URL } from "../../tools/connections/url";

export const getClosingNow=async()=>{
    try{

        let response = await fetch(URL+"/closing/byDate");
        let json = await response.json();
        return json;
    }catch(e){
        console.log("algo salio mal",e)
    }
}