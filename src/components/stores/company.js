export const showCompany = async (URL) => {

    try {
        const response = await fetch(URL);
        const data = await response.json();
        return data

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}