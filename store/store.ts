import { makeAutoObservable } from 'mobx';
// import { ImageProps } from 'next/image';

export interface StoreI {
    hamburgerOpen: boolean;
    toggleSearch: boolean;
    counterDate: string;
    counterEndText: string;
    searchString: string;
    searchIndex: number;
    resetSearch: boolean;
    toogleHamburger: () => void;
    toggleSearchField: () => void;
    getCounterTime: (time: string) => void;
    getCounterEndText: (endText: string) => void;
    getSearchString: (str: string, index: number) => void;
    imgObj: {
        name: string;
        image: string;
        type: string;
        link: string;
    }[];
    getImgObj: (arr: StoreI['imgObj']) => void;
    heroTitleDesc: {
        title: string;
        description: string;
    };
    getHeroTitleDesc: (obj: StoreI['heroTitleDesc']) => void;
    resetSearchFn: () => void;
}

export const configStore: StoreI = {
    hamburgerOpen: false,
    toggleSearch: false,
    counterDate: '',
    counterEndText: '',
    searchString: '',
    searchIndex: 0,
    resetSearch: false,
    imgObj: [],
    heroTitleDesc: { title: '', description: '' },
    toogleHamburger() {
        this.hamburgerOpen = !this.hamburgerOpen;
        // console.log(this);
    },
    toggleSearchField() {
        this.toggleSearch = !this.toggleSearch;
    },
    getCounterTime(time) {
        this.counterDate = time;
    },
    getCounterEndText(endText) {
        this.counterEndText = endText;
    },
    getSearchString(str, index: number) {
        this.searchString = str;
        this.searchIndex = index;
    },
    getImgObj(arr) {
        this.imgObj = arr;
    },
    getHeroTitleDesc(obj) {
        this.heroTitleDesc.title = obj.title;
        this.heroTitleDesc.description = obj.description;
    },
    resetSearchFn() {
        this.resetSearch;
    },
};

function store(configStore: StoreI): StoreI {
    return makeAutoObservable(configStore);
}

export default store;
