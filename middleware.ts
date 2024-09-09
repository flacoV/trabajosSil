import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define las rutas públicas
const isPublicRoute = createRouteMatcher(['/', '/sign-in(.*)', '/sign-up(.*)', '/api/webhook/clerk']);

export default clerkMiddleware((auth, request) => {
  // Protege todas las rutas que no sean públicas
  if (!isPublicRoute(request)) {
    auth().protect();
  }
});

export const config = {
  matcher: [
    // Excluir archivos estáticos e internos de Next.js
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Siempre ejecutar para las rutas API y TRPC
    '/(api|trpc)(.*)',
  ],
};
