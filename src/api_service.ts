import axios from "axios";

const API_BASE_URL = `https://cors-anywhere.herokuapp.com/https://diploma-backend-3e4r.onrender.com/auth`;

var token = null;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const signUp = async (login: string, email: string, password: string) => {
  const response = await apiClient.post("/sign-up", {
    login: login,
    email: email,
    password: password
  });
  if (response.data && response.data.accessToken) {
    token = response.data.accessToken;
  }
  return response.data;
};

export const signIn = async (login: string, password: string) => {
  const response = await apiClient.post("/sign-in", { login, password });
  if (response.data && response.data.accessToken) {
    token = response.data.accessToken;
  }
  return response.data;
};

export const getDependencies = async () => {
  const response = await apiClient.get("/deps");
  return response.data;
};

export const getPersonDependencies = async (token: string, dependencyId: string) => {
    try {
        const data = [
          {
            id: dependencyId,
          },
        ];
    
        const response = await apiClient.post("/deps", data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
    
        console.log("Response Data:", response.data);
        return response.data;
      } catch (error) {
        console.error("Error saving dependency:", error);
        throw error;
      }
};

export const sendMotivationLetter = async (
  token: string,
  startDate: string,
  daysPerWeek: number,
  drinksPerDay: number,
  motivationText: string
) => {
  const response = await apiClient.post(
    "/t",
    { startDate, daysPerWeek, drinksPerDay, motivationText },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data;
};
