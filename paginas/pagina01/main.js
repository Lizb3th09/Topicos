import './style.css';
import Header from './components/Header';
import { info } from './helper/data-page';
import { tablaInfo } from './helper/data-api';

document.body.appendChild(Header(info));

document.body.appendChild(tablaInfo);