import PageHeader from '../components/PageHeader';
import usePageMeta from '../hooks/usePageMeta';
import { useT } from '../i18n/I18nContext';
import { FAQS } from '../content/faq';
import { claims } from '../content/claims';

/** الأسئلة الشائعة — general FAQ page (footer link). */
export default function FAQ() {
  usePageMeta(
    { title: 'الأسئلة الشائعة | فاست أكسس', desc: 'أجوبة مباشرة على أكثر أسئلة التجار: الربط، التسعير، سرعة التجهيز، التغطية، المرتجعات، والبداية مع فاست أكسس.' },
    { title: 'FAQ | Fast Access', desc: 'Straight answers to merchants\' top questions: integration, pricing, prep speed, coverage, returns, and getting started.' }
  );
  const { locale } = useT();
  const isAr = locale === 'ar';

  const faqs = FAQS.map((f) => ({ q: f.q[locale], a: f.a[locale] }));

  return (
    <main>
      <PageHeader
        chip={isAr ? 'الأسئلة الشائعة' : 'FAQ'}
        title={isAr ? (<>أسئلة تدور ببالك؟ <span className="text-fa-orange-soda">جاوبناها.</span></>) : 'Questions on your mind? Answered.'}
        sub={isAr ? `أكثر اللي يسألنا عنه التجار قبل ما يخلّونها علينا. ما لقيت سؤالك؟ كلمنا وبنرد خلال ${claims.quoteTurnaround.ar}.` : `What merchants ask us most before handing it over. Can't find yours? Reach out and we'll reply within ${claims.quoteTurnaround.en}.`}
        bg="/assets/hero-resources.webp"
      />
      <section className="py-16 lg:py-24 bg-fa-classic-chalk">
        <div className="container-main max-w-[820px]">
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="group rounded-2xl bg-white border border-fa-liberty-blue/10 px-6 py-5 open:shadow-lg open:shadow-fa-liberty-blue/5 transition-shadow"
              >
                <summary className="font-display cursor-pointer list-none flex items-center justify-between gap-4 text-[17px] lg:text-[19px] font-bold text-fa-liberty-blue">
                  {f.q}
                  <span className="shrink-0 text-fa-orange-soda transition-transform duration-200 group-open:rotate-45 text-[22px] leading-none" aria-hidden>+</span>
                </summary>
                <p className="font-body mt-3 text-[15px] leading-[1.75] text-fa-ink-muted">{f.a}</p>
              </details>
            ))}
          </div>
          <p className="font-body mt-10 text-center text-[15px] text-fa-ink-muted">
            {isAr ? 'سؤالك مو هنا؟ ' : 'Your question isn\'t here? '}
            <a href="https://wa.me/966920032768" target="_blank" rel="noopener noreferrer" className="font-semibold text-fa-orange-soda hover:underline">
              {isAr ? 'كلمنا واتساب' : 'WhatsApp us'}
            </a>
            {isAr ? ' أو ' : ' or '}
            <a href="/contact" className="font-semibold text-fa-orange-soda hover:underline">
              {isAr ? 'اطلب عرض سعر' : 'request a quote'}
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
