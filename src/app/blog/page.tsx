import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
// import BrochureDownload from '@/components/BrochureDownload'; // Plaats eventueel je eigen component

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center py-24">
        <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">Komt er spoedig aan!</h1>
      </main>
      <div className="max-w-2xl mx-auto w-full px-4 mb-12">
        {/* <BrochureDownload /> */}
      </div>
      <ContactSection />
      <Footer />
    </div>
  );
} 