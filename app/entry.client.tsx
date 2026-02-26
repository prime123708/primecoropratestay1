import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { UNSAFE_createRouter as createRouter, RouterProvider } from 'react-router';
import routes from './routes';

const router = createRouter({ routes } as any);
router.initialize();

const el = document.getElementById('root')!;
const app = (
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

if (el.innerHTML) {
  hydrateRoot(el, app);
} else {
  createRoot(el).render(app);
}
