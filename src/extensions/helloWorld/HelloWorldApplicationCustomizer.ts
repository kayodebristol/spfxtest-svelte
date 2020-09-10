import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer,
  PlaceholderContent,
  PlaceholderName
} from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';

import * as strings from 'HelloWorldApplicationCustomizerStrings';
 

import classificationbanner from 'sp-svelte-classification-banner';
const LOG_SOURCE: string = 'HelloWorldApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IHelloWorldApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class HelloWorldApplicationCustomizer
  extends BaseApplicationCustomizer<IHelloWorldApplicationCustomizerProperties> {
    private _topPlaceholder: PlaceholderContent | undefined;
    private _bottomPlaceholder: PlaceholderContent | undefined;
  @override
  public onInit(): Promise<void> {
    
    alert(`Available placeholders:
    ${this.context.placeholderProvider.placeholderNames.map(name => PlaceholderName[name]).join(', ')}`);

  // Handling the top placeholder
  if (!this._topPlaceholder) {
    this._topPlaceholder =
      this.context.placeholderProvider.tryCreateContent(
        PlaceholderName.Top,
        { onDispose: this._onDispose });
  }
    // The extension should not assume that the expected placeholder is available.
    if (!this._topPlaceholder) {
      alert('The expected placeholder (Top) was not found.');
      return;
    }
    
    const classificationBanner: typeof classificationbanner = new classificationbanner
    ({
      target: this._topPlaceholder.domElement,
      props: {
        message: 'This content is classified up to the UNCLASSIFIED//FOUO level', 
        title: "United States Africa Command"}
    }); 
    

    return Promise.resolve();
  }
  private _onDispose(): void {
    console.log('Disposed custom top and bottom placeholders.');
  }

}
