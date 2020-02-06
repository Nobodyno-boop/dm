//META{"name":"MaterialUpdater"}*//

class MaterialUpdater {
    getName() {return "MaterialUpdater";} 
    getDescription() {return "Design Updater for the Goddess of love ";} 
    getVersion() {return "1..";} 
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
        fetch("https://raw.githubusercontent.com/Poulpinounette/dm/master/theme.css").then(r => r.text()).then(r => ZLibrary.PluginUtilities.addStyle("poulpi.", r))

	}

	initialize() {
        ZLibrary.PluginUpdater.checkForUpdate(this.getName(), this.getVersion(), "https://raw.githubusercontent.com/Poulpinounette/dm/master/materialupdater.plugin.js");
	}

    unload() {
        ZLibrary.PluginUtilities.removeStyle("poulpi.")
    }

    stop() {
        this.unload()
	}

}
