import {React} from '../../jsx-runtime.ts'
import image from '../../images/pexels-leeloothefirst-7121492.webp'

export default function JsxPage() {
  return <div id="jsx-page">
    <h1 className="heading1">JSX Page</h1>
    <img src={image} alt="image"/>
  </div>
}
