# xeokit.io

**Everything in the xeokit SDK, including the viewer, plugins and pipeline tools, is open source.** This gives you the freedom to inspect the code, fork the repository and customize it to your needs. Other platforms, such as AutoDesk Forge, have many components that are closed-source, which creates risky dependencies for your enterprise.

**At its core, xeokit is specifically architected to render huge numbers of objects for engineering and BIM [2].** In this regard, xeokit fills a performance gap in the market, and is currently the most performant solution for viewing real-world BIM models in the browser. Other platforms, such as AutoDesk Forge, are built around general-purpose WebGL engines, which are designed for the flexibility required for creative coding, game development, realistic product visualization etc., and are therefore unable to handle large models as efficiently. 


[2] xeokit uses hardware instancing and geometry batching algorithms to render large numbers of objects in the minimum number of WebGL draw calls.

[3] BioDigital Human, BIMServer, BIMData, SolidComponents, OpenProject, SceneJS, xeogl 