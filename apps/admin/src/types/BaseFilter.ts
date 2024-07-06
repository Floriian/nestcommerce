export namespace BaseFilter {
  export type Options = boolean | "ALL";
  export type Actions = "setSearchText" | "setActive";

  export interface BaseFilter {
    active?: Options;
    searchText?: string;
  }

  export interface Payload {
    action: Actions;
    payload: BaseFilter;
  }
  // eslint-disable-next-line no-unused-vars
  export const ACTIVE_OPTIONS = [
    { text: "All", value: "ALL" },
    { text: "Yes", value: true },
    { text: "No", value: false },
  ] as const;
}
