import React, { Suspense, useContext } from 'react';
import { createContext, PropsWithChildren } from 'react';
import { User } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabase';
import { useSuspense } from './useSuspense';
import { Loading } from '../components/loading.component';
import { Background } from '../components/atoms';

const ref = {};

const Context = createContext<User>({} as never);

const _UserProvider = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  const {
    data: { user },
  } = useSuspense(() => supabase.auth.getUser(), ref);

  if (!user) {
    alert('please sign in');
    navigate('/micro-frontend/auth/signin');
    return null;
  }

  console.log(user);

  return <Context.Provider value={user as User}>{children}</Context.Provider>;
};

export const UserProvider = ({ children }: PropsWithChildren) => (
  <Suspense
    fallback={
      <Background>
        <Loading width="100%" height="100%" />
      </Background>
    }
  >
    <_UserProvider>{children}</_UserProvider>
  </Suspense>
);

export const useUser = () => useContext(Context) as User;
