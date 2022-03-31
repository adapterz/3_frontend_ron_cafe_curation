import createAreaElem from '../components/area/Area.js';
import { createModalOverlay } from '../components/modal/Modal.js';
import navModalElem from '../templates/NavModal.js';
import searchModalElem from '../templates/SearchModal.js';
import searchFilterModalElem from '../templates/SearchFilterModal.js';
import emailVerifyModalElem from './EmailVerifyModal.js';

const popupArea = createAreaElem('popup');
// navigation 모달 오버레이 요소 생성
const modalOverlayElem = createModalOverlay();

popupArea.appendChild(navModalElem);
popupArea.appendChild(searchModalElem);
popupArea.appendChild(searchFilterModalElem);
popupArea.appendChild(emailVerifyModalElem);
popupArea.appendChild(modalOverlayElem);

document.body.appendChild(popupArea);
