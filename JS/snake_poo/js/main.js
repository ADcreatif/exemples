"use strict";

const BOARDSIZE = 20; // the number of squared block for the board
const GAMESPEED = 8;  // 1-15 range speed of snake
const GROWFACTOR = 5; // 1-X  the number or blocks gaining by eating apple


// Starting application when DOM is ready
$(() => new Game());