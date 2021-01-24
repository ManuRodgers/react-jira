import React, { ReactNode } from 'react';

import { AuthProvider } from './AuthProvider';

interface AppProvidersProps {
  children?: ReactNode;
}

export const AppProviders: React.FunctionComponent = ({
  children,
}: AppProvidersProps) => <AuthProvider>{children}</AuthProvider>;
