import { ButtonProps } from '@chakra-ui/react';
import { useState } from 'react';
import { redirect } from 'react-router-dom';
import { supabase } from '../supabase';

export const useSignIn = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin: ButtonProps['onClick'] = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      redirect('/micro-frontend/auth/home')
    } catch (error: unknown) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    setLoading,
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
  };
};
