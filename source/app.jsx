"use strict";

import React from "react";
import Router from "react-router";
import Routes from "./routes.jsx";
import {render} from "react-dom";
import ReactDOM from 'react-dom';

window.reactRoot = ReactDOM.render(Routes, document.getElementById('apps'));