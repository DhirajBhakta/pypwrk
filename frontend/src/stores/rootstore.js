import { makeAutoObservable } from "mobx"

// Model the application state.
class RootStore {
    secondsPassed = 0

    constructor() {
        makeAutoObservable(this)
    }

    increase() {
        this.secondsPassed += 1
    }

    reset() {
        this.secondsPassed = 0
    }
}

const rootStore = new RootStore()

export default rootStore;