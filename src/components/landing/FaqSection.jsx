import { useId, useState } from 'react'
import { Minus, Plus } from 'lucide-react'

const faqItems = [
  {
    question: 'למי הטיפול מתאים?',
    answer:
      'הטיפול מתאים לאנשים שסובלים מכאבי גב, צוואר, כתפיים, כאבי ראש, עומס שרירי, הקרנות לרגל או ליד, ופציעות ספורט. בתחילת הטיפול מתבצע אבחון קצר כדי להבין אם הטיפול מתאים למצב שלך.',
  },
  {
    question: 'האם הטיפול כואב?',
    answer:
      'הטיפול יכול להיות מורגש ולעיתים אינטנסיבי, אבל הוא מתבצע בצורה מבוקרת ובהתאם לתגובה של הגוף. המטרה היא לא ״לסבול״, אלא לעבוד בצורה מדויקת על מקור העומס.',
  },
  {
    question: 'האם נשארים סימנים מכוסות רוח?',
    answer:
      'כן, לעיתים נשארים סימנים עגולים על העור. ברוב המקרים הם חולפים תוך כמה ימים. הסימנים הם תגובה טבעית של העור והרקמות לטיפול.',
  },
  {
    question: 'כמה טיפולים צריך?',
    answer:
      'זה תלוי במצב. יש אנשים שמרגישים שינוי כבר אחרי טיפול ראשון, ויש מצבים שדורשים סדרת טיפולים כדי לייצר שינוי יציב יותר. אחרי האבחון ניתן להבין טוב יותר מה הכיוון.',
  },
  {
    question: 'האם הטיפול מתאים גם לספורטאים?',
    answer:
      'כן. הטיפול מתאים גם לספורטאים ולאנשים פעילים שסובלים מעומסים, הגבלת תנועה, כאבי כתף, גב, צוואר או עומס ברגליים. המטרה היא לעזור לגוף לזוז טוב יותר ולחזור לפעילות בצורה בטוחה יותר.',
  },
  {
    question: 'האם זה מסאז׳?',
    answer:
      'לא. זה לא טיפול עיסוי כללי. הטיפול ממוקד בכאב, עומס ותנועה, ומשלב בעיקר כוסות רוח וטווינא לפי אזור הכאב והתגובה של הגוף בזמן הטיפול.',
  },
  {
    question: 'מה ללבוש לטיפול?',
    answer:
      'מומלץ להגיע עם בגדים נוחים. לטיפול בגב, צוואר או כתפיים עדיף להגיע עם גופייה או בגד שמאפשר גישה נוחה לאזור. לטיפול ברגליים מומלץ להביא מכנס קצר.',
  },
  {
    question: 'האם אפשר להגיע גם בלי לדעת בדיוק מה מקור הכאב?',
    answer:
      'כן. חלק מהמטרה של האבחון הוא להבין איפה נמצא העומס ומה יכול להיות קשור לכאב. לא חייבים להגיע עם אבחנה רפואית מדויקת, אבל אם יש בדיקות או צילומים רלוונטיים, כדאי להביא אותם.',
  },
  {
    question: 'האם הטיפול כולל דיקור או הקזת דם?',
    answer:
      'הטיפול מתבסס בעיקר על כוסות רוח וטווינא. במידת הצורך ניתן לשלב טכניקות נוספות, בהתאם לאבחון, למצב המטופל ולהתאמה האישית.',
  },
]

const FaqSection = () => {
  const baseId = useId()
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section id="faq" className="scroll-mt-20 border-t border-slate-200/80 bg-white px-5 py-24 md:py-32" dir="rtl">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-10 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
          שאלות נפוצות
        </h2>

        <div className="divide-y divide-slate-200/90 rounded-2xl border border-slate-200/90 bg-slate-50/40">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index
            const panelId = `${baseId}-panel-${index}`
            const triggerId = `${baseId}-trigger-${index}`

            return (
              <div key={item.question} className="bg-white/80 first:rounded-t-2xl last:rounded-b-2xl">
                <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                  <button
                    type="button"
                    id={triggerId}
                    className="flex w-full items-center gap-3 px-4 py-4 text-start transition-colors hover:bg-slate-50/90 sm:gap-4 sm:px-5 sm:py-5"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(index)}
                  >
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200/90 bg-white text-slate-600 shadow-sm"
                      aria-hidden
                    >
                      {isOpen ? (
                        <Minus className="h-4 w-4" strokeWidth={2.5} />
                      ) : (
                        <Plus className="h-4 w-4" strokeWidth={2.5} />
                      )}
                    </span>
                    <span className="min-w-0 flex-1 leading-snug">{item.question}</span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  hidden={!isOpen}
                  className={isOpen ? 'border-t border-slate-100/90' : ''}
                >
                  <p className="px-4 pb-5 ps-[3.25rem] text-base leading-relaxed text-slate-600 sm:px-5 sm:pb-6 sm:ps-[4.25rem] sm:text-lg">
                    {item.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FaqSection
