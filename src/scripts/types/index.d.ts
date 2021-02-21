export type GenericObject = { [key: string] : any };

declare global {
  interface Window { UIkit: any; }
}
