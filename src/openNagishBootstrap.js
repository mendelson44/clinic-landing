import { site } from './config/site'

/** Must run before importing `open-nagish` (the bundle auto-inits on load). */
window.OpenNagishConfig = {
  lang: 'he',
  position: 'bottom-left',
  bottomOffset: 8,
  mobileBottomOffset: 96,
  /** הצהרה רק מתוך הווידג'ט (תפריט → הצהרת נגישות), לא כסקשן בעמוד */
  statementData: {
    orgName: site.businessName,
    orgEmail: site.accessibilityEmail,
    orgPhone: site.accessibilityPhone,
    coordinatorName: 'בן מנדלסון',
    lastAuditDate: '2026-05-12',
  },
}
