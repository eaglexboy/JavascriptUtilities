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
}

// Extensions for NodeList
interface NodeList {
  addClass(classToAdd: string): void;
  removeClass(classToRemove: string): void;
  trigger(event: string): void;
  on(event: string, callback: (event: Event) => void): void;
  enable(): void;
}

// Extension for String
interface String {
  equalsIgnoreCase(compareString: string): boolean;
}

