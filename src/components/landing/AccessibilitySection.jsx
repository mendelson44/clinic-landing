import { site } from '../../config/site'

const AccessibilitySection = () => {
  const hasContact = Boolean(site.accessibilityEmail || site.accessibilityPhone)

  return (
    <section
      id="accessibility"
      className="scroll-mt-20 border-t border-slate-200/90 bg-slate-50 px-5 py-16 md:py-20"
      dir="rtl"
      aria-labelledby="accessibility-heading"
    >
      <div className="mx-auto max-w-3xl text-pretty">
        <h2 id="accessibility-heading" className="mb-6 text-2xl font-bold text-slate-900 sm:text-3xl">
          הצהרת נגישות
        </h2>
        <div className="space-y-4 text-base leading-relaxed text-slate-700">
          <p>
            {site.businessName} משקיעה מאמצים להנגיש את האתר לאנשים עם מוגבלויות, בהתאם להוראות חוק
            שוויון זכויות לאנשים עם מוגבלות והתאמות הנגישות לשירות, ולתקן הישראלי ת״י 5568 (מבוסס
            WCAG 2.0 רמת AA) במידה הניתנת לאתר תדמיתי זה.
          </p>
          <p>
            האתר נבנה תוך התאמות כגון: מבנה כותרות, ניגודיות צבעים בסיסית, תיאורים חלופיים לתמונות
            במידת האפשר, מיקוד מקלדת נראה בקישורים וכפתורים, וכיוון RTL לעברית.
          </p>
          <p>
            ייתכן שחלקים באתר עדיין אינם נגישים במלואם או שטרם הושלמה ההנגשה — נשמח לקבל פנייה
            ולסייע בדרכים חלופיות (טלפון, וואטסאפ, דוא״ל) לפי הצורך.
          </p>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="font-semibold text-slate-900">רכז/ת נגישות ופניות בנושא נגישות</p>
            {hasContact ? (
              <ul className="mt-3 list-inside list-disc space-y-1 text-slate-700">
                {site.accessibilityEmail ? (
                  <li>
                    דוא״ל:{' '}
                    <a
                      className="font-medium text-emerald-700 underline underline-offset-2"
                      href={`mailto:${site.accessibilityEmail}`}
                    >
                      {site.accessibilityEmail}
                    </a>
                  </li>
                ) : null}
                {site.accessibilityPhone ? <li>טלפון: {site.accessibilityPhone}</li> : null}
              </ul>
            ) : (
              <p className="mt-2 text-slate-600">
                יש לעדכן כתובת דוא״ל או טלפון בקובץ הסביבה (<code className="rounded bg-slate-100 px-1 text-sm">.env</code>) לפני
                עלייה לאוויר: <code className="rounded bg-slate-100 px-1 text-sm">VITE_ACCESSIBILITY_EMAIL</code>,{' '}
                <code className="rounded bg-slate-100 px-1 text-sm">VITE_ACCESSIBILITY_PHONE</code>.
              </p>
            )}
          </div>
          <p className="text-sm text-slate-500">
            עדכון אחרון: אפריל 2026. ההצהרה תעודכן מעת לעת בהתאם לשינויים באתר ובהנגשה.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AccessibilitySection
