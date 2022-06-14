import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import './fonts/TTCommons/Fontspring-DEMO-tt_commons_pro_regular.otf'
import './fonts/TTCommons/Fontspring-DEMO-tt_commons_pro_bold.otf'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App></App>)