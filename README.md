# Controls Library

Profesjonalna biblioteka komponentów Angular stworzona na podstawie projektu Figma. Biblioteka zawiera reużywalne komponenty zgodne z najlepszymi praktykami Angular i Material Design.

## 🚀 Funkcje

- ✅ **Angular Library** - Gotowa do użycia w innych projektach
- ✅ **Storybook** - Dokumentacja i testowanie komponentów
- ✅ **GitHub Pages** - Automatyczny deployment dokumentacji
- ✅ **Design Tokens** - Zmienne projektowe z Figma
- ✅ **TypeScript** - Pełne wsparcie dla TypeScript
- ✅ **SCSS** - Nowoczesne style z mixinami

## 📦 Instalacja

### Wymagania

- Node.js 20.x lub nowszy
- npm 10.x lub nowszy
- Angular CLI 18.x

### Instalacja zależności

```bash
npm install
```

## 🛠️ Rozwój

### Uruchomienie Storybook lokalnie

```bash
npm run storybook
```

Storybook będzie dostępny pod adresem: http://localhost:6006

### Budowanie biblioteki

```bash
npm run build
```

### Testy

```bash
npm run test
```

### Budowanie Storybook dla produkcji

```bash
npm run build-storybook
```

## 📚 Struktura projektu

```
ControlsLiblary/
├── projects/
│   └── controls-library/          # Główna biblioteka komponentów
│       ├── src/
│       │   ├── lib/               # Komponenty Angular
│       │   │   ├── styles/        # Style i design tokens
│       │   │   │   ├── _tokens.scss    # Zmienne projektowe
│       │   │   │   ├── _mixins.scss    # Mixiny dla komponentów
│       │   │   │   └── styles.scss     # Główny plik stylów
│       │   │   └── ...
│       │   └── public-api.ts       # Eksporty publiczne
│       └── .storybook/             # Konfiguracja Storybook
├── .github/
│   └── workflows/                 # GitHub Actions
└── README.md
```

## 🎨 Design System

Biblioteka używa design tokens z projektu Figma:

### Kolory
- **Primary**: #317b74 (teal)
- **Secondary**: #6b7280 (gray)
- **Danger**: #ef4444 (red)
- **Neutral**: Skala szarości od #ffffff do #111827

### Typografia
- **Font Family**: Inter
- **Rozmiary**: 12px - 20px
- **Wagi**: 400, 500, 600, 700

### Spacing
- **Skala**: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px

### Border Radius
- **Skala**: 0px, 4px, 8px, 12px, 16px, 9999px (full)

## 📖 Użycie w projekcie

### Instalacja biblioteki

```bash
npm install @your-org/controls-library
```

### Import w module

```typescript
import { ControlsLibraryModule } from '@your-org/controls-library';

@NgModule({
  imports: [ControlsLibraryModule],
  // ...
})
export class AppModule { }
```

### Użycie komponentu

```html
<cl-button variant="primary" size="medium">
  Kliknij mnie
</cl-button>
```

## 🔧 Konfiguracja GitHub Pages

1. Przejdź do Settings → Pages w repozytorium GitHub
2. Wybierz "GitHub Actions" jako źródło
3. Po każdym push do branch `main`, Storybook zostanie automatycznie zbudowany i opublikowany

## 🤝 Współpraca

### Dodawanie nowych komponentów

1. Utwórz komponent w `projects/controls-library/src/lib/`
2. Dodaj eksport w `public-api.ts`
3. Utwórz story w Storybook
4. Dodaj testy jednostkowe
5. Zaktualizuj dokumentację

### Konwencje nazewnictwa

- **Komponenty**: PascalCase (np. `ButtonComponent`)
- **Pliki**: kebab-case (np. `button.component.ts`)
- **Selektory**: prefiks `cl-` (np. `cl-button`)
- **Klasy CSS**: prefiks `cl-` (np. `cl-button--primary`)

## 📄 Licencja

MIT License - zobacz plik [LICENSE](LICENSE) dla szczegółów.

## 🔗 Linki

- [Storybook Documentation](https://storybook.js.org/)
- [Angular Documentation](https://angular.io/)
- [Material Design](https://material.angular.dev/)
- [Figma Project](https://www.figma.com/design/XeUsoSNzx7RhusRXOAySwH/Biblioteka-2.0-PBA)

## 📞 Kontakt

Jeśli masz pytania lub sugestie, utwórz issue w repozytorium GitHub.