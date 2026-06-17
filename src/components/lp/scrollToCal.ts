/**
 * The whole landing has a single action: book a diagnosis call. Every CTA
 * smooth-scrolls to the booking section (`#agenda`). When the real Cal.com
 * embed is wired you may instead trigger the Cal popup here.
 */
export function scrollToCal() {
  const el = document.getElementById("agenda");
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 16;
  window.scrollTo({ top, behavior: "smooth" });
}
