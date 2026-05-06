import { useRef, useState } from 'react'
import { Check, ChevronLeft, ChevronRight } from 'lucide-react'

const goals = [
  { text: 'שיפור זרימת דם לאזור' },
  { text: 'שחרור עומסים בשרירים' },
  { text: 'הגדלת טווחי תנועה' },
  { text: 'הפחתת כאב בצורה ממוקדת' },
]

const galleryImages = [
  { src: '/images/method/method-01.png', alt: 'כוסות רוח לאורך כל הגב' },
  { src: '/images/method/method-02.png', alt: 'כוסות רוח בשכמות ובגב העליון' },
  { src: '/images/method/method-03.png', alt: 'כוסות רוח לאורך הגב בזווית צד' },
  { src: '/images/method/method-04.png', alt: 'טיפול כוסות רוח בשילוב אלקטרודות' },
  { src: '/images/method/method-05.png', alt: 'תוצאה לאחר טיפול כוסות רוח בישיבה' },
  { src: '/images/method/method-06.png', alt: 'כוסות רוח באזור הרגל' },
  { src: '/images/method/method-07.png', alt: 'כוסות רוח לכל אורך הגב במיטה' },
  { src: '/images/method/method-08.png', alt: 'כוסות רוח לצד הגב והמותן' },
  { src: '/images/method/method-09.png', alt: 'כוסות רוח בקליניקה מזווית רחבה' },
]

const MethodSection = () => {
  const galleryRef = useRef(null)
  const [activeImage, setActiveImage] = useState(0)

  const scrollGallery = (direction) => {
    if (!galleryRef.current) return

    const card = galleryRef.current.querySelector('[data-gallery-card]')
    const cardWidth = card ? card.getBoundingClientRect().width : 280
    const gap = 12
    const step = cardWidth + gap
    const maxIndex = galleryImages.length - 1

    const nextIndex =
      direction === 'next' ? Math.min(activeImage + 1, maxIndex) : Math.max(activeImage - 1, 0)

    galleryRef.current.scrollTo({
      left: nextIndex * step,
      behavior: 'smooth',
    })
    setActiveImage(nextIndex)
  }

  return (
    <section id="services" className="scroll-mt-20 px-5 py-24 md:py-32" dir="rtl">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-base font-semibold uppercase tracking-[0.18em] text-emerald-700/90 sm:text-lg">
          שיטת הטיפול
        </p>
        <h2 className="mb-12 text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl">
          איך זה עובד
        </h2>

        <div className="mb-14 space-y-8">
          <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
            הטיפול מתחיל באבחון קצר ומדויק — כדי להבין מה באמת גורם לכאב, איפה נמצא העומס ואיך הגוף
            מגיב.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
            לאחר מכן מתבצע טיפול ממוקד, שמשלב בעיקר כוסות רוח, ולעיתים גם הקזות דם וטכניקות
            נוספות, בהתאם למצב הגוף ולתגובה בזמן הטיפול
          </p>

          <div className="rounded-2xl border border-emerald-200/60 bg-gradient-to-bl from-emerald-50/80 to-transparent p-6 sm:p-8">
            <p className="text-lg font-medium leading-relaxed text-foreground sm:text-xl">
              המטרה היא לא רק להקל זמנית — אלא לשפר את המצב בצורה אמיתית ולהחזיר את הגוף לתפקוד.
            </p>
          </div>

          <div>
            <p className="mb-5 text-base font-semibold text-foreground sm:text-lg">
              בפועל הטיפול מכוון ל :
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {goals.map((goal, idx) => (
                <div
                  key={idx}
                  className="flex min-h-[88px] items-center justify-between gap-4 rounded-[24px] border border-slate-200/90 bg-slate-50/90 px-5 py-4 shadow-[0_10px_30px_-24px_rgba(15,23,42,0.28)] ring-1 ring-slate-100/80"
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-emerald-200/80 bg-white/80 text-emerald-700 shadow-sm"
                    aria-hidden
                  >
                    <Check className="h-4 w-4" strokeWidth={2.25} aria-hidden />
                  </div>
                  <span className="flex-1 text-center text-base font-medium leading-snug text-foreground">
                    {goal.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
            הטיפול לעיתים אינטנסיבי — אבל מדויק ומכוון תוצאה.
          </p>
        </div>

        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-semibold text-foreground">מהקליניקה</p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollGallery('prev')}
              disabled={activeImage === 0}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="תמונה קודמת"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollGallery('next')}
              disabled={activeImage === galleryImages.length - 1}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="תמונה הבאה"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={galleryRef}
          role="region"
          aria-label="גלריית תמונות מהקליניקה"
          className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              data-gallery-card
              className="aspect-[3/4] min-w-[72%] snap-start overflow-hidden rounded-2xl shadow-md ring-1 ring-slate-200/80 sm:min-w-[46%] md:min-w-[32%] lg:min-w-[24%]"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MethodSection
