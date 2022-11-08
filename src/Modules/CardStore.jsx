import { observable } from 'mobx';

const CardStore = observable({
    maxCount: 0,
    loadingCount: 0,
    isLoaded: false,
    isExist: false,

    increaseMaxCount(count) {
        this.maxCount = this.maxCount + count;
    },

    increaseLoadingCount() {
        this.loadingCount = this.loadingCount + 1;
        if (this.maxCount == this.loadingCount) {
            this.isLoaded = true;
        }
    }
});

export default CardStore;