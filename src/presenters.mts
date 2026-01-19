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
import { I_ViewEvent } from "@ts.adligo.org/i_mvpa/dist/i_view.mjs";

/**
 * The MainPresenter is responsible for managing the subordinate Presenters
 */


export class MainPresenter implements I_Presenter {
    onViewEvent(event: I_ViewEvent) {
        throw new Error("Method not implemented.");
    }

}