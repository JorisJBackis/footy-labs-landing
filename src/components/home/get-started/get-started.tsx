import styles from "@/components/home/get-started/get-started.module.scss";
import {Button} from "@/components/ui/button";

export function GetStarted() {
  return (
      <section className={`container overflow-hidden ${styles.started}`}>
        <h3>Footy Labs - a platform for everyone involved in football</h3>
        <div className={styles.started__content}>
          <div className={styles.started__content__roadmap}>
            <div>
              <div>
                <span className="font-bold">1</span>
                <span className="h-full w-0 border"></span>
              </div>
              <div>
                <h6>Book a call</h6>
                <p>Book a call with us. We'll set you up and provide free trial account according to your needs.</p>
              </div>
            </div>
            <div>
              <div>
                <p className="font-bold">2</p>
                <span className="h-full w-0 border"></span>
              </div>
              <div>
                <h6>Find yourself</h6>
                <p>From clubs to individual players, onboard effortlessly with automatically connected data.</p>
              </div>
            </div>
            <div>
              <div>
                <p className="font-bold">3</p>
                <span className="h-full w-0 border"></span>
              </div>
              <div>
                <h6>Dedicated Onboarding</h6>
                <p>Our team will guide you through the dashboard, helping you analyze, scout, and connect effortlessly.</p>
                <Button>Get Started</Button>
              </div>
            </div>
          </div>
          {/* image */}
          <div className="lg:hidden">

          </div>
        </div>
      </section>
  )
}