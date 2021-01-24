const routes = {
  home: '/',
  quiz: (id: number): string => `/${id}`,
  results: '/results',
};

export default routes;
