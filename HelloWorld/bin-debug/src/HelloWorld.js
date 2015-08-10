var HelloWorld = (function (_super) {
    __extends(HelloWorld, _super);
    function HelloWorld() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var __egretProto__ = HelloWorld.prototype;
    __egretProto__.onAddToStage = function (event) {
        egret.Profiler.getInstance().run();
    };
    return HelloWorld;
})(egret.DisplayObjectContainer);
HelloWorld.prototype.__class__ = "HelloWorld";
