class Dispatch {
    constructor() {
        this.list = {};
    }
    on(name, fn) {
        const callback = this.list[name] || [];
        callback.push(fn);
        this.list[name] = callback;
        console.log(this.list);
    }
    emit(name, ...args) {
        let callbackList = this.list[name];
        if (callbackList) {
            callbackList.forEach(fn => {
                fn.apply(this, args);
            });
        }
        else {
            console.error(`名称错误${name}`);
        }
    }
    off(name, fn) { }
    once(name, fn) { }
}
const o = new Dispatch();
o.on('post', d => {
    console.log('打印***d', d);
});
o.emit('post', '666');
// o.off('post', () => {})
// o.once('post', 'once')
//# sourceMappingURL=watcher.js.map