import React from 'react';
import { useRouter } from 'next/navigation'; // Use 'next/router' instead of 'next/navigation'
import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query'; // Use 'react-query' instead of '@tanstack/react-query';
import { FC } from 'react';

interface ButtonProps {
  id: string;
}

const DeleteButton: FC<ButtonProps> = ({ id }) => {

  const router = useRouter();
  const queryClient = useQueryClient(); // Get the QueryClient

  const { mutate, isLoading } = useMutation(
    async () => {
      // Delete the task using axios
      try {
        await axios.delete(`api/tasks/${id}`);
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
    {
      onError: (error) => {
        console.error(error);
      },
      onSuccess: () => {
        // Invalidate the relevant query to trigger a refetch
        queryClient.invalidateQueries('yourQueryKey');
        router.push('/');
        router.refresh();
      },
    }
  );

  return (
    <button
      onClick={() => mutate()}
      className="btn btn-circle hover:bg-white bg-indigo-950"
    >
      
      {isLoading ? (
        <span className="loading loading-spinner"></span>
      ) : (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 48 48">
            <path fill="#b39ddb" d="M30.6,44H17.4c-2,0-3.7-1.4-4-3.4L9,11h30l-4.5,29.6C34.2,42.6,32.5,44,30.6,44z"></path>
            <path fill="#9575cd" d="M28 6L20 6 14 12 34 12z"></path>
            <path fill="#7e57c2" d="M10,8h28c1.1,0,2,0.9,2,2v2H8v-2C8,8.9,8.9,8,10,8z"></path>
          </svg>
        </>
      )}
    </button>
  );
};

export default DeleteButton;
