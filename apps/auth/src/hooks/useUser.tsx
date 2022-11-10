import React, { Suspense, useContext } from 'react';
import { createContext, PropsWithChildren } from 'react';
import { User } from '@supabase/supabase-js';
import { redirect } from 'react-router-dom';
import { supabase } from '../supabase';
import { useSuspense } from './useSuspense';
import { Loading } from '../components/loading.component';

const ref = {};

const Context = createContext<User | null>(null);

const _UserProvider = ({ children }: PropsWithChildren) => {
  const {
    data: { user },
  } = useSuspense(supabase.auth.getUser, ref);

  if (!user) {
    redirect('/micro-frontend/auth/signin');
  }

  return <Context.Provider value={user}>{children}</Context.Provider>;
};

export const UserProvider = ({ children }: PropsWithChildren) => (
  <Suspense fallback={<Loading width="100%" height="100%" />}>
    <_UserProvider>{children}</_UserProvider>
  </Suspense>
);

export const useUser = () => useContext(Context);
