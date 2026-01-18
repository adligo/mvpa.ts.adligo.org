# MVPA (Model View Presenter Attendant)



This will contain a core TypeScript implementation of the MVPA (Model View Presenter Attendant) design pattern along with a ClientApp to bind it all together for deferred binding (compatible with Angular, React, Svelte, CSR (Client Side Rendering) and Angular or Svelte hybrid rendering CSR + SSR (Server Side Rendering)).  This is generally achieved by deferred binding.  Deferred binding occurs at JavaScript onEvent times and discovers the ClientApp along with Presenters assigned to the View (Panel or Component) using ClientApp static methods or global functions provided by this package.  In addition this design pattern separates concerns by separating the UI (User Interface) into a [programming interface](https://adligo.github.io/papers.adligo.com/architecture/Interfaces.html) and implementation that is passed to the presenter along with the JavaScript events at onEvent time. 

Also See [The MVP@ Design Pattern (Model View Presenter Attendant)](https://adligo.github.io/papers.adligo.com/architecture/MVP@.html)




