import type { AstroComponentFactory } from "astro/runtime/server/index.js";
import Navbar from "../components/blocks/Navbar.astro";
import Hero from "../components/blocks/Hero.astro";
import Features from "../components/blocks/Features.astro";
import CTA from "../components/blocks/CTA.astro";
import Pricing from "../components/blocks/Pricing.astro";
import Testimonials from "../components/blocks/Testimonials.astro";
import FAQ from "../components/blocks/FAQ.astro";
import Footer from "../components/blocks/Footer.astro";

export interface BlockComponent {
  default: AstroComponentFactory;
}

export const blockRegistry: Record<string, BlockComponent> = {
  Navbar: { default: Navbar },
  Hero: { default: Hero },
  Features: { default: Features },
  CTA: { default: CTA },
  Pricing: { default: Pricing },
  Testimonials: { default: Testimonials },
  FAQ: { default: FAQ },
  Footer: { default: Footer },
};

export function getBlockComponent(type: string): BlockComponent | undefined {
  return blockRegistry[type];
}

export function isValidBlockType(type: string): boolean {
  return type in blockRegistry;
}
