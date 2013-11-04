define(function(require){

    var Node = require('./Node');

    var Scene = Node.derive(function(){
        return {

            scene : null,

            // Global material of scene
            material : null,

            // Properties to save the light information in the scene
            // Will be set in the render function
            lightNumber : {},
            lightUniforms : {},

            _nodeRepository : {}

        }
    }, function() {
        this.scene = this;
    }, {

        addToScene : function(node) {
            if (node.name) {
                this._nodeRepository[node.name] = node;
            }
        },

        removeFromScene : function(node) {
            if (node.name) {
                this._nodeRepository[node.name] = null;
            }
        },

        getNode : function(name) {
            return this._nodeRepository[name];
        }
    });

    return Scene;
})