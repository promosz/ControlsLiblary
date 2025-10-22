# Contributing to Controls Library

Dziękujemy za zainteresowanie współpracą nad Controls Library! Ten dokument zawiera wytyczne dotyczące dodawania nowych komponentów i współpracy nad projektem.

## 🚀 Rozpoczęcie pracy

### Wymagania

- Node.js 20.x lub nowszy
- npm 10.x lub nowszy
- Angular CLI 18.x
- Git

### Setup lokalnego środowiska

1. Sklonuj repozytorium:
```bash
git clone https://github.com/promosz/ControlsLiblary.git
cd ControlsLiblary
```

2. Zainstaluj zależności:
```bash
npm install
```

3. Uruchom Storybook:
```bash
npm run storybook
```

## 📝 Dodawanie nowych komponentów

### 1. Struktura komponentu

Każdy komponent powinien mieć następującą strukturę:

```
src/lib/components/button/
├── button.component.ts
├── button.component.html
├── button.component.scss
├── button.component.spec.ts
└── button.stories.ts
```

### 2. Tworzenie komponentu

```bash
ng generate component components/button --project=controls-library
```

### 3. Konwencje nazewnictwa

#### Komponenty
- **Nazwa klasy**: PascalCase z sufiksem `Component`
- **Selektor**: `cl-` + kebab-case
- **Pliki**: kebab-case z odpowiednim sufiksem

```typescript
@Component({
  selector: 'cl-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  // ...
}
```

#### Właściwości (Inputs)
- **Nazwa**: camelCase
- **Typ**: zawsze zdefiniowany
- **Dokumentacja**: JSDoc komentarze

```typescript
/**
 * Wariant przycisku
 */
@Input() variant: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'invisible' = 'primary';

/**
 * Rozmiar przycisku
 */
@Input() size: 'small' | 'medium' | 'large' = 'medium';

/**
 * Czy przycisk jest wyłączony
 */
@Input() disabled: boolean = false;
```

#### Wydarzenia (Outputs)
- **Nazwa**: camelCase z prefiksem `on`
- **Typ**: EventEmitter z odpowiednim typem

```typescript
/**
 * Wydarzenie kliknięcia
 */
@Output() onClick = new EventEmitter<MouseEvent>();
```

### 4. Style komponentu

#### Używanie design tokens

```scss
@import '../../styles/styles';

.cl-button {
  @include button-base;
  @include button-primary;
  @include button-size(var(--cl-space-2), var(--cl-space-4), var(--cl-text-sm), 32px);
  
  &--secondary {
    @include button-secondary;
  }
  
  &--large {
    @include button-size(var(--cl-space-3), var(--cl-space-6), var(--cl-text-base), 40px);
  }
}
```

#### Klasy CSS
- **Główna klasa**: `.cl-{component-name}`
- **Modyfikatory**: `.cl-{component-name}--{modifier}`
- **Stany**: `.cl-{component-name}.is-{state}`

### 5. Testy jednostkowe

Każdy komponent musi mieć testy jednostkowe:

```typescript
describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ButtonComponent]
    });
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit onClick event when clicked', () => {
    spyOn(component.onClick, 'emit');
    const button = fixture.debugElement.query(By.css('.cl-button'));
    button.triggerEventHandler('click', null);
    expect(component.onClick.emit).toHaveBeenCalled();
  });
});
```

### 6. Storybook Stories

Utwórz plik `.stories.ts` dla każdego komponentu:

```typescript
import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'danger', 'invisible'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    children: 'Button',
  },
};
```

### 7. Eksport w public-api.ts

Dodaj komponent do eksportów:

```typescript
export * from './lib/components/button/button.component';
```

## 🧪 Testowanie

### Uruchomienie testów

```bash
npm run test
```

### Uruchomienie testów w trybie watch

```bash
npm run test:watch
```

### Pokrycie testów

```bash
npm run test:coverage
```

## 📚 Dokumentacja

### Uruchomienie Storybook

```bash
npm run storybook
```

### Budowanie Storybook

```bash
npm run build-storybook
```

## 🔄 Workflow Git

### Branch naming

- `feature/component-name` - nowe komponenty
- `fix/component-name` - poprawki błędów
- `docs/update-readme` - aktualizacja dokumentacji
- `refactor/component-name` - refaktoryzacja

### Commit messages

Używaj konwencjonalnych commitów:

```
feat(button): add new primary variant
fix(button): resolve focus ring issue
docs(readme): update installation instructions
refactor(button): simplify size logic
```

### Pull Request

1. Utwórz branch z odpowiednią nazwą
2. Wprowadź zmiany
3. Dodaj testy
4. Zaktualizuj dokumentację
5. Utwórz Pull Request z opisem zmian

## 🎨 Design Guidelines

### Zgodność z Figma

- Wszystkie komponenty muszą być zgodne z projektem Figma
- Używaj design tokens zamiast hardkodowanych wartości
- Zachowaj proporcje i spacing zgodnie z designem

### Accessibility

- Dodaj odpowiednie ARIA atrybuty
- Zapewnij keyboard navigation
- Używaj semantycznych elementów HTML
- Testuj z screen readerami

### Responsive Design

- Komponenty muszą działać na wszystkich rozmiarach ekranów
- Używaj mixinów responsive z `_mixins.scss`
- Testuj na różnych urządzeniach

## 🐛 Zgłaszanie błędów

Używaj szablonu issue z następującymi informacjami:

- **Opis problemu**: Krótki opis błędu
- **Kroki reprodukcji**: Jak odtworzyć błąd
- **Oczekiwane zachowanie**: Co powinno się stać
- **Rzeczywiste zachowanie**: Co się dzieje
- **Środowisko**: Wersja Angular, przeglądarka, OS
- **Screenshots**: Jeśli dotyczy

## 💡 Sugestie funkcji

Przed dodaniem nowej funkcji:

1. Sprawdź czy nie ma już podobnej funkcji
2. Utwórz issue z opisem propozycji
3. Poczekaj na feedback od maintainerów
4. Po akceptacji, utwórz Pull Request

## 📞 Pomoc

Jeśli masz pytania:

- Utwórz issue w repozytorium
- Sprawdź istniejące issues i PR
- Przeczytaj dokumentację Angular i Storybook

Dziękujemy za współpracę! 🎉
