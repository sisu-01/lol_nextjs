import type { fetchedMatchupsType } from "../types/game";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchMatchups = async (): Promise<fetchedMatchupsType | null> => {
  try {
    const endpoint = `${API_URL}/matchups`;
    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data
  } catch (error) {
    console.log(error);
    return null;
  }
}