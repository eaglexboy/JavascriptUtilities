// Extensions for Array
interface Array<T> {
  includesIgnoreCase(compareString: string): boolean;
}

// Extensions for Element
interface Element {
  addClass(classToAdd: string): void;
  removeClass(classToRemove: string): void;
  trigger(event: string): void;
  on(event: string, callback: (event: Event) => void): void;
  enable(): void;
  disable(): void;
  isDisabled(): boolean;
  isVisible(): boolean;
  hide: () => void;
  show: () => void;
}

// Extensions for NodeList
interface NodeList {
  addClass(classToAdd: string): void;
  removeClass(classToRemove: string): void;
  trigger(event: string): void;
  on(event: string, callback: (event: Event) => void): void;
  enable(): void;
  hide: () => void;
  show: () => void;
}

// Extension for String
interface String {
  equalsIgnoreCase(compareString: string): boolean;
}

