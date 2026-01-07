export class Stack {
  pages: Array<any>;
  current_page_index: number;

  constructor(pages: Array<any> = [], current_page_index: number = 0) {
    this.pages = pages;
    this.current_page_index = current_page_index;
  }
}
