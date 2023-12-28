export async function getData(URL){

    let fetchStores = await fetch(URL)
    let storesJson = fetchStores.json();
    return storesJson;
}