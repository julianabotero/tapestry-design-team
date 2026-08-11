import { InteractiveDots } from "@/components/interactive-dots/InteractiveDots";

const FOOTER_BG = "#1c3240";

export function SiteFooter() {
  return (
    <footer className="site-footer" style={{ backgroundColor: FOOTER_BG }}>
      <InteractiveDots />
      <div className="site-footer__brand">
        <div className="site-footer__lockup-shell">
          <p className="site-footer__lockup" aria-label="tapestry design team">
            <span className="site-footer__wordmark-wrap">
              <img
                src="/brand/tapestry-footer-wordmark.svg"
                alt=""
                className="site-footer__wordmark"
                aria-hidden
              />
            </span>
            <span className="site-footer__design-team">design team</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
