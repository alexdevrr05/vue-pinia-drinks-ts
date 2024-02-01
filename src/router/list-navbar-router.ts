export interface RouterLink {
  name: string;
  path: string;
  title: string;
}

export const routerLinks: RouterLink[] = [
  { path: '/', name: 'home', title: 'Inicio' },
  { path: '/favorites', name: 'favorites', title: 'Favoritos' },
];
