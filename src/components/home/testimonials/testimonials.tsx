import testimonials from "@/components/home/testimonials/testimonials.module.scss";
import bento from "@/components/home/bento/bento.module.scss";
import Testimonial05 from "@/components/home/testimonials/testimonials-slider";

export function Testimonials() {
  return (
      <section className={`container overflow-hidden ${testimonials.testimonials}`}>
        <Testimonial05/>
      </section>
  )
}