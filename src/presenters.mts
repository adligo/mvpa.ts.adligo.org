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

import { I_Presenter } from "@ts.adligo.org/i_mvpa/dist/i_presenter.mjs";
import { I_ViewEvent } from "@ts.adligo.org/i_mvpa/dist/i_events.mjs";
import { I_View } from "@ts.adligo.org/i_mvpa/dist/i_view.mjs";
import { ViewEvent } from "./events.mjs";

export abstract class BasePresenter implements I_Presenter {
    onViewEvent<T>(event: I_ViewEvent<T>) {
        throw new Error("Method not implemented.");
    }

    sendViewEvent(name: string, view: I_View, event: any) {
      console.log("BasePresenter " + JSON.stringify(event));
      new ViewEvent(name, view, event);
    }
}

/**
 * The MainPresenter is responsible for managing the subordinate Presenters
 */


export class MainPresenter extends BasePresenter implements I_Presenter {
    onViewEvent<T>(event: I_ViewEvent<T>) {
        throw new Error("Method not implemented.");
    }

}