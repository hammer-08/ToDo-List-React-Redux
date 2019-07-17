interface AnyWindow extends Window {
    [extraProps: string]: any;
  }
  
  export const anyWindow = window as AnyWindow;