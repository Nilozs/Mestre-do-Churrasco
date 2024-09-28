import { LoginResponse, Users } from "../@types/user";
import { api } from "./api";
import { useMutation } from "@tanstack/react-query";
import { useAuth } from "../context/middleware";
import { useIonToast, useIonRouter } from '@ionic/react';

const loginUser = async (users: Users): Promise<LoginResponse> => {
  const { data } = await api.post<LoginResponse>("/api/login", users);
  return data;
};

export default function useLoginUsers() {
  const { dispatch } = useAuth();
  const [present] = useIonToast();
  const router = useIonRouter();

  return useMutation<LoginResponse, unknown, Users>({
    mutationFn: loginUser,
    onSuccess: (data) => {
      const { token, user } = data;
    
      dispatch({
        type: 'LOGIN',
        payload: {
          token,
          user: {
            ...user,
            id: user.id ?? 0,
          },
          loading: false,
        }
      });
    
      present({
        message: 'Usuário logado com sucesso',
        duration: 2000,
        color: 'success',
      });
    
      router.push('/home', 'forward'); 
    },
    onError: () => {
      present({
        message: 'Erro ao realizar login',
        duration: 2000,
        color: 'danger',
      });
    }
  });
}
