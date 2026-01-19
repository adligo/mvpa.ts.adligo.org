/**
 * This file contains all of the vaious event wrappers, that encapsulate and simplify logic
 * to get data out of the events themselves.
 * 
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
 * 
 */
import { I_ViewEvent } from "@ts.adligo.org/i_mvpa/dist/i_events.mjs";
import { I_View } from "@ts.adligo.org/i_mvpa/dist/i_view.mjs";

export class ViewEvent<T> implements I_ViewEvent<T> {
  public static readonly formEvent = () => {
    
  }
  public static readonly of = (event) => {
    
  }
  constructor(name: string, view: I_View, event: any) {
    
  }

  get event(): T {
        throw new Error("Method not implemented.");
    }
    get hasName(): boolean {
        throw new Error("Method not implemented.");
    }
    get hasView(): boolean {
        throw new Error("Method not implemented.");
    }
    get name(): string {
        throw new Error("Method not implemented.");
    }
    get unwrap(): any {
        throw new Error("Method not implemented.");
    }
    get view(): I_View {
        throw new Error("Method not implemented.");
    }
    get viewId(): string {
        throw new Error("Method not implemented.");
    }
}