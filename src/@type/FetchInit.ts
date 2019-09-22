export interface FetchInitType {
  method: string;
  mode: "cors" | "navigate" | "same-origin" | "no-cors" | undefined;
  headers?: { "Content-Type": string };
  body?: string;
}
