import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    // Unlearn.ai exact color matching
    ['btn-primary', 'px-6 py-3 rounded-lg bg-unlearn-blue text-white font-semibold hover:bg-unlearn-blue-dark transition-all duration-200 transform hover:scale-105'],
    ['btn-secondary', 'px-6 py-3 rounded-lg border border-gray-300 text-gray-800 font-medium hover:bg-gray-50 transition-all duration-200'],
    ['card-clean', 'bg-white rounded-xl shadow-sm border border-gray-200'],
    ['text-gradient-primary', 'bg-gradient-to-r from-unlearn-blue to-purple-600 bg-clip-text text-transparent'],
    ['text-gradient-accent', 'bg-gradient-to-r from-unlearn-blue to-cyan-500 bg-clip-text text-transparent'],
  ],
  
  theme: {
    colors: {
      // Unlearn.ai exact color palette
      'unlearn-blue': '#2D4FFF',
      'unlearn-blue-dark': '#1A3AE6',
      'unlearn-blue-light': '#5A72FF',
      'unlearn-purple': '#2D1B69',
      'unlearn-purple-dark': '#1A0F3A',
      'unlearn-purple-darker': '#0F0621',
      'primary': {
        50: '#f0f4ff',
        100: '#e0e7ff',
        200: '#c7d2fe',
        300: '#a5b4fc',
        400: '#818cf8',
        500: '#6366f1',
        600: '#2D4FFF', // Unlearn exact blue
        700: '#1A3AE6',
        800: '#1e1b4b',
        900: '#312e81',
      },
      'accent': {
        50: '#f0f9ff',
        100: '#e0f2fe',
        200: '#bae6fd',
        300: '#7dd3fc',
        400: '#38bdf8',
        500: '#0ea5e9',
        600: '#0284c7',
        700: '#0369a1',
        800: '#075985',
        900: '#0c4a6e',
      },
    },
    fontFamily: {
      'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      'mono': ['JetBrains Mono', 'Monaco', 'Consolas', 'monospace'],
    },
    fontWeight: {
      'normal': '400',
      'medium': '500',
      'semibold': '600',
      'bold': '700',
      'extrabold': '800',
    },
    animation: {
      'fade-in': 'fadeIn 0.6s ease-out',
      'slide-up': 'slideUp 0.6s ease-out',
      'scale-in': 'scaleIn 0.4s ease-out',
      'pulse-slow': 'pulse 3s ease-in-out infinite',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0', transform: 'translateY(10px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
      slideUp: {
        '0%': { opacity: '0', transform: 'translateY(20px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
      scaleIn: {
        '0%': { opacity: '0', transform: 'scale(0.95)' },
        '100%': { opacity: '1', transform: 'scale(1)' },
      },
    },
  },
  
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
      collections: {
        carbon: () => import('@iconify-json/carbon/icons.json').then(i => i.default),
        lucide: () => import('@iconify-json/lucide/icons.json').then(i => i.default),
      },
    }),
    presetTypography({
      cssExtend: {
        'h1,h2,h3,h4,h5,h6': {
          'font-weight': '600',
          'letter-spacing': '-0.025em',
        },
        'h1': {
          'font-size': '2.5rem',
          'line-height': '1.2',
          'font-weight': '700',
        },
        'h2': {
          'font-size': '1.875rem',
          'line-height': '1.3',
          'font-weight': '600',
        },
      },
    }),
    presetWebFonts({
      fonts: {
        sans: {
          name: 'Inter',
          weights: ['400', '500', '600', '700', '800'],
        },
        mono: {
          name: 'JetBrains Mono',
          weights: ['400', '500', '600'],
        },
      },
    }),
  ],
  
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  
  safelist: [
    'text-primary-600',
    'text-primary-700', 
    'text-primary-500',
    'text-gray-800',
    'text-gray-700',
    'text-gray-600',
    'bg-primary-600',
    'bg-primary-50',
    'bg-primary-100',
    'bg-unlearn-blue',
    'bg-unlearn-blue-dark',
    'border-primary-200',
    'border-primary-300',
    'border-gray-200',
    'border-unlearn-blue',
    'bg-gray-50',
    'from-primary-600',
    'to-primary-700',
    'from-unlearn-blue',
    'to-cyan-500',
    'animate-fade-in',
    'animate-slide-up',
    'animate-scale-in',
    'text-red-600',
    'text-green-600',
    'text-blue-600',
    'text-orange-600',
    'text-purple-600',
  ],
})