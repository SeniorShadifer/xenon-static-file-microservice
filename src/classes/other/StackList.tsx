import isNullOrUndefined from "../../functions/isNullOrUndefined";

import { logger } from "../../main";

import Stack from "./Stack";

export default class StackList {
  stacks: Map<string, Stack>;
  current_stack_key: string;

  constructor(data?: Partial<StackList>) {
    this.current_stack_key = this.generateStackDefaultKey();
    this.stacks = new Map<string, Stack>();

    this.setStack(new Stack(), this.current_stack_key);

    logger.debug(this.current_stack_key);

    if (!isNullOrUndefined(data)) {
      Object.assign(this, data);
    }

    logger.debug(this.current_stack_key);
  }

  public getCurrentStackOrUndefined(): Stack | undefined {
    if (typeof this.stacks.get === "function") {
      return this.stacks.get(this.current_stack_key);
    } else {
      return undefined;
    }
  }

  public getCurrentStack(): Stack {
    const current_stack = this.getCurrentStackOrUndefined();

    if (isNullOrUndefined(current_stack)) {
      throw new Error(`No stack found for key '${this.current_stack_key}'`);
    }

    return current_stack!;
  }

  public setStack(stack: Stack, key: string) {
    this.stacks.set(key, stack);

    if (this.stacks.size === 1) {
      this.current_stack_key = key;
    }
  }

  public setCurrentStack(stack: Stack) {
    this.setStack(stack, this.current_stack_key);
  }

  private generateStackDefaultKey(
    index: number = 0,
    storage_name: string = "LocalStorage"
  ) {
    return `${storage_name}@${index}`;
  }
}

const STACK_LIST_LOCAL_STORAGE_ITEM_NAME = "stack_list";

function getStringifiedStackListFromLocalStorage(): string | null {
  return localStorage.getItem(STACK_LIST_LOCAL_STORAGE_ITEM_NAME);
}

function saveStackListToLocalStorage(stack_list: StackList) {
  localStorage.setItem(
    STACK_LIST_LOCAL_STORAGE_ITEM_NAME,
    JSON.stringify(stack_list)
  );
}

export function getStackListFromLocalStorage(): StackList {
  const stack_list_str = getStringifiedStackListFromLocalStorage();

  if (stack_list_str === null) {
    throw new Error(`Stack list not exists in local storage.`);
  }

  return new StackList(JSON.parse(stack_list_str));
}

export function getStackListFromLocalStorageOrCreateAndGetNew(): StackList {
  const stack_list_str = getStringifiedStackListFromLocalStorage();

  if (stack_list_str === null) {
    const stack_list = new StackList();

    saveStackListToLocalStorage(stack_list);

    return stack_list;
  }

  return new StackList(JSON.parse(stack_list_str));
}
