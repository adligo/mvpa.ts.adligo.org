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
import {I_Window } from "@ts.adligo.org/i_mvpa/dist/i_view.mjs";
import {I_ClientApp, I_ClientAppParams } from "@ts.adligo.org/i_mvpa/dist/i_clientApp.mjs";
import { I_Presenter } from "@ts.adligo.org/i_mvpa/dist/i_presenter.mjs";


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

export class Window implements I_Window {
  alert(message: string) {
    window.alert(message);
  }

  bindToRegistry(name: string, value: any, writable: boolean, enumerable: boolean, configurable: boolean) {
    Object.defineProperty(window.registry, name, {
      value: value,
      writable: writable,
      enumerable: enumerable,
      configurable: configurable
    });
  }
}


export class ClientAppConstants {
  public static readonly BODY = "body";
  public static readonly DEFAULT_NAME = "DefaultClientApp";
  public static readonly MAIN_VIEW = "MainView";
}

export class ClientAppParams implements I_ClientAppParams {
  private _name: string = ClientAppConstants.DEFAULT_NAME;
  private _window: I_Window = new Window();

  get name(): string {
    return this._name;
  }

  get window(): I_Window {
    return this._window;
  }

  set name(value: string) {
    this._name = value;
  }
}

export class ClientApp implements I_ClientApp {
  private _name: string;
  private _window: I_Window;

  constructor(params: I_ClientAppParams) {
    this._name = params.name;
    this._window = params.window;
  }

  bindToWindow()  {
    this._window.bindToRegistry(this._name, this, false, true, false);
    return this;
  }

  get name() : string {
    return this._name;
  }

  get presenter(): I_Presenter {
        throw new Error("Method not implemented.");
  }
  getPresenter(viewId: string): I_Presenter {
      throw new Error("Method not implemented.");
  }


}
