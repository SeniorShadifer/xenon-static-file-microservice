export default class StackElement {
  element_type: string;
  path: string;
  data: Map<string, any>;

  constructor(
    element_type: string = "untyped",
    path: string = "/app/errors/StackPathError",
    data: Map<string, any> = new Map<string, any>()
  ) {
    this.element_type = element_type;
    this.path = path;
    this.data = data;
  }
}
