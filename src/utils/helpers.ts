const getCurrentRoute = (pathname: string, defaultPath: string): string => {
  let current = defaultPath;
  const slicedPathname = pathname.split('/').slice(-2);
  if (slicedPathname[1]) {
    current = slicedPathname[1];
  } else if (slicedPathname[0]) {
    current = slicedPathname[0];
  }
  return current;
};

const currentView = window.location.href
  .replace(new RegExp(`${window.location.origin}/|/$`, 'g'), '')
  .trim()
  .split('/')[1];

export { getCurrentRoute, currentView };
