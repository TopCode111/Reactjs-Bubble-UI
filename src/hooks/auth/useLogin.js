/* eslint-disable no-unused-vars */
import { interceptor } from "../../utils/interceptor";
import { useToastContext, ADD } from "../../store/ToastContext";
import { useMutation, useQueryClient } from "react-query";
import { useHistory } from "react-router-dom";
import LocalStorageService from "../../utils/localStorageService";
const localStorageService = LocalStorageService.getService();
const axiosInstance = interceptor();

export default function useLogin(endPoint) {
  const history = useHistory();
  const queryClient = useQueryClient();
  const { toastDispatch } = useToastContext();

  const res = useMutation(
    (body) => {
      return axiosInstance
        .post("/api/auth/login", { ...body })
        .then((res) => res.data);
    },
    {
      onError: (error) => {
        try {
          const errors = error.response.data;
          const keys = Object.keys(errors);
          keys.map((item) => {
            if (typeof errors[item] != "object") {
              toastDispatch({
                type: ADD,
                payload: {
                  content: { sucess: "FAIL", message: errors[item] },
                  type: "danger",
                },
              });
            } else {
              errors[item].map((text) => {
                toastDispatch({
                  type: ADD,
                  payload: {
                    content: { sucess: "FAIL", message: text },
                    type: "danger",
                  },
                });
              });
            }
          });
        } catch (e) {
          toastDispatch({
            type: ADD,
            payload: {
              content: { sucess: "FAIL", message: "何かの間違いだ" },
              type: "danger",
            },
          });
        }
      },
      onSuccess: (data) => {
        localStorageService.setToken(data?.token);
        history.push("/");
      },
    }
  );
  return res;
}
