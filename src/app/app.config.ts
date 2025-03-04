import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import {definePreset} from '@primeng/themes';

const MyPreset = definePreset(Aura, {
  primitive: {
    noir: {
      50: "#d6d6d6",
      100: "#adadad",
      200: "#858585",
      300: "#5e5e5e",
      400: "#383838",
      500: "#1f1f1f",
      600: "#191919",
      700: "#121212",
      800: "#0c0c0c",
      900: "#060606",
      950: "#000000"
    },
  },
  semantic: {
    primary: {
      50: '{noir.50}',
      100: '{noir.100}',
      200: '{noir.200}',
      300: '{noir.300}',
      400: '{noir.400}',
      500: '{noir.500}',
      600: '{noir.600}',
      700: '{noir.700}',
      800: '{noir.800}',
      900: '{noir.900}',
      950: '{noir.950}'
    },
    colorScheme: {
      light: {
        surface: {
          0: '#ffffff',
          50: '{zinc.50}',
          100: '{zinc.100}',
          200: '{zinc.200}',
          300: '{zinc.300}',
          400: '{zinc.400}',
          500: '{zinc.500}',
          600: '{zinc.600}',
          700: '{zinc.700}',
          800: '{zinc.800}',
          900: '{zinc.900}',
          950: '{zinc.950}'
        }
      },
      dark: {
        primary: {
          50: '{slate.50}',
          100: '{slate.100}',
          200: '{slate.200}',
          300: '{slate.300}',
          400: '{slate.400}',
          500: '{slate.500}',
          600: '{slate.600}',
          700: '{slate.700}',
          800: '{slate.800}',
          900: '{slate.900}',
          950: '{slate.950}'
        },
        surface: {
          0: '#ffffff',
          50: '{slate.50}',
          100: '{slate.100}',
          200: '{slate.200}',
          300: '{slate.300}',
          400: '{slate.400}',
          500: '{slate.500}',
          600: '{slate.600}',
          700: '{slate.700}',
          800: '{slate.800}',
          900: '{slate.900}',
          950: '{slate.950}'
        }
      }
    }
  }
})

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: MyPreset,
        options: {
          darkModeSelector: '.my-app-dark'
        }
      },
    })
  ]
};
