export const publicRoutes = [
  '/login',
  '/sign-up',
  '/reset-password',
] as const;

export const routes = [...publicRoutes] as const;

export type Route = (typeof routes)[number];