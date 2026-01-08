import type StackElement from "./StackElement";

export default class Stack {
  elements: Array<StackElement>;
  current_element_index: number;

  constructor(pages: Array<StackElement> = [], current_page_index: number = 0) {
    this.elements = pages;
    this.current_element_index = current_page_index;
  }

  public setElement(element: StackElement, index: number) {
    if (this.elements.length > index) {
      this.elements[index] = element;
    } else {
      this.elements.push(element);
    }
  }

  public setCurrentElement(element: StackElement) {
    this.setElement(element, this.current_element_index);
  }

  public getElement(index: number): StackElement {
    if (this.elements.length > index) {
      return this.elements.at(index)!;
    } else {
      throw new Error(`Index '${index}' is out of bounds.`);
    }
  }

  public getCurrentElement(): StackElement {
    return this.getElement(this.current_element_index);
  }

  public getElementOrUndefined(index: number): StackElement | undefined {
    return this.elements.at(index);
  }

  public getCurrentElementOrUndefined(): StackElement | undefined {
    return this.getElementOrUndefined(this.current_element_index);
  }

  public getNextElement(): StackElement {
    const index = this.current_element_index + 1;
    if (this.elements.length > index) {
      return this.elements.at(index)!;
    } else {
      throw new Error(`Index '${index}' is out of bounds.`);
    }
  }

  public getNextElementOrUndefined(): StackElement | undefined {
    const index = this.current_element_index + 1;
    return this.getElementOrUndefined(index);
  }
}
