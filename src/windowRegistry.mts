/**
 * Copyright 2026 Adligo Inc / Scott Morgan
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {I_ClientApp} from "@ts.adligo.org/i_mvpa/dist/i_clientApp.mjs"
import {I_WindowRegistry} from "@ts.adligo.org/i_mvpa/dist/i_view.mjs"
/**
 * Setup the registry on the window object,
 * only if the window object exists (i.e. were executing in a browser).
 */
declare global {
  interface Window {
    registry: { [key: string]: any };
  }
}
if (window !== null && window !== undefined) {
  if (window.registry === null || window.registry === undefined) {
    window.registry = {};
  }
}



export class WindowRegistry implements I_WindowRegistry {

  bindToRegistry(name: string, value: any, writable: boolean, enumerable: boolean, configurable: boolean) {
    Object.defineProperty(window.registry, name, {
      value: value,
      writable: writable,
      enumerable: enumerable,
      configurable: configurable
    });
  }
}

/**
 * bind the app to the browser window
 */
export function bindToWindow(windowRegistry: WindowRegistry, clientApp: I_ClientApp)  {
  windowRegistry.bindToRegistry(clientApp.name, clientApp, false, true, false);
}
