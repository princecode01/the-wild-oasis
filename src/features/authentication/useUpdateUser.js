import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserData } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateUserData,
    onSuccess: ({ user }) => {
      queryClient.setQueryData(["user"], user);
    //   queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("User account successfully updated");
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateUser, isUpdating };
}
