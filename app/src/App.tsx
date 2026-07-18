import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Layout from './components/Layout';

const Home = lazy(() => import('./pages/Home'));
const Solutions = lazy(() => import('./pages/Solutions'));
const Pricing = lazy(() => import('./pages/Pricing'));
const About = lazy(() => import('./pages/About'));
const Resources = lazy(() => import('./pages/Resources'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogArticle = lazy(() => import('./pages/BlogArticle'));
const BlogArticle2 = lazy(() => import('./pages/BlogArticle2'));
const BlogArticle3 = lazy(() => import('./pages/BlogArticle3'));
const BlogArticle4 = lazy(() => import('./pages/BlogArticle4'));
const BlogArticle5 = lazy(() => import('./pages/BlogArticle5'));
const BlogArticle6 = lazy(() => import('./pages/BlogArticle6'));
const BlogArticle7 = lazy(() => import('./pages/BlogArticle7'));
const BlogArticle8 = lazy(() => import('./pages/BlogArticle8'));
const BlogArticle9 = lazy(() => import('./pages/BlogArticle9'));

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
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
