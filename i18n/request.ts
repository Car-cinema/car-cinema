import { cookies } from 'next/headers';
import { getRequestConfig } from 'next-intl/server';

const locales = ['ka', 'en'];

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get('NEXT_LOCALE')?.value;

  const locale = cookieLocale && locales.includes(cookieLocale)
    ? cookieLocale
    : 'ka';

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});