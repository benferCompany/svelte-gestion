import {URL} from "../../../tools/connections/url";
export let options = {
    headAndKey: [
        { head: "Id", key: "id" },
        { head: "Nombre", key: "name" },
        { head: "Apellido", key: "last_name" },
    ],
    url: `${URL}/supplier/name?page=0&size=5`,
    keyObject: (object) => {
        return object.name + " " + object.last_name;
    },
    keySearch: "name",
    styleInput: "width:20em"
};