import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Variable', 'system-ui', '-apple-system', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#44403c',
            '--tw-prose-headings': '#1c1917',
            '--tw-prose-links': '#0f766e',
            '--tw-prose-bold': '#1c1917',
            '--tw-prose-counters': '#78716c',
            '--tw-prose-bullets': '#78716c',
            '--tw-prose-hr': '#e7e5e4',
            '--tw-prose-quotes': '#44403c',
            '--tw-prose-quote-borders': '#d6d3d1',
            '--tw-prose-captions': '#78716c',
            '--tw-prose-code': '#1c1917',
            '--tw-prose-pre-code': '#e7e5e4',
            '--tw-prose-pre-bg': '#292524',
            '--tw-prose-th-borders': '#d6d3d1',
            '--tw-prose-td-borders': '#e7e5e4',
            // remove backtick wrapping on inline code
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            // inline code pill
            'code': {
              backgroundColor: '#f5f5f4',
              borderRadius: '0.25rem',
              paddingLeft: '0.35em',
              paddingRight: '0.35em',
              paddingTop: '0.15em',
              paddingBottom: '0.15em',
              fontWeight: '400',
            },
            // link style — underline on hover only
            'a': {
              textDecoration: 'none',
              borderBottom: '1px solid #99f6e4',
              '&:hover': {
                borderBottomColor: '#0f766e',
              },
            },
          },
        },
      },
    },
  },
  plugins: [typography],
}
