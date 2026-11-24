import { createNavigation } from 'next-intl/navigation';
import type { ComponentProps } from 'react';
import { routing } from './routing';

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);

export type AppRoute = ComponentProps<typeof Link>['href'];