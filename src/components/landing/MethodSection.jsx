import { useRef, useState } from 'react'
import { Activity, ChevronLeft, ChevronRight, Droplets, HeartPulse, Move } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton'

const goals = [
  { icon: Droplets, text: 'שחרור עומסים בשרירים' },
  { icon: Activity, text: 'שיפור זרימת דם לאזור' },
  { icon: Move, text: 'הגדלת טווחי תנועה' },
  { icon: HeartPulse, text: 'הפחתת כאב בצורה ממוקדת' },
]

const galleryImages = [
  { src: '/images/method/method-01.png', alt: 'טיפול ידני על הגב' },
  { src: '/images/method/method-02.png', alt: 'טיפול בכוסות רוח' },
  { src: '/images/method/method-03.png', alt: 'טיפול בכוסות רוח - מכשיר' },
  { src: '/images/method/method-04.png', alt: 'כוסות רוח על הגב - תוצאה' },
  { src: '/images/method/method-05.png', alt: 'טיפול בכוסות רוח - כל הגב' },
  { src: '/images/method/method-06.png', alt: 'כוסות רוח - שני שורות' },
  { src: '/images/method/method-07.png', alt: 'טיפול כוסות רוח מרובות' },
  { src: '/images/method/method-08.png', alt: 'טיפול כוסות רוח - גב שלם' },
  { src: '/images/method/method-09.png', alt: 'כוסות רוח - זווית צד' },
  { src: '/images/method/method-10.png', alt: 'טיפול כוסות רוח - מתיחה' },
  { src: '/images/method/method-11.png', alt: 'תוצאת טיפול בגב' },
  { src: '/images/method/method-12.png', alt: 'טיפול כוסות רוח - גב מלא' },
  { src: '/images/method/method-13.png', alt: 'טיפול כוסות רוח - חדר קליניקה' },
  { src: '/images/method/method-14.png', alt: 'כוסות רוח - זווית נוספת' },
  { src: '/images/method/method-15.png', alt: 'טיפול כוסות רוח - עומס בגב' },
  { src: '/images/method/method-16.png', alt: 'כוסות רוח - כתפיים וגב עליון' },
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
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700/90">
          שיטת הטיפול
        </p>
        <h2 className="mb-12 text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl">
          איך זה עובד?
        </h2>

        <div className="mb-14 space-y-8">
          <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
            הטיפול מתחיל באבחון קצר ומדויק כדי להבין מה באמת גורם לכאב.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
            לאחר מכן מתבצע טיפול ממוקד שמשלב בעיקר כוסות רוח, ולעיתים גם טכניקות נוספות בהתאם
            לצורך.
          </p>

          <div className="rounded-2xl border border-emerald-200/60 bg-gradient-to-bl from-emerald-50/80 to-transparent p-6 sm:p-8">
            <p className="text-lg font-medium leading-relaxed text-foreground sm:text-xl">
              המטרה היא לא רק להקל זמנית — אלא לשפר את המצב בצורה אמיתית ולהחזיר את הגוף לתפקוד.
            </p>
          </div>

          <div>
            <p className="mb-5 text-base font-semibold text-foreground sm:text-lg">בפועל עובדים על:</p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {goals.map((goal, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 rounded-2xl border border-border/80 bg-card/80 p-4 shadow-sm"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/12" aria-hidden>
                    <goal.icon className="h-5 w-5 text-primary" aria-hidden />
                  </div>
                  <span className="text-sm font-medium leading-snug text-foreground">{goal.text}</span>
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

        <div className="mt-16 flex justify-center">
          <WhatsAppButton text="לקביעת טיפול – שלחו הודעה" className="rounded-2xl px-10" />
        </div>
      </div>
    </section>
  )
}

export default MethodSection
