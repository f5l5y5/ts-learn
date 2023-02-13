interface EventFace {
	on: (name: string, callback: Function) => void
	emit: (name: string, ...args: Array<any>) => void
	off: (name: string, fn: Function) => void
	once: (name: string, fn: Function) => void
}

interface List {
	[key: string]: Array<Function>
}

class Dispatch implements EventFace {
	list: List
	constructor() {
		this.list = {}
	}

	on(name: string, fn: Function) {
		const callback = this.list[name] || []
		callback.push(fn)
		this.list[name] = callback
		console.log(this.list)
	}
	emit(name: string, ...args: Array<any>) {
		let callbackList = this.list[name]
		if (callbackList) {
			callbackList.forEach(fn => {
				fn.apply(this, args)
			})
		} else {
			console.error(`名称错误${name}`)
		}
	}
	off(name: string, fn: Function) {
		let callbackList = this.list[name]
		if (fn && callbackList) {
			let index = callbackList.findIndex(fns => fns === fn)
			callbackList.splice(index, 1)
		} else {
			console.error('事件未监听')
		}
	}
	once(name: string, fn: Function) {
		// 临时函数只接受一次 调用后删除
		let decor = (...args: Array<any>) => {
			fn.apply(this, args)
			this.off(name, decor)
		}
		this.on(name, decor)
	}
}

const o = new Dispatch()

o.on('post', d => {
	console.log('打印**222d', d)
})

o.off('post', () => {})
o.emit('post', '666')

// o.once('post', 'once')
