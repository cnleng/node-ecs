module.exports = function(RED) {
    function NodeECS(n) {
        RED.nodes.createNode(this,n);
        this.host = n.host;
        this.port = n.port;
    }
    RED.nodes.registerType("node-ecs",NodeECS);
}
