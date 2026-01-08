export class Stack {
  pages: Array<any>;
  current_page_index: number;

  constructor(pages: Array<any> = [], current_page_index: number = 0) {
    this.pages = pages;
    this.current_page_index = current_page_index;
  }

  public setPage(element: any, index: number) {
    if (this.pages.length > index) {
      this.pages[index] = element;
    } else {
      this.pages.push(element);
    }
  }

  public setCurrentPage(element: any) {
    this.setPage(element, this.current_page_index);
  }

  public getPage(index: number): any {
    return this.pages.at(index);
  }

  public getCurrentPage(): any {
    return this.getPage(this.current_page_index);
  }
}
