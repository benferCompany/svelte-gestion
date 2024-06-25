import {URL} from "../../tools/connections/url";
export const getDetails =async()=>{
    let fetchDetails = await fetch(`${URL}/details`);
    let jsonDetails = await fetchDetails.json();
    return jsonDetails;
}