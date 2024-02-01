export interface RouterLink {
  name: string;
  path: string;
  title: string;
}

export const routerLinks: RouterLink[] = [
  { path: '/', name: 'home', title: 'Home' },
  { path: '/favorites', name: 'favorites', title: 'Favorites' },
];
