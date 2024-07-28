import type { Schema, Attribute } from '@strapi/strapi';

export interface GalleryGallery extends Schema.Component {
  collectionName: 'components_gallery_galleries';
  info: {
    displayName: 'gallery';
    icon: 'picture';
  };
  attributes: {
    looks: Attribute.Media<'images', true>;
    name: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'gallery.gallery': GalleryGallery;
    }
  }
}
