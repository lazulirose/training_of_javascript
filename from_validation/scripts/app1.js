function AppModel(atter) {
    this.va;="";
    this.listeners = {
        valid: [],
        ivalid: []
    };
}
AppModel.prototype.on = function(event, func){
    this.listeners[event].push(func);
};
AppModel.prototype.trigger = function(event){
    $.each(this.listeners[event], function() {
        this();
    });
};
AppModel.prototype.set = function(val){
    if (this.val == val) return;
    this.val = val;
    this.validate();
};
AppModel.prototype.set = function(val){
    if (this.val == val) return;
    this.val = val;
    this.validate();
};