import Logo from "./logo.svg";

let root;

function init() {
	root = document.getElementById("root");
	root.innerHTML = `
            <img src="${Logo}" alt="builder icon" />
            <h1> learning web tooling today! </h1>
            <button id="about">About </button>
            <button id="contact">Contact </button> <!-- homework -->
            <div id="route"></div>
            
`;
}

init();

const button = document.querySelector("#about");
button.addEventListener("click", loadAbout)


function loadAbout() {
    import("./App").then(({ default: App }) => {
        const about = App({ name: "Tanay" });

        document.querySelector("#route").innerHTML = about;
    })
}

