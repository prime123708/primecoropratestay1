import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Navigation } from '@/components/Navigation/Navigation';
import { Footer } from '@/components/Footer/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton/WhatsAppButton';
import { CallingButton } from '@/components/CallingButton/CallingButton';
import { PageAnimations } from '@/components/PageAnimations/PageAnimations';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 30,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

export default function RootLayout({children}) {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
      <div className="pt-16 md:pt-20 min-h-screen bg-white">{children}</div>
      <Footer />
      <WhatsAppButton />
      <CallingButton />
      <PageAnimations />
    </QueryClientProvider>
  );
}
