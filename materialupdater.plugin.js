//META{"name":"MaterialUpdater"}*//

class MaterialUpdater {
    getName() {return "MaterialUpdater";} 
    getDescription() {return "Design Updater for the Goddess of love";} 
    getVersion() {return "1.1";} 
    getAuthor() {return "Poulpi";} 

    load() {

    } // Called when the plugin is loaded in to memory


    start() {
        let libraryScript = document.getElementById("ZLibraryScript");
        if (!window.ZLibrary && !libraryScript) {
            if (libraryScript) libraryScript.parentElement.removeChild(libraryScript);
            libraryScript = document.createElement("script");
            libraryScript.setAttribute("type", "text/javascript");
            libraryScript.setAttribute("src", "https://rauenzi.github.io/BDPluginLibrary/release/ZLibrary.js");
            libraryScript.setAttribute("id", "ZLibraryScript");
            document.head.appendChild(libraryScript);
        }

        if (window.ZLibrary) this.initialize();
        else libraryScript.addEventListener("load", () => { this.initialize(); });

        fetch("https://capnkitten.github.io/BetterDiscord/Material-Discord/css/source.css").then(r => r.text())
        .then(r => ZLibrary.PluginUtilities.addStyle("poulpi.", r)).then(r => {
                     ZLibrary.PluginUtilities.addStyle("font.", `* {
    font-family: Whitney,Helvetica Neue,Helvetica, Arial ,sans-serif !important;
}`)
        })


    }

    initialize() { 

    }

    unload() {
        ZLibrary.PluginUtilities.removeStyle("poulpi.")
        ZLibrary.PluginUtilities.removeStyle("font.")

    }

    stop() {
        this.unload()
    }

}
