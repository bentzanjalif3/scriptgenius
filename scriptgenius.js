// Create a class named ScriptGenius
class ScriptGenius {
    constructor() {
        this.scripts = [];
    }

    // Method: add a script to the ScriptGenius's collection
    addScript(script) {
        this.scripts.push(script);
        console.log(`Added ${script} to the ScriptGenius's collection.`);
    }

    // Method: remove a script from the ScriptGenius's collection
    removeScript(script) {
        const index = this.scripts.indexOf(script);
        if (index !== -1) {
            this.scripts.splice(index, 1);
            console.log(`Removed ${script} from the ScriptGenius's collection.`);
        } else {
            console.log(`${script} is not found in the ScriptGenius's collection.`);
        }
    }

    // Method: list all scripts in the ScriptGenius's collection
    listScripts() {
        console.log("Scripts in the ScriptGenius's collection:");
        this.scripts.forEach(script => {
            console.log(script);
        });
    }
}

// Create an instance of ScriptGenius named myScriptGenius
const myScriptGenius = new ScriptGenius();

// Add scripts to the ScriptGenius's collection
myScriptGenius.addScript("Script 1");
myScriptGenius.addScript("Script 2");
myScriptGenius.addScript("Script 3");

// List all scripts in the ScriptGenius's collection
myScriptGenius.listScripts();

// Remove a script from the ScriptGenius's collection
myScriptGenius.removeScript("Script 2");

// List all scripts in the ScriptGenius's collection after removal
myScriptGenius.listScripts();
