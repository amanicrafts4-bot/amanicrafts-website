export {};

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: "admin" | "user";
    };
  }

  interface Window {
  YocoSDK: any;
  fbq: (
    type: string, 
    event: string, 
    params?: Record<string, any>
  ) => void;
  _fbq: any;
}

}
