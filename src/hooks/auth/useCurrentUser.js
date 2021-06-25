import { useQuery } from "react-query";
import { interceptor } from "../../utils/interceptor";
import LocalStorageService from "../../utils/localStorageService";
const localStorageService = LocalStorageService.getService();
const axiosInstance = interceptor();

export function useCurrentUser() {
  const data = useQuery("currentuser", () =>
    axiosInstance.get("/api/auth/user").then((res) => res.data)
  );
  localStorageService.setCurrentUser(data?.data);
  return data;
}
