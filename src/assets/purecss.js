import { render } from 'preact';

const PureCss = () => <link 
    rel = "stylesheet"
    href = "https://unpkg.com/purecss@2.0.3/build/pure-min.css"
    integrity = "sha384-cg6SkqEOCV1NbJoCu11+bm0NvBRc8IYLRGXkmNrqUBfTjmMYwNKPWBTIKyw9mHNJ"
    crossorigin = "anonymous" 
/>;

render( <PureCss />, document.head );

console.log("loaded")


