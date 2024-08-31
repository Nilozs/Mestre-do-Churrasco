import { LoginResponse, Users } from "../@types/user"
import { api } from "./api";
import { useMutation } from "@tanstack/react-query";
import { useAuth } from "../context/middleware";
import { IonToast, useIonToast } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

const loginUser = async (users: Users): Promise<LoginResponse> => {
  const { data } = await api.post<LoginResponse>("/api/user/login", users);
  return data;
};

export default function useLoginUsers() {
  const { dispatch } = useAuth();
  const [present, dismiss] = useIonToast();
  const [showToast, setShowToast] = useState(false);
  const history = useHistory();

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
    
      history.push('/2fa');
    },
  });
}
