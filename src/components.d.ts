/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import { IIIFExplorerBreadcrumb as IiifExplorerBreadcrumb } from './components/iiif-explorer-breadcrumb/iiif-explorer-breadcrumb';

interface HTMLIiifExplorerBreadcrumbElement extends IiifExplorerBreadcrumb, HTMLElement {
}
declare var HTMLIiifExplorerBreadcrumbElement: {
  prototype: HTMLIiifExplorerBreadcrumbElement;
  new (): HTMLIiifExplorerBreadcrumbElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "iiif-explorer-breadcrumb": HTMLIiifExplorerBreadcrumbElement;
  }
  interface ElementTagNameMap {
      "iiif-explorer-breadcrumb": HTMLIiifExplorerBreadcrumbElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "iiif-explorer-breadcrumb": JSXElements.IiifExplorerBreadcrumbAttributes;
      }
  }
  namespace JSXElements {
      export interface IiifExplorerBreadcrumbAttributes extends HTMLAttributes {
          mode?: string,
          color?: string,
        
          collection?: any
      }
  }
}

import { IIIFExplorerItem as IiifExplorerItem } from './components/iiif-explorer-item/iiif-explorer-item';

interface HTMLIiifExplorerItemElement extends IiifExplorerItem, HTMLElement {
}
declare var HTMLIiifExplorerItemElement: {
  prototype: HTMLIiifExplorerItemElement;
  new (): HTMLIiifExplorerItemElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "iiif-explorer-item": HTMLIiifExplorerItemElement;
  }
  interface ElementTagNameMap {
      "iiif-explorer-item": HTMLIiifExplorerItemElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "iiif-explorer-item": JSXElements.IiifExplorerItemAttributes;
      }
  }
  namespace JSXElements {
      export interface IiifExplorerItemAttributes extends HTMLAttributes {
          mode?: string,
          color?: string,
        
          item?: any,
          selected?: boolean
      }
  }
}

import { IIIFExplorer as IiifExplorer } from './components/iiif-explorer/iiif-explorer';

interface HTMLIiifExplorerElement extends IiifExplorer, HTMLElement {
}
declare var HTMLIiifExplorerElement: {
  prototype: HTMLIiifExplorerElement;
  new (): HTMLIiifExplorerElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "iiif-explorer": HTMLIiifExplorerElement;
  }
  interface ElementTagNameMap {
      "iiif-explorer": HTMLIiifExplorerElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "iiif-explorer": JSXElements.IiifExplorerAttributes;
      }
  }
  namespace JSXElements {
      export interface IiifExplorerAttributes extends HTMLAttributes {
          mode?: string,
          color?: string,
        
          reset?: any,
          manifest?: string,
          upLevelEnabled?: boolean
      }
  }
}

