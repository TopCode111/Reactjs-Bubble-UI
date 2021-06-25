import { useQuery } from "react-query";
import { interceptor } from "../../utils/interceptor";
import { useMutation, useQueryClient } from "react-query";
import { useToastContext, ADD } from "../../store/ToastContext";
const axiosInstance = interceptor();

export function useFetchAllUsers() {
  const data = useQuery("allusers", () =>
    axiosInstance.get("/api/user").then((res) => res.data)
  );
  return data;
}

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { toastDispatch } = useToastContext();

  const res = useMutation(
    (body) => {
      return axiosInstance
        .post("/api/user/update-profile", { ...body })
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
        toastDispatch({
          type: ADD,
          payload: {
            content: { sucess: "FAIL", message: data.message },
            type: "success",
          },
        });
      },
    }
  );
  return res;
}

export function useUpdateProfilePicture() {
  const queryClient = useQueryClient();
  const { toastDispatch } = useToastContext();

  const res = useMutation(
    (body) => {
      var formdata = new FormData();
      formdata.append("avatar", body.target.files[0], "image.jpeg");
      return axiosInstance
        .post("/api/user/update-avatar", formdata)
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
        toastDispatch({
          type: ADD,
          payload: {
            content: { sucess: "FAIL", message: data.message },
            type: "success",
          },
        });
      },
    }
  );
  return res;
}

export function useChangePassword() {
  const queryClient = useQueryClient();
  const { toastDispatch } = useToastContext();

  const res = useMutation(
    (body) => {
      return axiosInstance
        .post("/api/user/change-password", { ...body })
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
        toastDispatch({
          type: ADD,
          payload: {
            content: { sucess: "FAIL", message: data.message },
            type: "success",
          },
        });
      },
    }
  );
  return res;
}

export function useDeleteUser(id) {
  console.log(id);
  return axiosInstance.delete("/api/user/" + { id }).then((res) => res.data);
}
