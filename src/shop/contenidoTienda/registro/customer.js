import { navigate } from "svelte-routing";
import { URL } from "../../../components/tools/connections/url"
import { userGoogle } from "../form/form";


export const updateCustomer = async (e) => {
    console.log(e.target.name.value)
    const user = {
        id: e.target.id.value,
        name: e.target.name.value,
        last_name: e.target.last_name.value,
        address: e.target.address.value,
        email: e.target.email.value,
        phone: null,
        mobile_phone: e.target.mobile_phone.value,
        fiscal_status: "Consumidor final",
        current_account: 0,
        discount: 0,
        idPersonal: e.target.idPersonal.value
    };
    
        try {
            const response = await fetch(`${URL}/customer`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user)
            })
            const json = await response.json();

            return json;

        } catch (error) {
            console.error("Algún error inesperado", error);
        }
    

}


export const logout = () => {
    userGoogle.set({});
    localStorage.removeItem("user");
};

export const createCustomer =async (email)=>{
    const response = await fetch(`${URL}/customer/byEmail/${email}`)
    const json = await response.json();
    return json;
}