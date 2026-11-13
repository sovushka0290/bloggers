declare module "next" {
  export type Metadata = {
    title?: any;
    description?: string;
    openGraph?: any;
    metadataBase?: any;
    robots?: any;
    [key: string]: any;
  };
  export type NextConfig = Record<string, any>;
}
declare module "next/link" {
  import { ComponentProps, ReactNode } from "react";
  export interface LinkProps extends ComponentProps<"a"> {
    href: string;
    children?: ReactNode;
  }
  export default function Link(props: LinkProps): ReactNode;
}
declare module "next/image" {
  import { ComponentProps, ReactNode } from "react";
  export interface ImageProps extends ComponentProps<"img"> {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    priority?: boolean;
    className?: string;
  }
  export default function Image(props: ImageProps): ReactNode;
}
declare module "next/navigation" {
  export function usePathname(): string;
  export function useRouter(): any;
  export function notFound(): never;
  export function redirect(url: string): never;
}
declare module "next/headers" {
  export function cookies(): Promise<any>;
}
declare module "next/server" {
  export class NextResponse {
    static json(body: any, init?: any): any;
  }
}
declare module "next/font/google" {
  export function Cormorant_Garamond(opts?: any): { variable: string };
  export function Manrope(opts?: any): { variable: string };
}
