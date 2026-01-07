import isNullOrUndefined from "../../functions/isNullOrUndefined";
import type { Stack } from "./Stack";

export default class SessionStackList {
  stacks: Map<string, Stack>;
  current_stack_key: string;

  constructor(data?: Partial<SessionStackList>) {
    this.stacks = new Map<string, Stack>();
    this.current_stack_key = "";

    if (!isNullOrUndefined(data)) {
      Object.assign(this, data);
    }
  }

  public getCurrentStackOrUndefined(): Stack | undefined {
    return this.stacks.get(this.current_stack_key);
  }

  public getCurrentStack(): Stack {
    const current_stack = this.getCurrentStackOrUndefined();

    if (isNullOrUndefined(current_stack)) {
      throw new Error(`No stack found for key '${this.current_stack_key}'`);
    }

    return current_stack!;
  }
}

function getStringifiedSessionStackListFromLocalStorage(): string | null {
  return localStorage.getItem("session_stack_list");
}

function saveSessionStackListToLocalStorage(
  session_stack_list: SessionStackList
) {
  localStorage.setItem(
    "session_stack_list",
    JSON.stringify(session_stack_list)
  );
}

export function getSessionStackListFromLocalStorage(): SessionStackList {
  const session_stack_list_str =
    getStringifiedSessionStackListFromLocalStorage();

  if (session_stack_list_str === null) {
    throw new Error(`Session stack list not exists in local storage.`);
  }

  return new SessionStackList(JSON.parse(session_stack_list_str));
}

export function getSessionStackListFromLocalStorageOrCreateAndGetNew(): SessionStackList {
  const session_stack_list_str =
    getStringifiedSessionStackListFromLocalStorage();

  if (session_stack_list_str === null) {
    const session_stack_list = new SessionStackList();

    saveSessionStackListToLocalStorage(session_stack_list);

    return session_stack_list;
  }

  return new SessionStackList(JSON.parse(session_stack_list_str));
}
