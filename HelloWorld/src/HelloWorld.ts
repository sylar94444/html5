class HelloWorld extends egret.DisplayObjectContainer
{   
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }
    private onAddToStage(event:egret.Event)
    {
		egret.Profiler.getInstance().run();
    }
}