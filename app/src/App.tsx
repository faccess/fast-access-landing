import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Layout from './components/Layout';

import {
  Home, Solutions, Pricing, About, Resources, Contact, NotFound, FAQ,
  Privacy, Terms, Blog, BlogArticle, BlogArticle2, BlogArticle3, BlogArticle4,
  BlogArticle5, BlogArticle6, BlogArticle7, BlogArticle8, BlogArticle9,
  ServicePage,
} from './routeLoaders';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/:slug" element={<ServicePage />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/what-is-fulfillment" element={<BlogArticle />} />
            <Route path="/blog/how-to-choose-fulfillment-company" element={<BlogArticle2 />} />
            <Route path="/blog/fulfillment-cost-calculation" element={<BlogArticle3 />} />
            <Route path="/blog/returns-management-ecommerce" element={<BlogArticle4 />} />
            <Route path="/blog/dark-store-same-day-delivery" element={<BlogArticle5 />} />
            <Route path="/blog/cash-on-delivery-guide" element={<BlogArticle6 />} />
            <Route path="/blog/3pl-vs-4pl-difference" element={<BlogArticle7 />} />
            <Route path="/blog/peak-season-preparation" element={<BlogArticle8 />} />
            <Route path="/blog/inventory-management-basics" element={<BlogArticle9 />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
