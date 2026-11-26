export interface Testimonial {
  id: number;
  name: string;
  gym: string;
  text: string;
  rating: number;
  /**
   * Označava izmišljen (privremen) utisak. Takvi se NE prikazuju na produkciji
   * — vidi `publishableTestimonials` u `data/testimonials.ts`.
   */
  placeholder?: boolean;
}
