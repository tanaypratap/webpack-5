import Logo from "./logo.svg";

const root = document.getElementById("root");
const name = "Tanay";
let route;

function init() {
	root.innerHTML = `
        <img src="${Logo}" alt="build icon" />
        <h1> vanillaJS app Builder </h1>
        <button id="about"> About </button>
        <button id="programs"> Programs </button> <!-- homework -->
        <div id="route"></div>
`;

	route = document.querySelector("#route");

	document.querySelector("#about").addEventListener("click", showAboutPage);
}

function showLoader(root) {
	const loader = document.createElement("div");
	loader.innerText = "loading..";
	root.appendChild(loader);
	return loader;
}

function hideLoader(root, loader) {
	root.removeChild(loader);
}

function showAboutPage(event) {
	const loader = showLoader(root);

    // THIS IS THE MAIN CODE FOR LAZY LOADING
	import(/* webpackPrefetch: true */ "./App").then(({ default: App }) => {
		hideLoader(root, loader);
		route.innerHTML = App({ name });
	});
}

init();
