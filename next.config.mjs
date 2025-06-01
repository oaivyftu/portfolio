/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';
// @ts-check
import withPlaiceholder from "@plaiceholder/next";

const nextConfig = {};

const withNextIntl = createNextIntlPlugin();
export default withPlaiceholder(withNextIntl(nextConfig));