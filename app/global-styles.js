import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`

@charset "UTF-8";
// @import url(font-awesome.min.css);
@import url("https://fonts.googleapis.com/css?family=Amatic+SC|Open+Sans:300,400,600,700,800");

/* Reset */

	html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}

	article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
		display: block;
	}

	body {
		line-height: 1;
	}

	ol, ul {
		list-style: none;
	}

	blockquote, q {
		quotes: none;
	}

	blockquote:before, blockquote:after, q:before, q:after {
		content: '';
		content: none;
	}

	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	body {
		-webkit-text-size-adjust: none;
	}

/* Box Model */

	*, *:before, *:after {
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}

/* Containers */

	.container {
		margin-left: auto;
		margin-right: auto;
	}

	.container.31 2525 {
		width: 100%;
		max-width: 100em;
		min-width: 80em;
	}

	.container.37 525 {
		width: 60em;
	}

	.container.35 025 {
		width: 40em;
	}

	.container.32 525 {
		width: 20em;
	}

	.container {
		width: 80em;
	}

	@media screen and (max-width: 1680px) {

		.container.31 2525 {
			width: 100%;
			max-width: 100em;
			min-width: 80em;
		}

		.container.37 525 {
			width: 60em;
		}

		.container.35 025 {
			width: 40em;
		}

		.container.32 525 {
			width: 20em;
		}

		.container {
			width: 80em;
		}

	}

	@media screen and (max-width: 1280px) {

		.container.31 2525 {
			width: 100%;
			max-width: 81.25em;
			min-width: 65em;
		}

		.container.37 525 {
			width: 48.75em;
		}

		.container.35 025 {
			width: 32.5em;
		}

		.container.32 525 {
			width: 16.25em;
		}

		.container {
			width: 65em;
		}

	}

	@media screen and (max-width: 980px) {

		.container.31 2525 {
			width: 100%;
			max-width: 112.5%;
			min-width: 90%;
		}

		.container.37 525 {
			width: 67.5%;
		}

		.container.35 025 {
			width: 45%;
		}

		.container.32 525 {
			width: 22.5%;
		}

		.container {
			width: 90%;
		}

	}

	@media screen and (max-width: 736px) {

		.container.31 2525 {
			width: 100%;
			max-width: 112.5%;
			min-width: 90%;
		}

		.container.37 525 {
			width: 67.5%;
		}

		.container.35 025 {
			width: 45%;
		}

		.container.32 525 {
			width: 22.5%;
		}

		.container {
			width: 90% !important;
		}

	}

	@media screen and (max-width: 480px) {

		.container.31 2525 {
			width: 100%;
			max-width: 112.5%;
			min-width: 90%;
		}

		.container.37 525 {
			width: 67.5%;
		}

		.container.35 025 {
			width: 45%;
		}

		.container.32 525 {
			width: 22.5%;
		}

		.container {
			width: 90% !important;
		}

	}

/* Grid */

	.row {
		border-bottom: solid 1px transparent;
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}

	.row > * {
		float: left;
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}

	.row:after, .row:before {
		content: '';
		display: block;
		clear: both;
		height: 0;
	}

	.row.uniform > * > :first-child {
		margin-top: 0;
	}

	.row.uniform > * > :last-child {
		margin-bottom: 0;
	}

	.row.30 25 > * {
		padding: 0 0 0 0em;
	}

	.row.30 25 {
		margin: 0 0 -1px 0em;
	}

	.row.uniform.30 25 > * {
		padding: 0em 0 0 0em;
	}

	.row.uniform.30 25 {
		margin: 0em 0 -1px 0em;
	}

	.row > * {
		padding: 0 0 0 2em;
	}

	.row {
		margin: 0 0 -1px -2em;
	}

	.row.uniform > * {
		padding: 2em 0 0 2em;
	}

	.row.uniform {
		margin: -2em 0 -1px -2em;
	}

	.row.32 0025 > * {
		padding: 0 0 0 4em;
	}

	.row.32 0025 {
		margin: 0 0 -1px -4em;
	}

	.row.uniform.32 0025 > * {
		padding: 4em 0 0 4em;
	}

	.row.uniform.32 0025 {
		margin: -4em 0 -1px -4em;
	}

	.row.31 5025 > * {
		padding: 0 0 0 3em;
	}

	.row.31 5025 {
		margin: 0 0 -1px -3em;
	}

	.row.uniform.31 5025 > * {
		padding: 3em 0 0 3em;
	}

	.row.uniform.31 5025 {
		margin: -3em 0 -1px -3em;
	}

	.row.35 025 > * {
		padding: 0 0 0 1em;
	}

	.row.35 025 {
		margin: 0 0 -1px -1em;
	}

	.row.uniform.35 025 > * {
		padding: 1em 0 0 1em;
	}

	.row.uniform.35 025 {
		margin: -1em 0 -1px -1em;
	}

	.row.32 525 > * {
		padding: 0 0 0 0.5em;
	}

	.row.32 525 {
		margin: 0 0 -1px -0.5em;
	}

	.row.uniform.32 525 > * {
		padding: 0.5em 0 0 0.5em;
	}

	.row.uniform.32 525 {
		margin: -0.5em 0 -1px -0.5em;
	}

	.31 2u, .31 2u24 {
		width: 100%;
		clear: none;
		margin-left: 0;
	}

	.31 1u, .31 1u24 {
		width: 91.6666666667%;
		clear: none;
		margin-left: 0;
	}

	.31 0u, .31 0u24 {
		width: 83.3333333333%;
		clear: none;
		margin-left: 0;
	}

	.39 u, .39 u24 {
		width: 75%;
		clear: none;
		margin-left: 0;
	}

	.38 u, .38 u24 {
		width: 66.6666666667%;
		clear: none;
		margin-left: 0;
	}

	.37 u, .37 u24 {
		width: 58.3333333333%;
		clear: none;
		margin-left: 0;
	}

	.36 u, .36 u24 {
		width: 50%;
		clear: none;
		margin-left: 0;
	}

	.35 u, .35 u24 {
		width: 41.6666666667%;
		clear: none;
		margin-left: 0;
	}

	.34 u, .34 u24 {
		width: 33.3333333333%;
		clear: none;
		margin-left: 0;
	}

	.33 u, .33 u24 {
		width: 25%;
		clear: none;
		margin-left: 0;
	}

	.32 u, .32 u24 {
		width: 16.6666666667%;
		clear: none;
		margin-left: 0;
	}

	.31 u, .31 u24 {
		width: 8.3333333333%;
		clear: none;
		margin-left: 0;
	}

	.31 2u24 + *,
	.31 1u24 + *,
	.31 0u24 + *,
	.39 u24 + *,
	.38 u24 + *,
	.37 u24 + *,
	.36 u24 + *,
	.35 u24 + *,
	.34 u24 + *,
	.33 u24 + *,
	.32 u24 + *,
	.31 u24 + * {
		clear: left;
	}

	.-11u {
		margin-left: 91.66667%;
	}

	.-10u {
		margin-left: 83.33333%;
	}

	.-9u {
		margin-left: 75%;
	}

	.-8u {
		margin-left: 66.66667%;
	}

	.-7u {
		margin-left: 58.33333%;
	}

	.-6u {
		margin-left: 50%;
	}

	.-5u {
		margin-left: 41.66667%;
	}

	.-4u {
		margin-left: 33.33333%;
	}

	.-3u {
		margin-left: 25%;
	}

	.-2u {
		margin-left: 16.66667%;
	}

	.-1u {
		margin-left: 8.33333%;
	}

	@media screen and (max-width: 1680px) {

		.row > * {
			padding: 0 0 0 2em;
		}

		.row {
			margin: 0 0 -1px -2em;
		}

		.row.uniform > * {
			padding: 2em 0 0 2em;
		}

		.row.uniform {
			margin: -2em 0 -1px -2em;
		}

		.row.32 0025 > * {
			padding: 0 0 0 4em;
		}

		.row.32 0025 {
			margin: 0 0 -1px -4em;
		}

		.row.uniform.32 0025 > * {
			padding: 4em 0 0 4em;
		}

		.row.uniform.32 0025 {
			margin: -4em 0 -1px -4em;
		}

		.row.31 5025 > * {
			padding: 0 0 0 3em;
		}

		.row.31 5025 {
			margin: 0 0 -1px -3em;
		}

		.row.uniform.31 5025 > * {
			padding: 3em 0 0 3em;
		}

		.row.uniform.31 5025 {
			margin: -3em 0 -1px -3em;
		}

		.row.35 025 > * {
			padding: 0 0 0 1em;
		}

		.row.35 025 {
			margin: 0 0 -1px -1em;
		}

		.row.uniform.35 025 > * {
			padding: 1em 0 0 1em;
		}

		.row.uniform.35 025 {
			margin: -1em 0 -1px -1em;
		}

		.row.32 525 > * {
			padding: 0 0 0 0.5em;
		}

		.row.32 525 {
			margin: 0 0 -1px -0.5em;
		}

		.row.uniform.32 525 > * {
			padding: 0.5em 0 0 0.5em;
		}

		.row.uniform.32 525 {
			margin: -0.5em 0 -1px -0.5em;
		}

		.31 2u28xlarge29, .31 2u2428xlarge29 {
			width: 100%;
			clear: none;
			margin-left: 0;
		}

		.31 1u28xlarge29, .31 1u2428xlarge29 {
			width: 91.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.31 0u28xlarge29, .31 0u2428xlarge29 {
			width: 83.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.39 u28xlarge29, .39 u2428xlarge29 {
			width: 75%;
			clear: none;
			margin-left: 0;
		}

		.38 u28xlarge29, .38 u2428xlarge29 {
			width: 66.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.37 u28xlarge29, .37 u2428xlarge29 {
			width: 58.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.36 u28xlarge29, .36 u2428xlarge29 {
			width: 50%;
			clear: none;
			margin-left: 0;
		}

		.35 u28xlarge29, .35 u2428xlarge29 {
			width: 41.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.34 u28xlarge29, .34 u2428xlarge29 {
			width: 33.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.33 u28xlarge29, .33 u2428xlarge29 {
			width: 25%;
			clear: none;
			margin-left: 0;
		}

		.32 u28xlarge29, .32 u2428xlarge29 {
			width: 16.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.31 u28xlarge29, .31 u2428xlarge29 {
			width: 8.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.31 2u2428xlarge29 + *,
		.31 1u2428xlarge29 + *,
		.31 0u2428xlarge29 + *,
		.39 u2428xlarge29 + *,
		.38 u2428xlarge29 + *,
		.37 u2428xlarge29 + *,
		.36 u2428xlarge29 + *,
		.35 u2428xlarge29 + *,
		.34 u2428xlarge29 + *,
		.33 u2428xlarge29 + *,
		.32 u2428xlarge29 + *,
		.31 u2428xlarge29 + * {
			clear: left;
		}

		.-11u28xlarge29 {
			margin-left: 91.66667%;
		}

		.-10u28xlarge29 {
			margin-left: 83.33333%;
		}

		.-9u28xlarge29 {
			margin-left: 75%;
		}

		.-8u28xlarge29 {
			margin-left: 66.66667%;
		}

		.-7u28xlarge29 {
			margin-left: 58.33333%;
		}

		.-6u28xlarge29 {
			margin-left: 50%;
		}

		.-5u28xlarge29 {
			margin-left: 41.66667%;
		}

		.-4u28xlarge29 {
			margin-left: 33.33333%;
		}

		.-3u28xlarge29 {
			margin-left: 25%;
		}

		.-2u28xlarge29 {
			margin-left: 16.66667%;
		}

		.-1u28xlarge29 {
			margin-left: 8.33333%;
		}

	}

	@media screen and (max-width: 1280px) {

		.row > * {
			padding: 0 0 0 1.5em;
		}

		.row {
			margin: 0 0 -1px -1.5em;
		}

		.row.uniform > * {
			padding: 1.5em 0 0 1.5em;
		}

		.row.uniform {
			margin: -1.5em 0 -1px -1.5em;
		}

		.row.32 0025 > * {
			padding: 0 0 0 3em;
		}

		.row.32 0025 {
			margin: 0 0 -1px -3em;
		}

		.row.uniform.32 0025 > * {
			padding: 3em 0 0 3em;
		}

		.row.uniform.32 0025 {
			margin: -3em 0 -1px -3em;
		}

		.row.31 5025 > * {
			padding: 0 0 0 2.25em;
		}

		.row.31 5025 {
			margin: 0 0 -1px -2.25em;
		}

		.row.uniform.31 5025 > * {
			padding: 2.25em 0 0 2.25em;
		}

		.row.uniform.31 5025 {
			margin: -2.25em 0 -1px -2.25em;
		}

		.row.35 025 > * {
			padding: 0 0 0 0.75em;
		}

		.row.35 025 {
			margin: 0 0 -1px -0.75em;
		}

		.row.uniform.35 025 > * {
			padding: 0.75em 0 0 0.75em;
		}

		.row.uniform.35 025 {
			margin: -0.75em 0 -1px -0.75em;
		}

		.row.32 525 > * {
			padding: 0 0 0 0.375em;
		}

		.row.32 525 {
			margin: 0 0 -1px -0.375em;
		}

		.row.uniform.32 525 > * {
			padding: 0.375em 0 0 0.375em;
		}

		.row.uniform.32 525 {
			margin: -0.375em 0 -1px -0.375em;
		}

		.31 2u28large29, .31 2u2428large29 {
			width: 100%;
			clear: none;
			margin-left: 0;
		}

		.31 1u28large29, .31 1u2428large29 {
			width: 91.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.31 0u28large29, .31 0u2428large29 {
			width: 83.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.39 u28large29, .39 u2428large29 {
			width: 75%;
			clear: none;
			margin-left: 0;
		}

		.38 u28large29, .38 u2428large29 {
			width: 66.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.37 u28large29, .37 u2428large29 {
			width: 58.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.36 u28large29, .36 u2428large29 {
			width: 50%;
			clear: none;
			margin-left: 0;
		}

		.35 u28large29, .35 u2428large29 {
			width: 41.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.34 u28large29, .34 u2428large29 {
			width: 33.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.33 u28large29, .33 u2428large29 {
			width: 25%;
			clear: none;
			margin-left: 0;
		}

		.32 u28large29, .32 u2428large29 {
			width: 16.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.31 u28large29, .31 u2428large29 {
			width: 8.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.31 2u2428large29 + *,
		.31 1u2428large29 + *,
		.31 0u2428large29 + *,
		.39 u2428large29 + *,
		.38 u2428large29 + *,
		.37 u2428large29 + *,
		.36 u2428large29 + *,
		.35 u2428large29 + *,
		.34 u2428large29 + *,
		.33 u2428large29 + *,
		.32 u2428large29 + *,
		.31 u2428large29 + * {
			clear: left;
		}

		.-11u28large29 {
			margin-left: 91.66667%;
		}

		.-10u28large29 {
			margin-left: 83.33333%;
		}

		.-9u28large29 {
			margin-left: 75%;
		}

		.-8u28large29 {
			margin-left: 66.66667%;
		}

		.-7u28large29 {
			margin-left: 58.33333%;
		}

		.-6u28large29 {
			margin-left: 50%;
		}

		.-5u28large29 {
			margin-left: 41.66667%;
		}

		.-4u28large29 {
			margin-left: 33.33333%;
		}

		.-3u28large29 {
			margin-left: 25%;
		}

		.-2u28large29 {
			margin-left: 16.66667%;
		}

		.-1u28large29 {
			margin-left: 8.33333%;
		}

	}

	@media screen and (max-width: 980px) {

		.row > * {
			padding: 0 0 0 1.5em;
		}

		.row {
			margin: 0 0 -1px -1.5em;
		}

		.row.uniform > * {
			padding: 1.5em 0 0 1.5em;
		}

		.row.uniform {
			margin: -1.5em 0 -1px -1.5em;
		}

		.row.32 0025 > * {
			padding: 0 0 0 3em;
		}

		.row.32 0025 {
			margin: 0 0 -1px -3em;
		}

		.row.uniform.32 0025 > * {
			padding: 3em 0 0 3em;
		}

		.row.uniform.32 0025 {
			margin: -3em 0 -1px -3em;
		}

		.row.31 5025 > * {
			padding: 0 0 0 2.25em;
		}

		.row.31 5025 {
			margin: 0 0 -1px -2.25em;
		}

		.row.uniform.31 5025 > * {
			padding: 2.25em 0 0 2.25em;
		}

		.row.uniform.31 5025 {
			margin: -2.25em 0 -1px -2.25em;
		}

		.row.35 025 > * {
			padding: 0 0 0 0.75em;
		}

		.row.35 025 {
			margin: 0 0 -1px -0.75em;
		}

		.row.uniform.35 025 > * {
			padding: 0.75em 0 0 0.75em;
		}

		.row.uniform.35 025 {
			margin: -0.75em 0 -1px -0.75em;
		}

		.row.32 525 > * {
			padding: 0 0 0 0.375em;
		}

		.row.32 525 {
			margin: 0 0 -1px -0.375em;
		}

		.row.uniform.32 525 > * {
			padding: 0.375em 0 0 0.375em;
		}

		.row.uniform.32 525 {
			margin: -0.375em 0 -1px -0.375em;
		}

		.31 2u28medium29, .31 2u2428medium29 {
			width: 100%;
			clear: none;
			margin-left: 0;
		}

		.31 1u28medium29, .31 1u2428medium29 {
			width: 91.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.31 0u28medium29, .31 0u2428medium29 {
			width: 83.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.39 u28medium29, .39 u2428medium29 {
			width: 75%;
			clear: none;
			margin-left: 0;
		}

		.38 u28medium29, .38 u2428medium29 {
			width: 66.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.37 u28medium29, .37 u2428medium29 {
			width: 58.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.36 u28medium29, .36 u2428medium29 {
			width: 50%;
			clear: none;
			margin-left: 0;
		}

		.35 u28medium29, .35 u2428medium29 {
			width: 41.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.34 u28medium29, .34 u2428medium29 {
			width: 33.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.33 u28medium29, .33 u2428medium29 {
			width: 25%;
			clear: none;
			margin-left: 0;
		}

		.32 u28medium29, .32 u2428medium29 {
			width: 16.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.31 u28medium29, .31 u2428medium29 {
			width: 8.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.31 2u2428medium29 + *,
		.31 1u2428medium29 + *,
		.31 0u2428medium29 + *,
		.39 u2428medium29 + *,
		.38 u2428medium29 + *,
		.37 u2428medium29 + *,
		.36 u2428medium29 + *,
		.35 u2428medium29 + *,
		.34 u2428medium29 + *,
		.33 u2428medium29 + *,
		.32 u2428medium29 + *,
		.31 u2428medium29 + * {
			clear: left;
		}

		.-11u28medium29 {
			margin-left: 91.66667%;
		}

		.-10u28medium29 {
			margin-left: 83.33333%;
		}

		.-9u28medium29 {
			margin-left: 75%;
		}

		.-8u28medium29 {
			margin-left: 66.66667%;
		}

		.-7u28medium29 {
			margin-left: 58.33333%;
		}

		.-6u28medium29 {
			margin-left: 50%;
		}

		.-5u28medium29 {
			margin-left: 41.66667%;
		}

		.-4u28medium29 {
			margin-left: 33.33333%;
		}

		.-3u28medium29 {
			margin-left: 25%;
		}

		.-2u28medium29 {
			margin-left: 16.66667%;
		}

		.-1u28medium29 {
			margin-left: 8.33333%;
		}

	}

	@media screen and (max-width: 736px) {

		.row > * {
			padding: 0 0 0 1.25em;
		}

		.row {
			margin: 0 0 -1px -1.25em;
		}

		.row.uniform > * {
			padding: 1.25em 0 0 1.25em;
		}

		.row.uniform {
			margin: -1.25em 0 -1px -1.25em;
		}

		.row.32 0025 > * {
			padding: 0 0 0 2.5em;
		}

		.row.32 0025 {
			margin: 0 0 -1px -2.5em;
		}

		.row.uniform.32 0025 > * {
			padding: 2.5em 0 0 2.5em;
		}

		.row.uniform.32 0025 {
			margin: -2.5em 0 -1px -2.5em;
		}

		.row.31 5025 > * {
			padding: 0 0 0 1.875em;
		}

		.row.31 5025 {
			margin: 0 0 -1px -1.875em;
		}

		.row.uniform.31 5025 > * {
			padding: 1.875em 0 0 1.875em;
		}

		.row.uniform.31 5025 {
			margin: -1.875em 0 -1px -1.875em;
		}

		.row.35 025 > * {
			padding: 0 0 0 0.625em;
		}

		.row.35 025 {
			margin: 0 0 -1px -0.625em;
		}

		.row.uniform.35 025 > * {
			padding: 0.625em 0 0 0.625em;
		}

		.row.uniform.35 025 {
			margin: -0.625em 0 -1px -0.625em;
		}

		.row.32 525 > * {
			padding: 0 0 0 0.3125em;
		}

		.row.32 525 {
			margin: 0 0 -1px -0.3125em;
		}

		.row.uniform.32 525 > * {
			padding: 0.3125em 0 0 0.3125em;
		}

		.row.uniform.32 525 {
			margin: -0.3125em 0 -1px -0.3125em;
		}

		.31 2u28small29, .31 2u2428small29 {
			width: 100%;
			clear: none;
			margin-left: 0;
		}

		.31 1u28small29, .31 1u2428small29 {
			width: 91.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.31 0u28small29, .31 0u2428small29 {
			width: 83.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.39 u28small29, .39 u2428small29 {
			width: 75%;
			clear: none;
			margin-left: 0;
		}

		.38 u28small29, .38 u2428small29 {
			width: 66.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.37 u28small29, .37 u2428small29 {
			width: 58.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.36 u28small29, .36 u2428small29 {
			width: 50%;
			clear: none;
			margin-left: 0;
		}

		.35 u28small29, .35 u2428small29 {
			width: 41.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.34 u28small29, .34 u2428small29 {
			width: 33.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.33 u28small29, .33 u2428small29 {
			width: 25%;
			clear: none;
			margin-left: 0;
		}

		.32 u28small29, .32 u2428small29 {
			width: 16.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.31 u28small29, .31 u2428small29 {
			width: 8.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.31 2u2428small29 + *,
		.31 1u2428small29 + *,
		.31 0u2428small29 + *,
		.39 u2428small29 + *,
		.38 u2428small29 + *,
		.37 u2428small29 + *,
		.36 u2428small29 + *,
		.35 u2428small29 + *,
		.34 u2428small29 + *,
		.33 u2428small29 + *,
		.32 u2428small29 + *,
		.31 u2428small29 + * {
			clear: left;
		}

		.-11u28small29 {
			margin-left: 91.66667%;
		}

		.-10u28small29 {
			margin-left: 83.33333%;
		}

		.-9u28small29 {
			margin-left: 75%;
		}

		.-8u28small29 {
			margin-left: 66.66667%;
		}

		.-7u28small29 {
			margin-left: 58.33333%;
		}

		.-6u28small29 {
			margin-left: 50%;
		}

		.-5u28small29 {
			margin-left: 41.66667%;
		}

		.-4u28small29 {
			margin-left: 33.33333%;
		}

		.-3u28small29 {
			margin-left: 25%;
		}

		.-2u28small29 {
			margin-left: 16.66667%;
		}

		.-1u28small29 {
			margin-left: 8.33333%;
		}

	}

	@media screen and (max-width: 480px) {

		.row > * {
			padding: 0 0 0 1.25em;
		}

		.row {
			margin: 0 0 -1px -1.25em;
		}

		.row.uniform > * {
			padding: 1.25em 0 0 1.25em;
		}

		.row.uniform {
			margin: -1.25em 0 -1px -1.25em;
		}

		.row.32 0025 > * {
			padding: 0 0 0 2.5em;
		}

		.row.32 0025 {
			margin: 0 0 -1px -2.5em;
		}

		.row.uniform.32 0025 > * {
			padding: 2.5em 0 0 2.5em;
		}

		.row.uniform.32 0025 {
			margin: -2.5em 0 -1px -2.5em;
		}

		.row.31 5025 > * {
			padding: 0 0 0 1.875em;
		}

		.row.31 5025 {
			margin: 0 0 -1px -1.875em;
		}

		.row.uniform.31 5025 > * {
			padding: 1.875em 0 0 1.875em;
		}

		.row.uniform.31 5025 {
			margin: -1.875em 0 -1px -1.875em;
		}

		.row.35 025 > * {
			padding: 0 0 0 0.625em;
		}

		.row.35 025 {
			margin: 0 0 -1px -0.625em;
		}

		.row.uniform.35 025 > * {
			padding: 0.625em 0 0 0.625em;
		}

		.row.uniform.35 025 {
			margin: -0.625em 0 -1px -0.625em;
		}

		.row.32 525 > * {
			padding: 0 0 0 0.3125em;
		}

		.row.32 525 {
			margin: 0 0 -1px -0.3125em;
		}

		.row.uniform.32 525 > * {
			padding: 0.3125em 0 0 0.3125em;
		}

		.row.uniform.32 525 {
			margin: -0.3125em 0 -1px -0.3125em;
		}

		.31 2u28xsmall29, .31 2u2428xsmall29 {
			width: 100%;
			clear: none;
			margin-left: 0;
		}

		.31 1u28xsmall29, .31 1u2428xsmall29 {
			width: 91.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.31 0u28xsmall29, .31 0u2428xsmall29 {
			width: 83.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.39 u28xsmall29, .39 u2428xsmall29 {
			width: 75%;
			clear: none;
			margin-left: 0;
		}

		.38 u28xsmall29, .38 u2428xsmall29 {
			width: 66.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.37 u28xsmall29, .37 u2428xsmall29 {
			width: 58.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.36 u28xsmall29, .36 u2428xsmall29 {
			width: 50%;
			clear: none;
			margin-left: 0;
		}

		.35 u28xsmall29, .35 u2428xsmall29 {
			width: 41.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.34 u28xsmall29, .34 u2428xsmall29 {
			width: 33.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.33 u28xsmall29, .33 u2428xsmall29 {
			width: 25%;
			clear: none;
			margin-left: 0;
		}

		.32 u28xsmall29, .32 u2428xsmall29 {
			width: 16.6666666667%;
			clear: none;
			margin-left: 0;
		}

		.31 u28xsmall29, .31 u2428xsmall29 {
			width: 8.3333333333%;
			clear: none;
			margin-left: 0;
		}

		.31 2u2428xsmall29 + *,
		.31 1u2428xsmall29 + *,
		.31 0u2428xsmall29 + *,
		.39 u2428xsmall29 + *,
		.38 u2428xsmall29 + *,
		.37 u2428xsmall29 + *,
		.36 u2428xsmall29 + *,
		.35 u2428xsmall29 + *,
		.34 u2428xsmall29 + *,
		.33 u2428xsmall29 + *,
		.32 u2428xsmall29 + *,
		.31 u2428xsmall29 + * {
			clear: left;
		}

		.-11u28xsmall29 {
			margin-left: 91.66667%;
		}

		.-10u28xsmall29 {
			margin-left: 83.33333%;
		}

		.-9u28xsmall29 {
			margin-left: 75%;
		}

		.-8u28xsmall29 {
			margin-left: 66.66667%;
		}

		.-7u28xsmall29 {
			margin-left: 58.33333%;
		}

		.-6u28xsmall29 {
			margin-left: 50%;
		}

		.-5u28xsmall29 {
			margin-left: 41.66667%;
		}

		.-4u28xsmall29 {
			margin-left: 33.33333%;
		}

		.-3u28xsmall29 {
			margin-left: 25%;
		}

		.-2u28xsmall29 {
			margin-left: 16.66667%;
		}

		.-1u28xsmall29 {
			margin-left: 8.33333%;
		}

	}

/* Basic */

	@-ms-viewport {
		width: device-width;
	}

	body {
		-ms-overflow-style: scrollbar;
	}

	@media screen and (max-width: 480px) {

		html, body {
			min-width: 320px;
		}

	}

	body {
		background: #1b1b1b;
	}

		body.is-loading *, body.is-loading *:before, body.is-loading *:after {
			-moz-animation: none !important;
			-webkit-animation: none !important;
			-ms-animation: none !important;
			animation: none !important;
			-moz-transition: none !important;
			-webkit-transition: none !important;
			-ms-transition: none !important;
			transition: none !important;
		}

	.inner {
		width: 60em;
	}

	@media screen and (max-width: 1280px) {

		.inner {
			width: 65em;
		}

	}

	@media screen and (max-width: 980px) {

		.inner {
			width: 80%;
		}

	}

	@media screen and (max-width: 736px) {

		.inner {
			width: 90%;
		}

	}

/* Type */

	body {
		background-color: #1b1b1b;
		color: rgba(255, 255, 255, 0.75);
	}

	body, input, select, textarea {
		font-family: "Open Sans", Arial, Helvetica, sans-serif;
		font-size: 13pt;
		font-weight: 300;
		line-height: 1.65;
	}

		@media screen and (max-width: 1680px) {

			body, input, select, textarea {
				font-size: 11pt;
			}

		}

		@media screen and (max-width: 1280px) {

			body, input, select, textarea {
				font-size: 11pt;
			}

		}

		@media screen and (max-width: 980px) {

			body, input, select, textarea {
				font-size: 12pt;
			}

		}

		@media screen and (max-width: 736px) {

			body, input, select, textarea {
				font-size: 12pt;
			}

		}

		@media screen and (max-width: 480px) {

			body, input, select, textarea {
				font-size: 12pt;
			}

		}

	a {
		text-decoration: underline;
	}

		a:hover {
			text-decoration: none;
		}

	strong, b {
		font-weight: 600;
	}

	em, i {
		font-style: italic;
	}

	p {
		margin: 0 0 2em 0;
	}

	h1, h2, h3, h4, h5, h6 {
		font-weight: 600;
		line-height: 1.5;
		margin: 0 0 1em 0;
		text-transform: uppercase;
	}

		h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {
			color: inherit;
			text-decoration: none;
		}

	h2 {
		font-size: 1.75em;
	}

	h3 {
		font-size: 1.35em;
	}

	h4 {
		font-size: 1.1em;
	}

	h5 {
		font-size: 0.9em;
	}

	h6 {
		font-size: 0.7em;
	}

	sub {
		font-size: 0.8em;
		position: relative;
		top: 0.5em;
	}

	sup {
		font-size: 0.8em;
		position: relative;
		top: -0.5em;
	}

	blockquote {
		border-left: solid 4px;
		font-style: italic;
		margin: 0 0 2em 0;
		padding: 0.5em 0 0.5em 2em;
	}

	code {
		border-radius: 4px;
		border: solid 1px;
		font-family: "Courier New", monospace;
		font-size: 0.9em;
		margin: 0 0.25em;
		padding: 0.25em 0.65em;
	}

	pre {
		-webkit-overflow-scrolling: touch;
		font-family: "Courier New", monospace;
		font-size: 0.9em;
		margin: 0 0 2em 0;
	}

		pre code {
			display: block;
			line-height: 1.75;
			padding: 1em 1.5em;
			overflow-x: auto;
		}

	hr {
		border: 0;
		border-bottom: solid 1px;
		margin: 2em 0;
	}

		hr.major {
			margin: 3em 0;
		}

	.align-left {
		text-align: left;
	}

	.align-center {
		text-align: center;
	}

	.align-right {
		text-align: right;
	}

	input, select, textarea {
		color: #fff;
	}

	a {
		color: #9D75CB;
	}

	strong, b {
		color: #fff;
	}

	h1, h2, h3, h4, h5, h6 {
		color: #fff;
	}

	blockquote {
		border-left-color: rgba(144, 144, 144, 0.25);
	}

	code {
		background: rgba(144, 144, 144, 0.075);
		border-color: rgba(144, 144, 144, 0.25);
	}

	hr {
		border-bottom-color: rgba(144, 144, 144, 0.25);
	}

/* Box */

	.box {
		background: rgba(0, 0, 0, 0.5);
		border-radius: 4px;
		margin-bottom: 2em;
		overflow: hidden;
		padding: 4em;
	}

		.box > :last-child,
		.box > :last-child > :last-child,
		.box > :last-child > :last-child > :last-child {
			margin-bottom: 0;
		}

		.box header h2 {
			margin: 0 0 .5em 0;
			color: #FFF;
		}

		.box header p {
			color: rgba(255, 255, 255, 0.5);
		}

		.box.alt {
			border: 0;
			border-radius: 0;
			padding: 0;
		}

		@media screen and (max-width: 980px) {

			.box {
				padding: 3em;
			}

			.box header h2 {
				margin-bottom: 1.5em;
			}

		}

		@media screen and (max-width: 736px) {

			.box {
				padding: 2em;
			}

		}

		@media screen and (max-width: 480px) {

			.box {
				padding: 1em;
			}

		}

/* Button */

	input[type="submit"],
	input[type="reset"],
	input[type="button"],
	button,
	.button {
		-moz-appearance: none;
		-webkit-appearance: none;
		-ms-appearance: none;
		appearance: none;
		-moz-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
		-webkit-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
		-ms-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
		transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
		border-radius: 4px;
		border: 0;
		cursor: pointer;
		display: inline-block;
		font-weight: 600;
		height: 2.85em;
		line-height: 2.95em;
		padding: 0 1.5em;
		text-align: center;
		text-decoration: none;
		white-space: nowrap;
		text-transform: uppercase;
	}

		input[type="submit"].icon,
		input[type="reset"].icon,
		input[type="button"].icon,
		button.icon,
		.button.icon {
			padding-left: 1.35em;
		}

			input[type="submit"].icon:before,
			input[type="reset"].icon:before,
			input[type="button"].icon:before,
			button.icon:before,
			.button.icon:before {
				margin-right: 0.5em;
			}

		input[type="submit"].fit,
		input[type="reset"].fit,
		input[type="button"].fit,
		button.fit,
		.button.fit {
			display: block;
			margin: 0 0 1em 0;
			width: 100%;
		}

		input[type="submit"].small,
		input[type="reset"].small,
		input[type="button"].small,
		button.small,
		.button.small {
			font-size: 0.8em;
		}

		input[type="submit"].big,
		input[type="reset"].big,
		input[type="button"].big,
		button.big,
		.button.big {
			font-size: 1.35em;
		}

		input[type="submit"].disabled, input[type="submit"]:disabled,
		input[type="reset"].disabled,
		input[type="reset"]:disabled,
		input[type="button"].disabled,
		input[type="button"]:disabled,
		button.disabled,
		button:disabled,
		.button.disabled,
		.button:disabled {
			-moz-pointer-events: none;
			-webkit-pointer-events: none;
			-ms-pointer-events: none;
			pointer-events: none;
			opacity: 0.25;
		}

		@media screen and (max-width: 480px) {

			input[type="submit"],
			input[type="reset"],
			input[type="button"],
			button,
			.button {
				padding: 0;
			}

		}

	input[type="submit"],
	input[type="reset"],
	input[type="button"],
	button,
	.button {
		background-color: #5a5a5a;
		color: #ffffff !important;
	}

		input[type="submit"]:hover,
		input[type="reset"]:hover,
		input[type="button"]:hover,
		button:hover,
		.button:hover {
			background-color: #676767;
		}

		input[type="submit"]:active,
		input[type="reset"]:active,
		input[type="button"]:active,
		button:active,
		.button:active {
			background-color: #4d4d4d;
		}

		input[type="submit"].alt,
		input[type="reset"].alt,
		input[type="button"].alt,
		button.alt,
		.button.alt {
			background-color: transparent;
			box-shadow: inset 0 0 0 2px rgba(144, 144, 144, 0.25);
			color: #fff !important;
		}

			input[type="submit"].alt:hover,
			input[type="reset"].alt:hover,
			input[type="button"].alt:hover,
			button.alt:hover,
			.button.alt:hover {
				background-color: rgba(144, 144, 144, 0.075);
			}

			input[type="submit"].alt:active,
			input[type="reset"].alt:active,
			input[type="button"].alt:active,
			button.alt:active,
			.button.alt:active {
				background-color: rgba(144, 144, 144, 0.2);
			}

			input[type="submit"].alt.icon:before,
			input[type="reset"].alt.icon:before,
			input[type="button"].alt.icon:before,
			button.alt.icon:before,
			.button.alt.icon:before {
				color: rgba(255, 255, 255, 0.5);
			}

		input[type="submit"].special,
		input[type="reset"].special,
		input[type="button"].special,
		button.special,
		.button.special {
			background-color: #9D75CB;
			color: #ffffff !important;
		}

			input[type="submit"].special:hover,
			input[type="reset"].special:hover,
			input[type="button"].special:hover,
			button.special:hover,
			.button.special:hover {
				background-color: #f75f5f;
			}

			input[type="submit"].special:active,
			input[type="reset"].special:active,
			input[type="button"].special:active,
			button.special:active,
			.button.special:active {
				background-color: #f52f2f;
			}

/* Flex */

	.flex {
		display: -ms-flexbox;
		-ms-flex-pack: justify;
		display: -moz-flex;
		display: -webkit-flex;
		display: -ms-flex;
		display: flex;
		-moz-flex-wrap: wrap;
		-webkit-flex-wrap: wrap;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		-moz-justify-content: space-between;
		-webkit-justify-content: space-between;
		-ms-justify-content: space-between;
		justify-content: space-between;
	}

		.flex.flex-2, .flex.flex-3 {
			-moz-align-items: stretch;
			-webkit-align-items: stretch;
			-ms-align-items: stretch;
			align-items: stretch;
		}

			.flex.flex-2.center, .flex.flex-3.center {
				-moz-align-items: center;
				-webkit-align-items: center;
				-ms-align-items: center;
				align-items: center;
			}

		.flex.flex-2 .col {
			width: 48%;
		}

			.flex.flex-2 .col.col1 {
				width: 30%;
			}

			.flex.flex-2 .col.col2 {
				width: 66%;
			}

			@media screen and (max-width: 736px) {

				.flex.flex-2 .col.col1, .flex.flex-2 .col.col2 {
					width: 100%;
					margin-bottom: 2em;
				}

					.flex.flex-2 .col.col1 .image, .flex.flex-2 .col.col2 .image {
						max-width: 60%;
						margin: 0 auto 2em auto;
					}

			}

		.flex.flex-3 .col {
			width: 28%;
		}

			@media screen and (max-width: 736px) {

				.flex.flex-3 .col {
					width: 100%;
					margin-bottom: 2em;
				}

					.flex.flex-3 .col .image {
						max-width: 60%;
						margin: 0 auto 2em auto;
					}

			}

		.flex.flex-4 .col {
			width: 22%;
		}

		.flex.flex-tabs {
			-moz-flex-wrap: nowrap;
			-webkit-flex-wrap: nowrap;
			-ms-flex-wrap: nowrap;
			flex-wrap: nowrap;
		}

			.flex.flex-tabs ul {
				width: 20%;
			}

			.flex.flex-tabs .tabs {
				width: 77%;
			}

		@media screen and (max-width: 980px) {

			.flex.flex-4 .col {
				width: 48%;
			}

			.flex.flex-tabs ul {
				width: 30%;
			}

			.flex.flex-tabs .tabs {
				width: 67%;
			}

			.flex.flex-tabs .flex-3 .col {
				width: 48%;
			}

		}

		@media screen and (max-width: 736px) {

			.flex.flex-2 .col, .flex.flex-3 .col, .flex.flex-4 .col {
				width: 100%;
				-moz-order: 2;
				-webkit-order: 2;
				-ms-order: 2;
				order: 2;
			}

				.flex.flex-2 .col.first, .flex.flex-3 .col.first, .flex.flex-4 .col.first {
					-moz-order: 1;
					-webkit-order: 1;
					-ms-order: 1;
					order: 1;
				}

			.flex.flex-tabs {
				-moz-flex-wrap: wrap;
				-webkit-flex-wrap: wrap;
				-ms-flex-wrap: wrap;
				flex-wrap: wrap;
			}

				.flex.flex-tabs ul {
					width: 100%;
				}

				.flex.flex-tabs .tabs {
					width: 100%;
				}

				.flex.flex-tabs .flex-3 .col {
					width: 100%;
				}

		}

/* Form */

	form {
		margin: 0 0 2em 0;
	}

		form .field {
			margin-bottom: 1.5em;
		}

			form .field.half {
				display: inline-block;
				width: 48%;
			}

				form .field.half.first {
					margin-right: 3%;
				}

		@media screen and (max-width: 980px) {

			form .field.half {
				display: block;
				width: 100%;
			}

				form .field.half.first {
					margin-right: 0;
				}

		}

	label {
		display: block;
		font-size: 0.9em;
		font-weight: 300;
		margin: 0 0 1em 0;
	}

	input[type="text"],
	input[type="password"],
	input[type="email"],
	select,
	textarea {
		-moz-appearance: none;
		-webkit-appearance: none;
		-ms-appearance: none;
		appearance: none;
		border-radius: 4px;
		border: none;
		border: solid 1px;
		color: inherit;
		display: block;
		outline: 0;
		padding: 0 1em;
		text-decoration: none;
		width: 100%;
	}

		input[type="text"]:invalid,
		input[type="password"]:invalid,
		input[type="email"]:invalid,
		select:invalid,
		textarea:invalid {
			box-shadow: none;
		}

	.select-wrapper {
		text-decoration: none;
		display: block;
		position: relative;
	}

		.select-wrapper:before {
			-moz-osx-font-smoothing: grayscale;
			-webkit-font-smoothing: antialiased;
			font-family: FontAwesome;
			font-style: normal;
			font-weight: normal;
			text-transform: none !important;
		}

		.select-wrapper:before {
			content: 'f078';
			display: block;
			height: 2.75em;
			line-height: 2.75em;
			pointer-events: none;
			position: absolute;
			right: 0;
			text-align: center;
			top: 0;
			width: 2.75em;
		}

		.select-wrapper select::-ms-expand {
			display: none;
		}

	input[type="text"],
	input[type="password"],
	input[type="email"],
	select {
		height: 2.75em;
	}

	textarea {
		padding: 0.75em 1em;
	}

	input[type="checkbox"],
	input[type="radio"] {
		-moz-appearance: none;
		-webkit-appearance: none;
		-ms-appearance: none;
		appearance: none;
		display: block;
		float: left;
		margin-right: -2em;
		opacity: 0;
		width: 1em;
		z-index: -1;
	}

		input[type="checkbox"] + label,
		input[type="radio"] + label {
			text-decoration: none;
			cursor: pointer;
			display: inline-block;
			font-size: 1em;
			font-weight: 300;
			padding-left: 2.4em;
			padding-right: 0.75em;
			position: relative;
		}

			input[type="checkbox"] + label:before,
			input[type="radio"] + label:before {
				-moz-osx-font-smoothing: grayscale;
				-webkit-font-smoothing: antialiased;
				font-family: FontAwesome;
				font-style: normal;
				font-weight: normal;
				text-transform: none !important;
			}

			input[type="checkbox"] + label:before,
			input[type="radio"] + label:before {
				border-radius: 4px;
				border: solid 1px;
				content: '';
				display: inline-block;
				height: 1.65em;
				left: 0;
				line-height: 1.58125em;
				position: absolute;
				text-align: center;
				top: 0;
				width: 1.65em;
			}

		input[type="checkbox"]:checked + label:before,
		input[type="radio"]:checked + label:before {
			content: 'f00c';
		}

	input[type="checkbox"] + label:before {
		border-radius: 4px;
	}

	input[type="radio"] + label:before {
		border-radius: 100%;
	}

	::-webkit-input-placeholder {
		opacity: 1.0;
	}

	:-moz-placeholder {
		opacity: 1.0;
	}

	::-moz-placeholder {
		opacity: 1.0;
	}

	:-ms-input-placeholder {
		opacity: 1.0;
	}

	.formerize-placeholder {
		opacity: 1.0;
	}

	label {
		color: #fff;
	}

	input[type="text"],
	input[type="password"],
	input[type="email"],
	select,
	textarea {
		background: rgba(144, 144, 144, 0.075);
		border-color: rgba(144, 144, 144, 0.25);
	}

		input[type="text"]:focus,
		input[type="password"]:focus,
		input[type="email"]:focus,
		select:focus,
		textarea:focus {
			border-color: #9D75CB;
			box-shadow: 0 0 0 1px #9D75CB;
		}

	.select-wrapper:before {
		color: rgba(144, 144, 144, 0.25);
	}

	input[type="checkbox"] + label,
	input[type="radio"] + label {
		color: rgba(255, 255, 255, 0.75);
	}

		input[type="checkbox"] + label:before,
		input[type="radio"] + label:before {
			background: rgba(144, 144, 144, 0.075);
			border-color: rgba(144, 144, 144, 0.25);
		}

	input[type="checkbox"]:checked + label:before,
	input[type="radio"]:checked + label:before {
		background-color: #9D75CB;
		border-color: #9D75CB;
		color: #ffffff;
	}

	input[type="checkbox"]:focus + label:before,
	input[type="radio"]:focus + label:before {
		border-color: #9D75CB;
		box-shadow: 0 0 0 1px #9D75CB;
	}

	::-webkit-input-placeholder {
		color: rgba(255, 255, 255, 0.5) !important;
	}

	:-moz-placeholder {
		color: rgba(255, 255, 255, 0.5) !important;
	}

	::-moz-placeholder {
		color: rgba(255, 255, 255, 0.5) !important;
	}

	:-ms-input-placeholder {
		color: rgba(255, 255, 255, 0.5) !important;
	}

	.formerize-placeholder {
		color: rgba(255, 255, 255, 0.5) !important;
	}

/* Icon */

	.icon {
		text-decoration: none;
		border-bottom: none;
		position: relative;
	}

		.icon:before {
			-moz-osx-font-smoothing: grayscale;
			-webkit-font-smoothing: antialiased;
			font-family: FontAwesome;
			font-style: normal;
			font-weight: normal;
			text-transform: none !important;
		}

		.icon > .label {
			display: none;
		}

/* Image */

	.image {
		border-radius: 4px;
		border: 0;
		display: inline-block;
		position: relative;
	}

		.image img {
			border-radius: 4px;
			display: block;
		}

		.image.left, .image.right {
			max-width: 40%;
		}

			.image.left img, .image.right img {
				width: 100%;
			}

		.image.left {
			float: left;
			margin: 0 1.5em 1em 0;
			top: 0.25em;
		}

		.image.right {
			float: right;
			margin: 0 0 1em 1.5em;
			top: 0.25em;
		}

		.image.fit {
			display: block;
			margin: 0 0 2em 0;
			width: 100%;
		}

			.image.fit img {
				width: 100%;
			}

		.image.main {
			display: block;
			margin: 0 0 3em 0;
			width: 100%;
		}

			.image.main img {
				width: 100%;
			}

/* List */

	ol {
		list-style: decimal;
		margin: 0 0 2em 0;
		padding-left: 1.25em;
	}

		ol li {
			padding-left: 0.25em;
		}

	ul {
		list-style: disc;
		margin: 0 0 2em 0;
		padding-left: 1em;
	}

		ul li {
			padding-left: 0.5em;
		}

		ul.alt {
			list-style: none;
			padding-left: 0;
		}

			ul.alt li {
				border-top: solid 1px;
				padding: 0.5em 0;
			}

				ul.alt li:first-child {
					border-top: 0;
					padding-top: 0;
				}

		ul.icons {
			cursor: default;
			list-style: none;
			padding-left: 0;
		}

			ul.icons li {
				display: inline-block;
				padding: 0 1em 0 0;
			}

				ul.icons li:last-child {
					padding-right: 0;
				}

				ul.icons li .icon:before {
					font-size: 2em;
				}

		ul.actions {
			cursor: default;
			list-style: none;
			padding-left: 0;
		}

			ul.actions li {
				display: inline-block;
				padding: 0 1em 0 0;
				vertical-align: middle;
			}

				ul.actions li:last-child {
					padding-right: 0;
				}

			ul.actions.small li {
				padding: 0 0.5em 0 0;
			}

			ul.actions.vertical li {
				display: block;
				padding: 1em 0 0 0;
			}

				ul.actions.vertical li:first-child {
					padding-top: 0;
				}

				ul.actions.vertical li > * {
					margin-bottom: 0;
				}

			ul.actions.vertical.small li {
				padding: 0.5em 0 0 0;
			}

				ul.actions.vertical.small li:first-child {
					padding-top: 0;
				}

			ul.actions.fit {
				display: table;
				margin-left: -1em;
				padding: 0;
				table-layout: fixed;
				width: calc(100% + 1em);
			}

				ul.actions.fit li {
					display: table-cell;
					padding: 0 0 0 1em;
				}

					ul.actions.fit li > * {
						margin-bottom: 0;
					}

				ul.actions.fit.small {
					margin-left: -0.5em;
					width: calc(100% + 0.5em);
				}

					ul.actions.fit.small li {
						padding: 0 0 0 0.5em;
					}

			@media screen and (max-width: 480px) {

				ul.actions {
					margin: 0 0 2em 0;
				}

					ul.actions li {
						padding: 1em 0 0 0;
						display: block;
						text-align: center;
						width: 100%;
					}

						ul.actions li:first-child {
							padding-top: 0;
						}

						ul.actions li > * {
							width: 100%;
							margin: 0 !important;
						}

							ul.actions li > *.icon:before {
								margin-left: -2em;
							}

					ul.actions.small li {
						padding: 0.5em 0 0 0;
					}

						ul.actions.small li:first-child {
							padding-top: 0;
						}

			}

	dl {
		margin: 0 0 2em 0;
	}

		dl dt {
			display: block;
			font-weight: 600;
			margin: 0 0 1em 0;
		}

		dl dd {
			margin-left: 2em;
		}

	ul.alt li {
		border-top-color: rgba(144, 144, 144, 0.25);
	}

/* Section/Article */

	section.special, article.special {
		text-align: center;
	}

	header p {
		position: relative;
		margin: 0 0 1.5em 0;
	}

	header h2 + p {
		font-size: 1.25em;
		margin-top: -1em;
	}

	header h3 + p {
		font-size: 1.1em;
		margin-top: -0.8em;
	}

	header h4 + p,
	header h5 + p,
	header h6 + p {
		font-size: 0.9em;
		margin-top: -0.6em;
	}

	header p {
		color: rgba(255, 255, 255, 0.5);
	}

/* Table */

	.table-wrapper {
		-webkit-overflow-scrolling: touch;
		overflow-x: auto;
	}

	table {
		margin: 0 0 2em 0;
		width: 100%;
	}

		table tbody tr {
			border: solid 1px;
			border-left: 0;
			border-right: 0;
		}

		table td {
			padding: 0.75em 0.75em;
		}

		table th {
			font-size: 0.9em;
			font-weight: 600;
			padding: 0 0.75em 0.75em 0.75em;
			text-align: left;
		}

		table thead {
			border-bottom: solid 2px;
		}

		table tfoot {
			border-top: solid 2px;
		}

		table.alt {
			border-collapse: separate;
		}

			table.alt tbody tr td {
				border: solid 1px;
				border-left-width: 0;
				border-top-width: 0;
			}

				table.alt tbody tr td:first-child {
					border-left-width: 1px;
				}

			table.alt tbody tr:first-child td {
				border-top-width: 1px;
			}

			table.alt thead {
				border-bottom: 0;
			}

			table.alt tfoot {
				border-top: 0;
			}

	table tbody tr {
		border-color: rgba(144, 144, 144, 0.25);
	}

		table tbody tr:nth-child(2n + 1) {
			background-color: rgba(144, 144, 144, 0.075);
		}

	table th {
		color: #fff;
	}

	table thead {
		border-bottom-color: rgba(144, 144, 144, 0.25);
	}

	table tfoot {
		border-top-color: rgba(144, 144, 144, 0.25);
	}

	table.alt tbody tr td {
		border-color: rgba(144, 144, 144, 0.25);
	}

/* Wrapper */

	.wrapper {
		padding: 6em 0;
		position: relative;
	}

		.wrapper.style1 {
			background-color: #9D75CB;
			color: #fdd1d1;
		}

			.wrapper.style1 input, .wrapper.style1 select, .wrapper.style1 textarea {
				color: #ffffff;
			}

			.wrapper.style1 a {
				color: #ffffff;
			}

			.wrapper.style1 strong, .wrapper.style1 b {
				color: #ffffff;
			}

			.wrapper.style1 h1, .wrapper.style1 h2, .wrapper.style1 h3, .wrapper.style1 h4, .wrapper.style1 h5, .wrapper.style1 h6 {
				color: #ffffff;
			}

			.wrapper.style1 blockquote {
				border-left-color: rgba(255, 255, 255, 0.25);
			}

			.wrapper.style1 code {
				background: rgba(255, 255, 255, 0.075);
				border-color: rgba(255, 255, 255, 0.25);
			}

			.wrapper.style1 hr {
				border-bottom-color: rgba(255, 255, 255, 0.25);
			}

			.wrapper.style1 input[type="submit"],
			.wrapper.style1 input[type="reset"],
			.wrapper.style1 input[type="button"],
			.wrapper.style1 button,
			.wrapper.style1 .button {
				background-color: #5a5a5a;
				color: #ffffff !important;
			}

				.wrapper.style1 input[type="submit"]:hover,
				.wrapper.style1 input[type="reset"]:hover,
				.wrapper.style1 input[type="button"]:hover,
				.wrapper.style1 button:hover,
				.wrapper.style1 .button:hover {
					background-color: #676767;
				}

				.wrapper.style1 input[type="submit"]:active,
				.wrapper.style1 input[type="reset"]:active,
				.wrapper.style1 input[type="button"]:active,
				.wrapper.style1 button:active,
				.wrapper.style1 .button:active {
					background-color: #4d4d4d;
				}

				.wrapper.style1 input[type="submit"].alt,
				.wrapper.style1 input[type="reset"].alt,
				.wrapper.style1 input[type="button"].alt,
				.wrapper.style1 button.alt,
				.wrapper.style1 .button.alt {
					background-color: transparent;
					box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.25);
					color: #ffffff !important;
				}

					.wrapper.style1 input[type="submit"].alt:hover,
					.wrapper.style1 input[type="reset"].alt:hover,
					.wrapper.style1 input[type="button"].alt:hover,
					.wrapper.style1 button.alt:hover,
					.wrapper.style1 .button.alt:hover {
						background-color: rgba(255, 255, 255, 0.075);
					}

					.wrapper.style1 input[type="submit"].alt:active,
					.wrapper.style1 input[type="reset"].alt:active,
					.wrapper.style1 input[type="button"].alt:active,
					.wrapper.style1 button.alt:active,
					.wrapper.style1 .button.alt:active {
						background-color: rgba(255, 255, 255, 0.2);
					}

					.wrapper.style1 input[type="submit"].alt.icon:before,
					.wrapper.style1 input[type="reset"].alt.icon:before,
					.wrapper.style1 input[type="button"].alt.icon:before,
					.wrapper.style1 button.alt.icon:before,
					.wrapper.style1 .button.alt.icon:before {
						color: #fbb5b5;
					}

				.wrapper.style1 input[type="submit"].special,
				.wrapper.style1 input[type="reset"].special,
				.wrapper.style1 input[type="button"].special,
				.wrapper.style1 button.special,
				.wrapper.style1 .button.special {
					background-color: #ffffff;
					color: #9D75CB !important;
				}

			.wrapper.style1 label {
				color: #ffffff;
			}

			.wrapper.style1 input[type="text"],
			.wrapper.style1 input[type="password"],
			.wrapper.style1 input[type="email"],
			.wrapper.style1 select,
			.wrapper.style1 textarea {
				background: rgba(255, 255, 255, 0.075);
				border-color: rgba(255, 255, 255, 0.25);
			}

				.wrapper.style1 input[type="text"]:focus,
				.wrapper.style1 input[type="password"]:focus,
				.wrapper.style1 input[type="email"]:focus,
				.wrapper.style1 select:focus,
				.wrapper.style1 textarea:focus {
					border-color: #ffffff;
					box-shadow: 0 0 0 1px #ffffff;
				}

			.wrapper.style1 .select-wrapper:before {
				color: rgba(255, 255, 255, 0.25);
			}

			.wrapper.style1 input[type="checkbox"] + label,
			.wrapper.style1 input[type="radio"] + label {
				color: #fdd1d1;
			}

				.wrapper.style1 input[type="checkbox"] + label:before,
				.wrapper.style1 input[type="radio"] + label:before {
					background: rgba(255, 255, 255, 0.075);
					border-color: rgba(255, 255, 255, 0.25);
				}

			.wrapper.style1 input[type="checkbox"]:checked + label:before,
			.wrapper.style1 input[type="radio"]:checked + label:before {
				background-color: #ffffff;
				border-color: #ffffff;
				color: #9D75CB;
			}

			.wrapper.style1 input[type="checkbox"]:focus + label:before,
			.wrapper.style1 input[type="radio"]:focus + label:before {
				border-color: #ffffff;
				box-shadow: 0 0 0 1px #ffffff;
			}

			.wrapper.style1 ::-webkit-input-placeholder {
				color: #fbb5b5 !important;
			}

			.wrapper.style1 :-moz-placeholder {
				color: #fbb5b5 !important;
			}

			.wrapper.style1 ::-moz-placeholder {
				color: #fbb5b5 !important;
			}

			.wrapper.style1 :-ms-input-placeholder {
				color: #fbb5b5 !important;
			}

			.wrapper.style1 .formerize-placeholder {
				color: #fbb5b5 !important;
			}

			.wrapper.style1 ul.alt li {
				border-top-color: rgba(255, 255, 255, 0.25);
			}

			.wrapper.style1 header p {
				color: #fbb5b5;
			}

			.wrapper.style1 table tbody tr {
				border-color: rgba(255, 255, 255, 0.25);
			}

				.wrapper.style1 table tbody tr:nth-child(2n + 1) {
					background-color: rgba(255, 255, 255, 0.075);
				}

			.wrapper.style1 table th {
				color: #ffffff;
			}

			.wrapper.style1 table thead {
				border-bottom-color: rgba(255, 255, 255, 0.25);
			}

			.wrapper.style1 table tfoot {
				border-top-color: rgba(255, 255, 255, 0.25);
			}

			.wrapper.style1 table.alt tbody tr td {
				border-color: rgba(255, 255, 255, 0.25);
			}

		.wrapper.style2 {
			background-color: #5a5a5a;
			color: #d6d6d6;
		}

			.wrapper.style2 input, .wrapper.style2 select, .wrapper.style2 textarea {
				color: #ffffff;
			}

			.wrapper.style2 a {
				color: #9D75CB;
			}

			.wrapper.style2 strong, .wrapper.style2 b {
				color: #ffffff;
			}

			.wrapper.style2 h1, .wrapper.style2 h2, .wrapper.style2 h3, .wrapper.style2 h4, .wrapper.style2 h5, .wrapper.style2 h6 {
				color: #ffffff;
			}

			.wrapper.style2 blockquote {
				border-left-color: rgba(255, 255, 255, 0.15);
			}

			.wrapper.style2 code {
				background: rgba(255, 255, 255, 0.075);
				border-color: rgba(255, 255, 255, 0.15);
			}

			.wrapper.style2 hr {
				border-bottom-color: rgba(255, 255, 255, 0.15);
			}

			.wrapper.style2 input[type="submit"],
			.wrapper.style2 input[type="reset"],
			.wrapper.style2 input[type="button"],
			.wrapper.style2 button,
			.wrapper.style2 .button {
				background-color: #ffffff;
				color: #5a5a5a !important;
			}

				.wrapper.style2 input[type="submit"].alt,
				.wrapper.style2 input[type="reset"].alt,
				.wrapper.style2 input[type="button"].alt,
				.wrapper.style2 button.alt,
				.wrapper.style2 .button.alt {
					background-color: transparent;
					box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.15);
					color: #ffffff !important;
				}

					.wrapper.style2 input[type="submit"].alt:hover,
					.wrapper.style2 input[type="reset"].alt:hover,
					.wrapper.style2 input[type="button"].alt:hover,
					.wrapper.style2 button.alt:hover,
					.wrapper.style2 .button.alt:hover {
						background-color: rgba(255, 255, 255, 0.075);
					}

					.wrapper.style2 input[type="submit"].alt:active,
					.wrapper.style2 input[type="reset"].alt:active,
					.wrapper.style2 input[type="button"].alt:active,
					.wrapper.style2 button.alt:active,
					.wrapper.style2 .button.alt:active {
						background-color: rgba(255, 255, 255, 0.2);
					}

					.wrapper.style2 input[type="submit"].alt.icon:before,
					.wrapper.style2 input[type="reset"].alt.icon:before,
					.wrapper.style2 input[type="button"].alt.icon:before,
					.wrapper.style2 button.alt.icon:before,
					.wrapper.style2 .button.alt.icon:before {
						color: #bdbdbd;
					}

				.wrapper.style2 input[type="submit"].special,
				.wrapper.style2 input[type="reset"].special,
				.wrapper.style2 input[type="button"].special,
				.wrapper.style2 button.special,
				.wrapper.style2 .button.special {
					background-color: #9D75CB;
					color: #ffffff !important;
				}

					.wrapper.style2 input[type="submit"].special:hover,
					.wrapper.style2 input[type="reset"].special:hover,
					.wrapper.style2 input[type="button"].special:hover,
					.wrapper.style2 button.special:hover,
					.wrapper.style2 .button.special:hover {
						background-color: #f75f5f;
					}

					.wrapper.style2 input[type="submit"].special:active,
					.wrapper.style2 input[type="reset"].special:active,
					.wrapper.style2 input[type="button"].special:active,
					.wrapper.style2 button.special:active,
					.wrapper.style2 .button.special:active {
						background-color: #f52f2f;
					}

			.wrapper.style2 label {
				color: #ffffff;
			}

			.wrapper.style2 input[type="text"],
			.wrapper.style2 input[type="password"],
			.wrapper.style2 input[type="email"],
			.wrapper.style2 select,
			.wrapper.style2 textarea {
				background: rgba(255, 255, 255, 0.075);
				border-color: rgba(255, 255, 255, 0.15);
			}

				.wrapper.style2 input[type="text"]:focus,
				.wrapper.style2 input[type="password"]:focus,
				.wrapper.style2 input[type="email"]:focus,
				.wrapper.style2 select:focus,
				.wrapper.style2 textarea:focus {
					border-color: #9D75CB;
					box-shadow: 0 0 0 1px #9D75CB;
				}

			.wrapper.style2 .select-wrapper:before {
				color: rgba(255, 255, 255, 0.15);
			}

			.wrapper.style2 input[type="checkbox"] + label,
			.wrapper.style2 input[type="radio"] + label {
				color: #d6d6d6;
			}

				.wrapper.style2 input[type="checkbox"] + label:before,
				.wrapper.style2 input[type="radio"] + label:before {
					background: rgba(255, 255, 255, 0.075);
					border-color: rgba(255, 255, 255, 0.15);
				}

			.wrapper.style2 input[type="checkbox"]:checked + label:before,
			.wrapper.style2 input[type="radio"]:checked + label:before {
				background-color: #9D75CB;
				border-color: #9D75CB;
				color: #ffffff;
			}

			.wrapper.style2 input[type="checkbox"]:focus + label:before,
			.wrapper.style2 input[type="radio"]:focus + label:before {
				border-color: #9D75CB;
				box-shadow: 0 0 0 1px #9D75CB;
			}

			.wrapper.style2 ::-webkit-input-placeholder {
				color: #bdbdbd !important;
			}

			.wrapper.style2 :-moz-placeholder {
				color: #bdbdbd !important;
			}

			.wrapper.style2 ::-moz-placeholder {
				color: #bdbdbd !important;
			}

			.wrapper.style2 :-ms-input-placeholder {
				color: #bdbdbd !important;
			}

			.wrapper.style2 .formerize-placeholder {
				color: #bdbdbd !important;
			}

			.wrapper.style2 ul.alt li {
				border-top-color: rgba(255, 255, 255, 0.15);
			}

			.wrapper.style2 header p {
				color: #bdbdbd;
			}

			.wrapper.style2 table tbody tr {
				border-color: rgba(255, 255, 255, 0.15);
			}

				.wrapper.style2 table tbody tr:nth-child(2n + 1) {
					background-color: rgba(255, 255, 255, 0.075);
				}

			.wrapper.style2 table th {
				color: #ffffff;
			}

			.wrapper.style2 table thead {
				border-bottom-color: rgba(255, 255, 255, 0.15);
			}

			.wrapper.style2 table tfoot {
				border-top-color: rgba(255, 255, 255, 0.15);
			}

			.wrapper.style2 table.alt tbody tr td {
				border-color: rgba(255, 255, 255, 0.15);
			}

		@media screen and (max-width: 980px) {

			.wrapper {
				padding: 4em 0;
			}

		}

		@media screen and (max-width: 736px) {

			.wrapper {
				padding: 2em 0;
			}

		}

/* Header */

	body.subpage {
		padding-top: 3.125em;
	}

	@-moz-keyframes reveal-header {
		0% {
			top: -4em;
			opacity: 0;
		}

		100% {
			top: 0;
			opacity: 1;
		}
	}

	@-webkit-keyframes reveal-header {
		0% {
			top: -4em;
			opacity: 0;
		}

		100% {
			top: 0;
			opacity: 1;
		}
	}

	@-ms-keyframes reveal-header {
		0% {
			top: -4em;
			opacity: 0;
		}

		100% {
			top: 0;
			opacity: 1;
		}
	}

	@keyframes reveal-header {
		0% {
			top: -4em;
			opacity: 0;
		}

		100% {
			top: 0;
			opacity: 1;
		}
	}

	#header {
		background-color: transparent;
		color: #fdd1d1;
		cursor: default;
		height: 3.25em;
		left: 0;
		line-height: 3.25em;
		position: fixed;
		text-align: right;
		top: 1em;
		width: 100%;
		z-index: 10001;
		padding: 0 1.5em;
	}

		#header.alt {
			top: 0;
			background: #9D75CB;
		}

		#header .logo {
			display: inline-block;
			height: inherit;
			left: 1.5em;
			line-height: inherit;
			margin: 0;
			padding: 0;
			position: absolute;
			top: 0;
		}

			#header .logo a {
				font-size: 1.25em;
				color: #fff;
				font-weight: 600;
				text-decoration: none;
			}

				#header .logo a:hover {
					color: #fff;
				}

			#header .logo span {
				font-weight: 300;
				font-size: .8em;
				color: #FFF;
			}

		#header > a {
			-moz-transition: color 0.2s ease-in-out;
			-webkit-transition: color 0.2s ease-in-out;
			-ms-transition: color 0.2s ease-in-out;
			transition: color 0.2s ease-in-out;
			display: inline-block;
			color: inherit;
			text-decoration: none;
		}

			#header > a[href="#menu"] {
				text-decoration: none;
				-webkit-tap-highlight-color: transparent;
				background: rgba(255, 255, 255, 0.15);
				border-radius: 100%;
				height: 2.5em;
				width: 2.5em;
				line-height: 2.5em;
				color: #FFF;
				text-align: center;
			}


				#header > a[href="#menu"]:hover {
					color: rgba(255, 255, 255, 0.25);
					background: none;
					box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.25);
				}

				#header > a[href="#menu"]:before {
					margin: 0;
				}

				#header > a[href="#menu"] span {
					display: none;
				}

			@media screen and (max-width: 736px) {

				#header > a {
					padding: 0 0.5em;
				}

			}

	@media screen and (max-width: 980px) {

		body.subpage {
			padding-top: 50px;
		}

		#header {
			height: 50px;
			line-height: 50px;
		}

			#header > h1 {
				left: 1em;
			}

				#header > h1 a {
					font-size: 1em;
				}

	}

	@media screen and (max-width: 480px) {

		#header {
			min-width: 320px;
			top: 0;
			font-size: .9em;
			background: rgba(0, 0, 0, 0.9);
		}

	}

/* Menu */

	#menu {
		-moz-transform: translateX(20em);
		-webkit-transform: translateX(20em);
		-ms-transform: translateX(20em);
		transform: translateX(20em);
		-moz-transition: -moz-transform 0.5s ease, box-shadow 0.5s ease, visibility 0.5s;
		-webkit-transition: -webkit-transform 0.5s ease, box-shadow 0.5s ease, visibility 0.5s;
		-ms-transition: -ms-transform 0.5s ease, box-shadow 0.5s ease, visibility 0.5s;
		transition: transform 0.5s ease, box-shadow 0.5s ease, visibility 0.5s;
		-webkit-overflow-scrolling: touch;
		background: #9D75CB;
		box-shadow: none;
		color: #ffffff;
		height: 100%;
		max-width: 80%;
		overflow-y: auto;
		padding: 3em 2em;
		position: fixed;
		right: 0;
		top: 0;
		visibility: hidden;
		width: 20em;
		z-index: 10002;
	}

		#menu > ul {
			margin: 0 0 1em 0;
		}

			#menu > ul.links {
				list-style: none;
				padding: 0;
			}

				#menu > ul.links > li {
					padding: 0;
				}

					#menu > ul.links > li > a:not(.button) {
						border: 0;
						border-top: solid 1px rgba(255, 255, 255, 0.25);
						color: inherit;
						display: block;
						line-height: 3.5em;
						text-decoration: none;
					}

					#menu > ul.links > li > .button {
						display: block;
						margin: 0.5em 0 0 0;
					}

					#menu > ul.links > li:first-child > a:not(.button) {
						border-top: 0 !important;
					}

		#menu .close {
			text-decoration: none;
			-moz-transition: color 0.2s ease-in-out;
			-webkit-transition: color 0.2s ease-in-out;
			-ms-transition: color 0.2s ease-in-out;
			transition: color 0.2s ease-in-out;
			-webkit-tap-highlight-color: transparent;
			border: 0;
			color: #fbb5b5;
			cursor: pointer;
			display: block;
			height: 3.25em;
			line-height: 3.25em;
			padding-right: 1.25em;
			position: absolute;
			right: 0;
			text-align: right;
			top: 0;
			vertical-align: middle;
			width: 7em;
		}

			#menu .close:before {
				content: "";
				-moz-osx-font-smoothing: grayscale;
				-webkit-font-smoothing: antialiased;
				font-family: FontAwesome;
				font-style: normal;
				font-weight: normal;
				text-transform: none !important;
			}

			#menu .close:before {
				font-size: 1.25em;
			}

			#menu .close:hover {
				color: #ffffff;
			}

			@media screen and (max-width: 736px) {

				#menu .close {
					height: 4em;
					line-height: 4em;
				}

			}

		#menu.visible {
			-moz-transform: translateX(0);
			-webkit-transform: translateX(0);
			-ms-transform: translateX(0);
			transform: translateX(0);
			box-shadow: 0 0 1.5em 0 rgba(0, 0, 0, 0.2);
			visibility: visible;
		}

		@media screen and (max-width: 736px) {

			#menu {
				padding: 2.5em 1.75em;
			}

		}

/* Banner */

	#banner {
		display: -ms-flexbox;
		-ms-flex-pack: center;
		-ms-flex-align: center;
		padding: 8em 0 6em 0;
		-moz-align-items: center;
		-webkit-align-items: center;
		-ms-align-items: center;
		align-items: center;
		display: -moz-flex;
		display: -webkit-flex;
		display: -ms-flex;
		display: flex;
		-moz-justify-content: center;
		-webkit-justify-content: center;
		-ms-justify-content: center;
		justify-content: center;
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		background-attachment: fixed;
		border-top: 0;
		min-height: 100vh;
		height: 100vh;
		position: relative;
		text-align: center;
		overflow: hidden;
	}

		#banner .inner {
			-moz-transform: scale(1.0);
			-webkit-transform: scale(1.0);
			-ms-transform: scale(1.0);
			transform: scale(1.0);
			-moz-transition: opacity 1s ease, -moz-transform 1s ease;
			-webkit-transition: opacity 1s ease, -webkit-transform 1s ease;
			-ms-transition: opacity 1s ease, -ms-transform 1s ease;
			transition: opacity 1s ease, transform 1s ease;
			opacity: 1;
			position: relative;
			z-index: 2;
		}

		#banner img {
			height: 12em;
			margin-bottom: 1em;
		}

		#banner h1 {
			font-size: 2em;
			line-height: 1.1;
			font-family: 'Amatic SC';
			margin-bottom: .25em;
			color: rgba(255, 255, 255, 0.75);
			text-shadow: -2px -2px 0 rgba(0, 0, 0, 0.125);
			text-transform: none;
		}

		#banner p {
			color: rgba(255, 255, 255, 0.85);
			font-size: 1.75em;
		}

	@-moz-keyframes more {
		0% {
			bottom: -3em;
		}

		100% {
			bottom: 2em;
		}
	}

	@-webkit-keyframes more {
		0% {
			bottom: -3em;
		}

		100% {
			bottom: 2em;
		}
	}

	@-ms-keyframes more {
		0% {
			bottom: -3em;
		}

		100% {
			bottom: 2em;
		}
	}

	@keyframes more {
		0% {
			bottom: -3em;
		}

		100% {
			bottom: 2em;
		}
	}

		#banner .more {
			-moz-transition: height 0.2s ease;
			-webkit-transition: height 0.2s ease;
			-ms-transition: height 0.2s ease;
			transition: height 0.2s ease;
			-moz-animation: more 0.75s ease-out 3s forwards;
			-webkit-animation: more 0.75s ease-out 3s forwards;
			-ms-animation: more 0.75s ease-out 3s forwards;
			animation: more 0.75s ease-out 3s forwards;
			background-color: rgba(255, 255, 255, 0.15);
			border: 0;
			border-radius: 1em 1em 0 0;
			bottom: -3em;
			color: rgba(255, 255, 255, 0.75);
			display: block;
			height: 3em;
			left: 50%;
			margin-left: -1.5em;
			overflow: hidden;
			position: absolute;
			text-indent: 3em;
			white-space: nowrap;
			width: 3em;
			z-index: 2;
			border-radius: 100%;
			text-decoration: none;
		}

			#banner .more:before {
				-moz-osx-font-smoothing: grayscale;
				-webkit-font-smoothing: antialiased;
				font-family: FontAwesome;
				font-style: normal;
				font-weight: normal;
				text-transform: none !important;
			}

			#banner .more:hover {
				background: none;
				color: rgba(255, 255, 255, 0.5);
				box-shadow: 0 0 1px 0 rgba(255, 255, 255, 0.5);
			}

				#banner .more:hover:before {
					color: rgba(255, 255, 255, 0.5);
				}

			#banner .more:before {
				content: 'f107';
				color: #FFF;
				font-size: 2em;
				position: absolute;
				right: .425em;
				bottom: -.075em;
			}

		#banner:before {
			-moz-transition: opacity 3s ease;
			-webkit-transition: opacity 3s ease;
			-ms-transition: opacity 3s ease;
			transition: opacity 3s ease;
			-moz-transition-delay: 1.25s;
			-webkit-transition-delay: 1.25s;
			-ms-transition-delay: 1.25s;
			transition-delay: 1.25s;
			content: '';
			display: block;
			background-color: #000;
			height: 100%;
			left: 0;
			opacity: 0.45;
			position: absolute;
			top: 0;
			width: 100%;
			z-index: 1;
		}

		@media screen and (max-width: 980px) {

			#banner {
				font-size: .85em;
			}

				#banner br {
					display: none;
				}

		}

		@media screen and (max-width: 736px) {

			#banner {
				background-attachment: scroll;
				min-height: 0;
				padding: 8em 2em 4em 2em;
			}

				#banner h1 {
					font-size: 6em;
				}

		}

		@media screen and (max-width: 480px) {

			#banner h1 {
				font-size: 4em;
			}

			#banner .more {
				display: none;
			}

		}

		body.is-loading #banner .inner {
			-moz-transform: scale(0.99);
			-webkit-transform: scale(0.99);
			-ms-transform: scale(0.99);
			transform: scale(0.99);
			opacity: 0;
		}

		body.is-loading #banner:before {
			opacity: 1;
		}

/* Banner */

	#post {
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		background-attachment: fixed;
	}

		#post .inner {
			margin: 0 auto;
		}

		#post .button.icon {
			padding: 0;
			width: 3em;
			height: 3em;
			line-height: 3em;
			border-radius: 100%;
			text-align: center;
		}

			#post .button.icon:before {
				margin-right: 0;
				color: #FFF;
			}

			#post .button.icon.fa-chevron-left:before {
				margin-left: -3px;
			}

			#post .button.icon.fa-chevron-right:before {
				margin-left: 3px;
			}

		#post ul.actions li {
			width: 49.5%;
			margin: 0;
			padding: 0;
		}

			#post ul.actions li:first-child {
				text-align: left;
			}

			#post ul.actions li:last-child {
				text-align: right;
			}

		@media screen and (max-width: 736px) {

			#post {
				background-attachment: scroll;
				background-size: cover;
			}

				#post h2 {
					font-size: 1.5em;
				}

		}

		@media screen and (max-width: 480px) {

			#post ul.actions li {
				display: inline-block;
				width: 49%;
				margin: 0;
				padding: 0;
			}

		}

	.post {
		display: -ms-flexbox;
		-ms-flex-pack: center;
		-ms-flex-align: center;
		-moz-align-items: center;
		-webkit-align-items: center;
		-ms-align-items: center;
		align-items: center;
		display: -moz-flex;
		display: -webkit-flex;
		display: -ms-flex;
		display: flex;
		-moz-justify-content: center;
		-webkit-justify-content: center;
		-ms-justify-content: center;
		justify-content: center;
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		background-attachment: fixed;
		border-top: 0;
		min-height: 100vh;
		height: 100vh;
		position: relative;
		text-align: center;
		overflow: hidden;
	}

		.post .box {
			margin: 0;
		}

	@-moz-keyframes inner {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	@-webkit-keyframes inner {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	@-ms-keyframes inner {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	@keyframes inner {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

		.post .inner {
			-moz-transform: scale(1.0);
			-webkit-transform: scale(1.0);
			-ms-transform: scale(1.0);
			transform: scale(1.0);
			-moz-transition: opacity 1.25s ease, -moz-transform 1s ease;
			-webkit-transition: opacity 1.25s ease, -webkit-transform 1s ease;
			-ms-transition: opacity 1.25s ease, -ms-transform 1s ease;
			transition: opacity 1.25s ease, transform 1s ease;
			opacity: 0;
			position: relative;
			z-index: 2;
		}

			.post .inner.current {
				opacity: 1;
			}

		.post:before {
			-moz-transition: opacity 3s ease;
			-webkit-transition: opacity 3s ease;
			-ms-transition: opacity 3s ease;
			transition: opacity 3s ease;
			-moz-transition-delay: 1.25s;
			-webkit-transition-delay: 1.25s;
			-ms-transition-delay: 1.25s;
			transition-delay: 1.25s;
			content: '';
			display: block;
			background-color: #000;
			height: 100%;
			left: 0;
			opacity: 0.45;
			position: absolute;
			top: 0;
			width: 100%;
			z-index: 1;
		}

	@-moz-keyframes more {
		0% {
			bottom: -3em;
		}

		100% {
			bottom: 2em;
		}
	}

	@-webkit-keyframes more {
		0% {
			bottom: -3em;
		}

		100% {
			bottom: 2em;
		}
	}

	@-ms-keyframes more {
		0% {
			bottom: -3em;
		}

		100% {
			bottom: 2em;
		}
	}

	@keyframes more {
		0% {
			bottom: -3em;
		}

		100% {
			bottom: 2em;
		}
	}

		.post .more {
			background-color: rgba(255, 255, 255, 0.15);
			border: 0;
			border-radius: 1em 1em 0 0;
			bottom: -3em;
			color: rgba(255, 255, 255, 0.75);
			display: block;
			height: 3em;
			left: 50%;
			margin-left: -1.5em;
			overflow: hidden;
			position: absolute;
			text-indent: 3em;
			white-space: nowrap;
			width: 3em;
			z-index: 2;
			border-radius: 100%;
			text-decoration: none;
		}

			.post .more:before {
				-moz-osx-font-smoothing: grayscale;
				-webkit-font-smoothing: antialiased;
				font-family: FontAwesome;
				font-style: normal;
				font-weight: normal;
				text-transform: none !important;
			}

			.post .more.current {
				-moz-transition: height 0.2s ease;
				-webkit-transition: height 0.2s ease;
				-ms-transition: height 0.2s ease;
				transition: height 0.2s ease;
				-moz-animation: more 0.75s ease-out 2s forwards;
				-webkit-animation: more 0.75s ease-out 2s forwards;
				-ms-animation: more 0.75s ease-out 2s forwards;
				animation: more 0.75s ease-out 2s forwards;
			}

			.post .more:hover {
				background: none;
				color: rgba(255, 255, 255, 0.5);
				box-shadow: 0 0 1px 0 rgba(255, 255, 255, 0.5);
			}

				.post .more:hover:before {
					color: rgba(255, 255, 255, 0.5);
				}

			.post .more:before {
				content: 'f107';
				color: #FFF;
				font-size: 2em;
				position: absolute;
				right: .425em;
				bottom: -.075em;
			}

		@media screen and (max-width: 980px) {

			@-moz-keyframes more {
				0% {
					bottom: -3em;
				}

				100% {
					bottom: 1.5em;
				}

		}

			@-webkit-keyframes more {
				0% {
					bottom: -3em;
				}

				100% {
					bottom: 1.5em;
				}
			}

			@-ms-keyframes more {
				0% {
					bottom: -3em;
				}

				100% {
					bottom: 1.5em;
				}
			}

			@keyframes more {
				0% {
					bottom: -3em;
				}

				100% {
					bottom: 1.5em;
				}
			} }

		@media screen and (max-width: 736px) {

			.post {
				min-height: 0;
				height: auto;
				background-attachment: scroll;
			}

				.post h2 {
					font-size: 1.5em;
				}

		}

		@media screen and (max-width: 480px) {

			.post h2 {
				font-size: 1.25em;
			}

			.post .more {
				display: none;
			}

			.post .button {
				width: 100%;
			}

		}

/* Main */

	#main {
		padding: 4em 0 2em 0;
	}

		@media screen and (max-width: 736px) {

			#main {
				padding: 3em 0 1em 0;
			}

		}

/* Footer */

	#footer {
		background-color: #9D75CB;
		color: #fdd1d1;
		padding: 6em 0 4em 0;
		background: #9D75CB;
	}

		#footer input, #footer select, #footer textarea {
			color: #ffffff;
		}

		#footer a {
			color: #ffffff;
		}

		#footer strong, #footer b {
			color: #ffffff;
		}

		#footer h1, #footer h2, #footer h3, #footer h4, #footer h5, #footer h6 {
			color: #ffffff;
		}

		#footer blockquote {
			border-left-color: rgba(255, 255, 255, 0.25);
		}

		#footer code {
			background: rgba(255, 255, 255, 0.075);
			border-color: rgba(255, 255, 255, 0.25);
		}

		#footer hr {
			border-bottom-color: rgba(255, 255, 255, 0.25);
		}

		#footer input[type="submit"],
		#footer input[type="reset"],
		#footer input[type="button"],
		#footer button,
		#footer .button {
			background-color: #5a5a5a;
			color: #ffffff !important;
		}

			#footer input[type="submit"]:hover,
			#footer input[type="reset"]:hover,
			#footer input[type="button"]:hover,
			#footer button:hover,
			#footer .button:hover {
				background-color: #676767;
			}

			#footer input[type="submit"]:active,
			#footer input[type="reset"]:active,
			#footer input[type="button"]:active,
			#footer button:active,
			#footer .button:active {
				background-color: #4d4d4d;
			}

			#footer input[type="submit"].alt,
			#footer input[type="reset"].alt,
			#footer input[type="button"].alt,
			#footer button.alt,
			#footer .button.alt {
				background-color: transparent;
				box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.25);
				color: #ffffff !important;
			}

				#footer input[type="submit"].alt:hover,
				#footer input[type="reset"].alt:hover,
				#footer input[type="button"].alt:hover,
				#footer button.alt:hover,
				#footer .button.alt:hover {
					background-color: rgba(255, 255, 255, 0.075);
				}

				#footer input[type="submit"].alt:active,
				#footer input[type="reset"].alt:active,
				#footer input[type="button"].alt:active,
				#footer button.alt:active,
				#footer .button.alt:active {
					background-color: rgba(255, 255, 255, 0.2);
				}

				#footer input[type="submit"].alt.icon:before,
				#footer input[type="reset"].alt.icon:before,
				#footer input[type="button"].alt.icon:before,
				#footer button.alt.icon:before,
				#footer .button.alt.icon:before {
					color: #fbb5b5;
				}

			#footer input[type="submit"].special,
			#footer input[type="reset"].special,
			#footer input[type="button"].special,
			#footer button.special,
			#footer .button.special {
				background-color: #ffffff;
				color: #9D75CB !important;
			}

		#footer label {
			color: #ffffff;
		}

		#footer input[type="text"],
		#footer input[type="password"],
		#footer input[type="email"],
		#footer select,
		#footer textarea {
			background: rgba(255, 255, 255, 0.075);
			border-color: rgba(255, 255, 255, 0.25);
		}

			#footer input[type="text"]:focus,
			#footer input[type="password"]:focus,
			#footer input[type="email"]:focus,
			#footer select:focus,
			#footer textarea:focus {
				border-color: #ffffff;
				box-shadow: 0 0 0 1px #ffffff;
			}

		#footer .select-wrapper:before {
			color: rgba(255, 255, 255, 0.25);
		}

		#footer input[type="checkbox"] + label,
		#footer input[type="radio"] + label {
			color: #fdd1d1;
		}

			#footer input[type="checkbox"] + label:before,
			#footer input[type="radio"] + label:before {
				background: rgba(255, 255, 255, 0.075);
				border-color: rgba(255, 255, 255, 0.25);
			}

		#footer input[type="checkbox"]:checked + label:before,
		#footer input[type="radio"]:checked + label:before {
			background-color: #ffffff;
			border-color: #ffffff;
			color: #9D75CB;
		}

		#footer input[type="checkbox"]:focus + label:before,
		#footer input[type="radio"]:focus + label:before {
			border-color: #ffffff;
			box-shadow: 0 0 0 1px #ffffff;
		}

		#footer ::-webkit-input-placeholder {
			color: #fbb5b5 !important;
		}

		#footer :-moz-placeholder {
			color: #fbb5b5 !important;
		}

		#footer ::-moz-placeholder {
			color: #fbb5b5 !important;
		}

		#footer :-ms-input-placeholder {
			color: #fbb5b5 !important;
		}

		#footer .formerize-placeholder {
			color: #fbb5b5 !important;
		}

		#footer ul.alt li {
			border-top-color: rgba(255, 255, 255, 0.25);
		}

		#footer header p {
			color: #fbb5b5;
		}

		#footer table tbody tr {
			border-color: rgba(255, 255, 255, 0.25);
		}

			#footer table tbody tr:nth-child(2n + 1) {
				background-color: rgba(255, 255, 255, 0.075);
			}

		#footer table th {
			color: #ffffff;
		}

		#footer table thead {
			border-bottom-color: rgba(255, 255, 255, 0.25);
		}

		#footer table tfoot {
			border-top-color: rgba(255, 255, 255, 0.25);
		}

		#footer table.alt tbody tr td {
			border-color: rgba(255, 255, 255, 0.25);
		}

		#footer .inner {
			margin: 0 auto;
		}

		#footer h2 {
			margin-bottom: 2em;
			text-align: center;
		}

		#footer .icons {
			text-align: center;
			padding-top: 1em;
		}

		#footer .icon.round {
			display: block;
			background: rgba(255, 255, 255, 0.15);
			border-radius: 100%;
			height: 4em;
			width: 4em;
			line-height: 4em;
			color: #FFF;
		}

			#footer .icon.round:hover {
				color: rgba(255, 255, 255, 0.25);
				background: none;
				box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.25);
			}

		@media screen and (max-width: 736px) {

			#footer {
				padding: 3em 0 1em 0;
			}

		}

`;
