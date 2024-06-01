function foo() {
    console.log("foo");
    const Blockly = require('blockly');
    console.log("Blockly");

    const { forBlock } = require('./generator/javascript.js'); // Corrected path
    const { toolbox } = require('./toolbox.js'); // Ensure correct path for toolbox as well
    require('./renderer/index.html'); // Corrected path
    const { javascriptGenerator } = require('blockly/javascript');

    const blockly = document.getElementById('blocklyDiv');
    Object.assign(javascriptGenerator.forBlock, forBlock);
    const ws = Blockly.inject(blockly, {toolbox}); //Init Library
}
