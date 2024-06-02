import { useMutation } from 'convex/react';
import { useState } from 'react';

export const useApiMutation = (mutationFunc: any) => {
  const [pending, setPending] = useState(false);
  const apiMutation = useMutation(mutationFunc);

  const mutate = (payload: any) => {
    setPending(true);
    return apiMutation(payload)
      .then((result) => result)
      .catch((error) => {
        throw error;
      })
      .finally(() => setPending(false));
  };

  return { mutate, pending };
};
