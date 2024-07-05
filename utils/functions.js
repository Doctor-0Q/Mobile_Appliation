import { Toast } from "toastify-react-native";
import API_URL from "../config";

export function obscureEmail(email) {
    const [firstPart, secondPart] = email.split('@');

    const obscuredFirstPart = firstPart.slice(0, 2) + '*'.repeat(firstPart.length - 4) + firstPart.slice(-2);

    return obscuredFirstPart + '@' + secondPart;
}

export async function showLocation(location, search, navigate) {
    let latitude = null;
    let longitude = null;
    console.log(search);

    try {
        const res = await fetch(`${API_URL}/api/search/clinics`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ search: search, latitude, longitude })
        });
        const data = await res.json();
        if (!res.ok) {
            Toast.warn(data);
            return;
        }
        return data;
    }
    catch (e) {
        Toast.warn("Service unavailabele");
        return;
    }
}