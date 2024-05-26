'use client';

import { ReactNode } from 'react';
import {
  ClerkLoaded,
  ClerkLoading,
  ClerkProvider,
  useAuth,
} from '@clerk/nextjs';
import { ConvexProviderWithClerk } from 'convex/react-clerk';
import { ConvexReactClient } from 'convex/react';
import { Loading } from '@/components/auth/loading';

interface ConvexClientProviderProps {
  children: ReactNode;
}

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL as string;

const convex = new ConvexReactClient(convexUrl);

export const ConvexClientProvider = (props: ConvexClientProviderProps) => {
  return (
    <ClerkProvider>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        <ClerkLoaded>{props.children}</ClerkLoaded>
        <ClerkLoading>
          <Loading />
        </ClerkLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};
